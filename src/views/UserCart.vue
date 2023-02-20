<template>
  <div class="container">
    <div class="mt-4">
      <!-- 產品列表 -->
      <user-products></user-products>
      <!-- 購物車列表 -->
      <user-carts></user-carts>
    </div>
    <div class="my-5 row justify-content-center">
      <!-- 驗證表單 -->
      <order-form></order-form>
    </div>
  </div>
</template>

<script>
import userProducts from "@/components/UserProducts.vue";
import userCarts from "@/components/UserCarts.vue";
import orderForm from "@/components/OrderForm.vue"

export default {
  components: {
    userProducts,
    userCarts,
    orderForm
  }
}
</script>