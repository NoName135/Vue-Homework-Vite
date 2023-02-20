<template>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openArticleModal(true)">
        建立新的頁面
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 200px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 100px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ $filters.date(article.create_at) }}</td>
          <td>
            <span v-if="article.isPublic">已上架</span>
            <span v-else>未上架</span>
          </td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="openArticleModal(false, article)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="openModal('delete', article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 頁碼 -->
    <pagination :page-obj="pagination" @emit-page="getArticles"></pagination>
    <!-- Modals -->
    <article-modal ref="articleModal" :article="tempArticle" :is-new="isNew" @update="updateArticle"></article-modal>
    <delete-modal ref="deleteModal"></delete-modal>
  </div>
</template>

<script>
import articleModal from '@/components/ArticleModal.vue';
import deleteModal from "@/components/DeleteModal.vue";
import pagination from "@/components/Pagination.vue";

import { mapActions, mapState } from 'pinia';
import loadingStore from "@/stores/loadingStore.js";
import swalStore from "@/stores/swalStore.js";
import modalStore from "@/stores/modalStore.js";
import articlesStore from "@/stores/articlesStore.js"

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      isNew: false,
      tempArticle: {},
    };
  },
  methods: {
    openArticleModal(type, item) {
      this.isNew = type;
      if(item) {
        // content 屬性要使用 article/{id} 的 API 才會出現
        this.$http.get(`${VITE_API}api/${VITE_PATH}/admin/article/${item.id}`)
          .then(res => {
            this.tempArticle = res.data.article;
          })
          .catch(err => {
            console.log(err);
            //Swal
            this.triggerToast('error', err.response.data.message)
          })
      }else{
        this.tempArticle = {
          isPublic: true,
          create_at: Math.floor(new Date().getTime() / 1000),
        }
      }
      this.$refs.articleModal.openModal();
    },
    updateArticle(item) {
      const httpVerb = this.isNew ? 'post' : 'put';
      let url = `${VITE_API}api/${VITE_PATH}/admin/article`;
      if (!this.isNew) {
        url = `${VITE_API}api/${VITE_PATH}/admin/article/${item.id}`;
      }

      this.loadings.pageLoading = true;
      this.$http
        [httpVerb](url, {data:{...item}})
        .then((res) => {
          this.$refs.articleModal.hideModal()
          this.getArticles(this.pagination.current_page);
          this.loadings.pageLoading = false;
          //Swal
          this.triggerToast('success', this.isNew ? "已新增文章" : "已更新文章")
        })
        .catch((err) => {
          this.loadings.pageLoading = false;
          //Swal
          this.triggerToast('error', err.response.data.message)
        });
    },
    ...mapActions(modalStore, ['createDeleteModalRef', 'openModal']),
    ...mapActions(articlesStore, ['getArticles']),
    ...mapActions(swalStore, ['triggerToast'])
  },
  computed: {
    ...mapState(articlesStore, ['articles', 'pagination']),
    ...mapState(loadingStore, ['loadings']),
  },
  mounted() {
    const deleteModal = this.$refs.deleteModal;
    this.createDeleteModalRef(deleteModal, '文章');

    this.getArticles();
  },
  components: {
    articleModal,
    deleteModal,
    pagination
  },
};
</script>
