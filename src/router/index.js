import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/admin",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "products",
        name: "產品列表",
        component: () => import("../views/Products.vue"),
      },
      {
        path: "orders",
        component: () => import("../views/Orders.vue"),
      },
      {
        path: "coupons",
        component: () => import("../views/Coupons.vue"),
      },
      {
        path: "article",
        component: () => import("../views/Article.vue"),
      },
    ],
  },
  {
    path: "/user",
    component: () => import("../views/Dashboard.vue"),
    children: [
      {
        path: "articles",
        component: () => import("../views/UserArticles.vue"),
      },
      {
        path: "article/:articleId",
        component: () => import("../views/UserArticle.vue"),
      },
      {
        path: "cart",
        component: () => import("../views/UserCart.vue"),
      },
      {
        path: "product/:productId",
        component: () => import("../views/UserProduct.vue"),
      },
      {
        path: "checkout/:orderId",
        component: () => import("../views/UserCheckout.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "產品列表" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: "active",
  routes,
});

export default router;
