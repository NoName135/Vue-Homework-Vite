<template>
  <Navbar/>
  <div class="container-fluid mt-3 position-relative">
    <router-view v-if="checkLogin"/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import swalStore from "@/stores/swalStore.js";
import { mapActions } from "pinia";

const { VITE_API } = import.meta.env;

export default {
  data() {
    return {
      checkLogin: false,
    };
  },
  methods: {
    ...mapActions(swalStore, ['triggerToast'])
  },
  mounted() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;

    const api = `${VITE_API}api/user/check`;
    this.$http.post(api)
      .then((res) => {
        this.checkLogin = true;
      }).catch((err) => {
        this.$router.push('/');
        //Swal
        this.triggerToast('error', err.response.data.message)
      });
  },
  components: {
    Navbar
  },
};
</script>
