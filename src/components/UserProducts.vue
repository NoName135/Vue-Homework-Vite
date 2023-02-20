<template>
  <table class="table align-middle">
      <thead>
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td style="width: 200px">
            <div :style="{height: '100px', backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundImage: `url(${product.imageUrl})`}">
            </div>
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            <div class="h5" v-if="!product.price">{{ product.origin_price }} 元</div>
            <del class="h6" v-if="product.price">原價 {{ product.origin_price }} 元</del>
            <div class="h5" v-if="product.price">現在只要 {{ product.price }} 元</div>
          </td>
          <td>
            <div class="btn-group btn-group-sm">
              <button type="button" class="btn btn-outline-secondary"
                :disabled="loadings.loadingId === product.id" @click="$router.push(`/user/product/${product.id}`)">
                查看更多
              </button>
              <button type="button" class="btn btn-outline-danger"
                :disabled="loadings.loadingId === product.id" @click="addToCart(product.id)">
                <font-awesome-icon :icon="['fas', 'spinner']" spin
                  v-if="loadings.loadingId === product.id">
                </font-awesome-icon>
                加到購物車
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 頁碼 -->
    <pagination :page-obj="pagination" @emit-page="getProducts"></pagination>
</template>

<script>
import pagination from '@/components/Pagination.vue';

import loadingStore from '@/stores/loadingStore.js';
import userProductsStore from '@/stores/UserProductsStore.js'
import userCartsStore from '@/stores/userCartsStore.js';

import { mapActions, mapState } from "pinia"

export default {
  methods: {
    ...mapActions(userProductsStore, [ 'getProducts' ]),
    ...mapActions(userCartsStore, ['addToCart'])
  },
  computed: {
    ...mapState(loadingStore, ['loadings']),
    ...mapState(userProductsStore, ['products', 'pagination']),
  },
  mounted() {
    this.getProducts();
  },
  components: {
    pagination
  },
}
</script>
