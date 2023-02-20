<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2 g-4">
      <div v-for="article in articles" :key="article.id">
        <div class="col">
          <div class="card">
            <img :src="article.imageUrl" class="card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ article.title }}</h5>
              <div v-html="article.description"></div>
            </div>
            <div class="card-footer">
              <router-link
                :to="`/user/article/${article.id}`"
                v-if="article.isPublic"
                class="btn btn-outline-primary"
              >
                文章頁面
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 頁碼 -->
    <pagination class="mt-5" :page-obj="pagination" @emit-page="getArticles"></pagination>
  </div>
</template>

<script>
import pagination from "@/components/Pagination.vue";
import loadingStore from '@/stores/loadingStore.js';
import swalStore from '@/stores/swalStore.js';
import { mapActions, mapState } from 'pinia';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      articles: [],
      isNew: false,
      tempArticle: {},
      pagination: {}
    };
  },
  methods: {
    getArticles(page = 1) {
      this.loadings.pageLoading = true;
      this.$http.get(`${VITE_API}api/${VITE_PATH}/articles?page=${page}`)
        .then((res) => {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
          this.loadings.pageLoading = false;
        }).catch((err) => {
          this.loadings.pageLoading = false;
          //Swal
          this.triggerToast('error', err.response.data.message)
        });
    },
    ...mapActions(swalStore, ['triggerToast'])
  },
  computed: {
    ...mapState(loadingStore, ['loadings']),
  },
  mounted() {
    this.getArticles();
  },
  components: {
    pagination
  }
};
</script>