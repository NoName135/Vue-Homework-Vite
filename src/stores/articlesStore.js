import axios from "axios";
import Swal from "sweetalert2";

import loadingStore from "./loadingStore.js";
import swalStore from "./swalStore.js";
import { defineStore } from "pinia";

const { VITE_API, VITE_PATH } = import.meta.env;
const { loadings } = loadingStore();
const { swalToast } = swalStore();

export default defineStore("articles", {
  state: () => {
    return {
      articles: [],
      pagination: {},
    };
  },
  actions: {
    getArticles(page = 1) {
      loadings.pageLoading = true;
      axios.get(`${VITE_API}api/${VITE_PATH}/admin/articles`)
        .then(res => {
          // console.log(res.data);
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
          loadings.pageLoading = false;
        })
        .catch(err => {
          loadings.pageLoading = false;
          //Swal
          Swal.fire({
            icon: "error",
            title: err.response.data.message,
            ...swalToast,
          });
        })
      }
  },
  getters: {},
});
