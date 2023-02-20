<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="{name: '產品列表'}" class="navbar-brand">糖尿病製造廠</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/admin/products" class="nav-link">產品</router-link>
          <router-link to="/admin/orders" class="nav-link">訂單</router-link>
          <router-link to="/admin/coupons" class="nav-link">優惠券</router-link>
          <router-link to="/admin/article" class="nav-link">貼文</router-link>
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
        <div class="navbar-nav ms-auto">
          <router-link to="/user/articles" class="nav-link">Blog</router-link>
          <router-link to="/user/cart" class="nav-link">購物車</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import swalStore from "../stores/swalStore.js";
import { mapActions, mapState } from "pinia";

const { VITE_API } = import.meta.env;

export default {
  methods: {
    logout() {
      const api = `${VITE_API}/logout`;
      this.$http.post(api)
        .then((res) => {
          this.$router.push('/');
          // Swal
          this.triggerToast('success', "已登出")
        }).catch((err) => {
          // SWal
          this.triggerToast('error', err.response.data.message)
        });
    },
    ...mapActions(swalStore, ['triggerToast'])
  },
};
</script>