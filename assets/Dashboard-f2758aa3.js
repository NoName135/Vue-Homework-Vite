import{s as p}from"./swalStore-fe672b7f.js";import{m as h,_ as v,r as d,o as u,c as m,b as s,d as e,w as o,g as r,h as k,i as f,j as b,F as $}from"./index-511ca679.js";const{VITE_API:T}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homework-Vite",MODE:"production",DEV:!1,PROD:!0,SSR:!1},V={methods:{logout(){const n=`${T}/logout`;this.$http.post(n).then(t=>{this.$router.push("/"),this.triggerToast("success","已登出")}).catch(t=>{this.triggerToast("error",t.response.data.message)})},...h(p,["triggerToast"])}},A={class:"navbar navbar-expand-lg navbar-dark bg-dark"},E={class:"container-fluid"},w=s("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},[s("span",{class:"navbar-toggler-icon"})],-1),I={class:"collapse navbar-collapse",id:"navbarNavAltMarkup"},x={class:"navbar-nav"},N={class:"navbar-nav ms-auto"};function P(n,t,c,g,_,i){const a=d("router-link");return u(),m("nav",A,[s("div",E,[e(a,{to:"{name: '產品列表'}",class:"navbar-brand"},{default:o(()=>[r("糖尿病製造廠")]),_:1}),w,s("div",I,[s("div",x,[e(a,{to:"/admin/products",class:"nav-link"},{default:o(()=>[r("產品")]),_:1}),e(a,{to:"/admin/orders",class:"nav-link"},{default:o(()=>[r("訂單")]),_:1}),e(a,{to:"/admin/coupons",class:"nav-link"},{default:o(()=>[r("優惠券")]),_:1}),e(a,{to:"/admin/article",class:"nav-link"},{default:o(()=>[r("貼文")]),_:1}),s("a",{href:"#",onClick:t[0]||(t[0]=k((...l)=>i.logout&&i.logout(...l),["prevent"])),class:"nav-link"},"登出")]),s("div",N,[e(a,{to:"/user/articles",class:"nav-link"},{default:o(()=>[r("Blog")]),_:1}),e(a,{to:"/user/cart",class:"nav-link"},{default:o(()=>[r("購物車")]),_:1})])])])])}const B=v(V,[["render",P]]),{VITE_API:D}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homework-Vite",MODE:"production",DEV:!1,PROD:!0,SSR:!1},S={data(){return{checkLogin:!1}},methods:{...h(p,["triggerToast"])},mounted(){const n=document.cookie.replace(/(?:(?:^|.*;\s*)loginToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=`${n}`;const t=`${D}api/user/check`;this.$http.post(t).then(c=>{this.checkLogin=!0}).catch(c=>{this.$router.push("/"),this.triggerToast("error",c.response.data.message)})},components:{Navbar:B}},M={class:"container-fluid mt-3 position-relative"};function R(n,t,c,g,_,i){const a=d("Navbar"),l=d("router-view");return u(),m($,null,[e(a),s("div",M,[_.checkLogin?(u(),f(l,{key:0})):b("",!0)])],64)}const H=v(S,[["render",R]]);export{H as default};