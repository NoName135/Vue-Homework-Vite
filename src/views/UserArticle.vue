<template>
  <div class="container">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/user/articles">部落格列表</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
      </ol>
    </nav>
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ article.title }}</h2>
        <p>
          <small class="text-muted">{{ $filters.date(article.create_at) }}</small> -
          <small class="text-muted">作者：{{ article.author }}</small>
        </p>
        <img :src="article.imageUrl" class="img-fluid mb-3">
        <div v-html="article.content"></div>
      </article>
    </div>
  </div>
</template>

<script>
import loadingStore from '@/stores/loadingStore.js';
import swalStore from '@/stores/swalStore.js';
import { mapActions, mapState } from 'pinia';

const { VITE_API, VITE_PATH } = import.meta.env;

export default {
  data() {
    return {
      id: '',
      article: {},
    };
  },
  methods: {
    getArticle() {
      this.loadings.pageLoading = true;
      this.$http.get(`${VITE_API}api/${VITE_PATH}/article/${this.id}`)
        .then((res) => {
          this.article = res.data.article;
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
    this.id = this.$route.params.articleId;
    this.getArticle();
  },
};
</script>
