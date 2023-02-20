<template>
  <VueLoading :active="loadings.pageLoading"></VueLoading>
  <router-view></router-view>
</template>

<script>
import { mapState } from 'pinia';
import loadingStore from './stores/loadingStore';

export default {
  computed: {
    ...mapState(loadingStore, ['loadings'])
  }
}
</script>

<style lang="scss">
@import "./assets/all";
// bootstrap icons CDN
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css");
</style>
