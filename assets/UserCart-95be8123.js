import{p as R}from"./Pagination-46aa8bd6.js";import{l as v,f as H,k as C,m as k,a as y,_ as S,r as m,o as n,c as l,b as t,F as P,s as D,y as x,u as p,j as h,i as q,g as E,d as r,w as O,n as V}from"./index-3168ab36.js";import{s as L,S as f}from"./swalStore-be32231f.js";const{VITE_API:X,VITE_PATH:j}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homework-Vite",MODE:"production",DEV:!1,PROD:!0,SSR:!1},{loadings:A}=v(),{swalToast:M}=L(),B=H("userProducts",{state:()=>({products:[],pagination:{}}),actions:{getProducts(e=1){const o=`${X}/api/${j}/products?page=${e}`;A.pageLoading=!0,C.get(o).then(a=>{const{products:d,pagination:_}=a.data;this.products=d,this.pagination=_,A.pageLoading=!1}).catch(a=>{A.pageLoading=!1,Swal.fire({icon:"error",title:a.response.data.message,...M})})}},getters:{}}),{VITE_API:b,VITE_PATH:I}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homework-Vite",MODE:"production",DEV:!1,PROD:!0,SSR:!1},{loadings:i}=v(),{swalToast:$}=L(),w=H("cartItems",{state:()=>({pageLoading:!1,cart:{}}),actions:{getCart(){const e=`${b}/api/${I}/cart`;i.pageLoading=!0,C.get(e).then(o=>{this.cart=o.data.data,i.pageLoading=!1}).catch(o=>{i.pageLoading=!1,f.fire({icon:"error",title:o.response.data.message,...$})})},addToCart(e,o=1){const a=`${b}/api/${I}/cart`;i.loadingId=e,C.post(a,{data:{product_id:e,qty:o}}).then(d=>{i.loadingId="",i.loadingBtn="",this.getCart(),f.fire({icon:"success",title:"已加入購物車",...$})}).catch(d=>{i.loadingId="",i.loadingBtn="",f.fire({icon:"error",title:d.response.data.message,...$})})},deleteCart(e){const o=e?`${b}/api/${I}/cart/${e}`:`${b}/api/${I}/carts`;i.loadingCartId=e,C.delete(o).then(a=>{i.loadingCartId="",this.getCart(),e?f.fire({icon:"success",title:"已從購物車移除商品",...$}):f.fire({icon:"success",title:"已清空購物車",...$})}).catch(a=>{i.loadingCartId="",f.fire({icon:"error",title:a.response.data.message,...$})})},updateCart(e,o){const a=`${b}/api/${I}/cart/${e.id}`,d=this.cart.carts.find(_=>_.id===e.id);d.qty!=o&&(d.qty=o*1,i.loadingCartId=e.id,C.put(a,{data:{product_id:e.product_id,qty:d.qty}}).then(_=>{i.loadingCartId="",this.getCart(),f.fire({icon:"success",title:"已更新數量",...$})}).catch(_=>{i.loadingCartId="",f.fire({icon:"error",title:_.response.data.message,...$})}))}},getters:{}}),U={methods:{...k(B,["getProducts"]),...k(w,["addToCart"])},computed:{...y(v,["loadings"]),...y(B,["products","pagination"])},mounted(){this.getProducts()},components:{pagination:R}},F={class:"table align-middle"},N=t("thead",null,[t("tr",null,[t("th",null,"圖片"),t("th",null,"商品名稱"),t("th",null,"價格"),t("th")])],-1),z={style:{width:"200px"}},G={key:0,class:"h5"},J={key:1,class:"h6"},K={key:2,class:"h5"},Q={class:"btn-group btn-group-sm"},W=["disabled","onClick"],Y=["disabled","onClick"];function Z(e,o,a,d,_,T){const c=m("font-awesome-icon"),u=m("pagination");return n(),l(P,null,[t("table",F,[N,t("tbody",null,[(n(!0),l(P,null,D(e.products,s=>(n(),l("tr",{key:s.id},[t("td",z,[t("div",{style:x({height:"100px",backgroundSize:"cover",backgroundPosition:"center",backgroundImage:`url(${s.imageUrl})`})},null,4)]),t("td",null,p(s.title),1),t("td",null,[s.price?h("",!0):(n(),l("div",G,p(s.origin_price)+" 元",1)),s.price?(n(),l("del",J,"原價 "+p(s.origin_price)+" 元",1)):h("",!0),s.price?(n(),l("div",K,"現在只要 "+p(s.price)+" 元",1)):h("",!0)]),t("td",null,[t("div",Q,[t("button",{type:"button",class:"btn btn-outline-secondary",disabled:e.loadings.loadingId===s.id,onClick:g=>e.$router.push(`/user/product/${s.id}`)}," 查看更多 ",8,W),t("button",{type:"button",class:"btn btn-outline-danger",disabled:e.loadings.loadingId===s.id,onClick:g=>e.addToCart(s.id)},[e.loadings.loadingId===s.id?(n(),q(c,{key:0,icon:["fas","spinner"],spin:""})):h("",!0),E(" 加到購物車 ")],8,Y)])])]))),128))])]),r(u,{"page-obj":e.pagination,onEmitPage:e.getProducts},null,8,["page-obj","onEmitPage"])],64)}const tt=S(U,[["render",Z]]),et={methods:{...k(w,["getCart","deleteCart","updateCart"])},computed:{...y(v,["loadings","pageLoading"]),...y(w,["cart"])},mounted(){this.getCart()}},st={class:"text-end"},ot=["disabled"],at={class:"table align-middle"},nt=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",{class:"ps-5"},"單價"),t("th",null,"小計")])],-1),it=["disabled","onClick"],rt={key:0,class:"text-success"},lt={class:"input-group input-group-sm"},dt={class:"input-group"},ct=["disabled","value","onBlur"],ut={class:"input-group-text",id:"basic-addon2"},_t={class:"ps-5"},pt={class:"text-end"},gt={key:0,class:"text-success"},ht=t("td",{colspan:"4",class:"text-end"},"總計",-1),mt={class:"text-end"},ft={key:0},$t=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),bt={class:"text-end text-success"};function It(e,o,a,d,_,T){var u;const c=m("font-awesome-icon");return n(),l(P,null,[t("div",st,[t("button",{class:"btn btn-outline-danger",type:"button",disabled:!((u=e.cart.carts)!=null&&u.length),onClick:o[0]||(o[0]=s=>e.deleteCart())},"清空購物車",8,ot)]),t("table",at,[nt,t("tbody",null,[e.cart.carts?(n(!0),l(P,{key:0},D(e.cart.carts,s=>(n(),l("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:s.id===e.loadings.loadingCartId,onClick:g=>e.deleteCart(s.id)},[s.id===e.loadings.loadingCartId?(n(),q(c,{key:0,icon:["fas","spinner"],spin:""})):h("",!0),E(" x ")],8,it)]),t("td",null,[E(p(s.product.title)+" ",1),s.coupon?(n(),l("div",rt," 已套用優惠券 ")):h("",!0)]),t("td",null,[t("div",lt,[t("div",dt,[t("input",{min:"1",type:"number",class:"form-control",disabled:s.id===e.loadings.loadingCartId,value:s.qty,onBlur:g=>e.updateCart(s,g.target.value)},null,40,ct),t("span",ut,p(s.product.unit),1)])])]),t("td",_t,p(s.product.price),1),t("td",pt,[e.cart.total>e.cart.final_total?(n(),l("small",gt,"折扣價：")):h("",!0),E(" "+p(s.final_total),1)])]))),128)):h("",!0)]),t("tfoot",null,[t("tr",null,[ht,t("td",mt,p(e.cart.total),1)]),e.cart.total>e.cart.final_total?(n(),l("tr",ft,[$t,t("td",bt,p(e.cart.final_total),1)])):h("",!0)])])],64)}const Ct=S(et,[["render",It]]),{VITE_API:kt,VITE_PATH:yt}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homework-Vite",MODE:"production",DEV:!1,PROD:!0,SSR:!1},vt={methods:{...k(w,["getCart"]),createOrder(e){const o=`${kt}/api/${yt}/order`;this.loadings.pageLoading=!0,this.$http.post(o,{data:{user:{name:e.姓名,email:e.email,tel:e.電話,address:e.地址},message:e.留言}}).then(a=>{this.$refs.form.resetForm(),this.loadings.pageLoading=!1,this.triggerToast("success",a.data.message),this.$router.push(`/user/checkout/${a.data.orderId}`)}).catch(a=>{this.loadings.pageLoading=!1,this.triggerToast("error",a.response.data.message)})},...k(L,["triggerToast"])},computed:{...y(v,["loadings"])}},Tt={class:"my-5 row justify-content-center"},Vt={class:"mb-3"},Et=t("label",{for:"email",class:"form-label"},"Email",-1),Pt={class:"mb-3"},wt=t("label",{for:"name",class:"form-label"},"收件人姓名",-1),St={class:"mb-3"},At=t("label",{for:"tel",class:"form-label"},"收件人電話 (09XXXXXXXX)",-1),Lt={class:"mb-3"},Bt=t("label",{for:"address",class:"form-label"},"收件人地址",-1),Ht={class:"mb-3"},Dt=t("label",{for:"message",class:"form-label"},"留言",-1),qt=t("div",{class:"text-end"},[t("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function Rt(e,o,a,d,_,T){const c=m("V-field"),u=m("ErrorMessage"),s=m("V-form");return n(),l("div",Tt,[r(s,{ref:"form",class:"col-md-6",onSubmit:T.createOrder},{default:O(({errors:g})=>[t("div",Vt,[Et,r(c,{id:"email",name:"email",type:"email",placeholder:"請輸入 Email",class:V(["form-control",{"is-invalid":g.email}]),rules:"required|email"},null,8,["class"]),r(u,{name:"email",class:"invalid-feedback"})]),t("div",Pt,[wt,r(c,{id:"name",name:"姓名",type:"text",placeholder:"請輸入姓名",class:V(["form-control",{"is-invalid":g.姓名}]),rules:"required"},null,8,["class"]),r(u,{name:"姓名",class:"invalid-feedback"})]),t("div",St,[At,r(c,{id:"tel",name:"電話",type:"tel",placeholder:"請輸入電話",class:V(["form-control",{"is-invalid":g.電話}]),rules:"required|phone"},null,8,["class"]),r(u,{name:"電話",class:"invalid-feedback"})]),t("div",Lt,[Bt,r(c,{id:"address",name:"地址",type:"text",placeholder:"請輸入地址",class:V(["form-control",{"is-invalid":g.地址}]),rules:"required"},null,8,["class"]),r(u,{name:"地址",class:"invalid-feedback"})]),t("div",Ht,[Dt,r(c,{as:"textarea",id:"message",name:"留言",class:"form-control",cols:"30",rows:"10"})]),qt]),_:1},8,["onSubmit"])])}const xt=S(vt,[["render",Rt]]),Ot={components:{userProducts:tt,userCarts:Ct,orderForm:xt}},Xt={class:"container"},jt={class:"mt-4"},Mt={class:"my-5 row justify-content-center"};function Ut(e,o,a,d,_,T){const c=m("user-products"),u=m("user-carts"),s=m("order-form");return n(),l("div",Xt,[t("div",jt,[r(c),r(u)]),t("div",Mt,[r(s)])])}const Gt=S(Ot,[["render",Ut]]);export{Gt as default};