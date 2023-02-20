import { defineStore } from "pinia";

export default defineStore('loading', {
  state: () => {
    return {
      loadings: {
        pageLoading: false,
        loadingId: '',
        loadingCartId: ''
      }
    };
  },
  actions: {
  },
  getters: {},
});
