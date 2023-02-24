import{m as x}from"./modalMixin-21136f61.js";import{_ as y,o as l,c as a,b as e,q as p,v as c,t as V,u as m,m as _,a as h,l as $,F as b,s as S,d as f,r as C}from"./index-3168ab36.js";import{c as g,d as T,m as N}from"./DeleteModal-df886aa5.js";import{s as E}from"./swalStore-be32231f.js";const U={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},emits:["update"],mixins:[x],data(){return{tempCoupon:{},dueDate:""}},watch:{coupon(){this.tempCoupon=this.coupon;const o=new Date(this.tempCoupon.due_date*1e3);this.dueDate=`${o.getFullYear()}-${(o.getMonth()+1).toString().padStart(2,0)}-${o.getDate().toString().padStart(2,0)}`},dueDate(){this.tempCoupon.due_date=Math.floor(new Date(this.dueDate)/1e3)}}},L={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},A={class:"modal-dialog",role:"document"},I={class:"modal-content"},B={class:"modal-header"},P={class:"modal-title",id:"exampleModalLabel"},R={key:0},F={key:1},H=e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),O={class:"modal-body"},j={class:"mb-3"},q=e("label",{for:"title"},"標題",-1),Y={class:"mb-3"},z=e("label",{for:"coupon_code"},"優惠碼",-1),G={class:"mb-3"},J=e("label",{for:"dueDate"},"到期日",-1),K={class:"mb-3"},Q=e("label",{for:"price"},"折扣百分比",-1),W={class:"mb-3"},X={class:"form-check"},Z=e("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),ee={class:"modal-footer"},te=e("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"}," Close ",-1),oe=["disabled"];function se(o,t,i,u,s,r){return l(),a("div",L,[e("div",A,[e("div",I,[e("div",B,[e("h5",P,[i.isNew?(l(),a("span",R,"新增優惠卷")):(l(),a("span",F,"編輯優惠卷"))]),H]),e("div",O,[e("div",j,[q,p(e("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":t[0]||(t[0]=n=>s.tempCoupon.title=n),placeholder:"請輸入標題"},null,512),[[c,s.tempCoupon.title]])]),e("div",Y,[z,p(e("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":t[1]||(t[1]=n=>s.tempCoupon.code=n),placeholder:"請輸入優惠碼"},null,512),[[c,s.tempCoupon.code]])]),e("div",G,[J,p(e("input",{type:"date",class:"form-control",id:"dueDate","onUpdate:modelValue":t[2]||(t[2]=n=>s.dueDate=n)},null,512),[[c,s.dueDate]])]),e("div",K,[Q,p(e("input",{type:"number",class:"form-control",id:"price",min:"1",max:"99","onUpdate:modelValue":t[3]||(t[3]=n=>s.tempCoupon.percent=n),placeholder:"請輸入折扣百分比"},null,512),[[c,s.tempCoupon.percent,void 0,{number:!0}]])]),e("div",W,[e("div",X,[p(e("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":t[4]||(t[4]=n=>s.tempCoupon.is_enabled=n),id:"is_enabled"},null,512),[[V,s.tempCoupon.is_enabled]]),Z])])]),e("div",ee,[te,e("button",{type:"button",class:"btn btn-primary",disabled:!s.tempCoupon.title||!s.tempCoupon.code||!s.tempCoupon.percent,onClick:t[5]||(t[5]=n=>o.$emit("update",s.tempCoupon))},m(i.isNew?"新增優惠卷":"更新優惠券"),9,oe)])])])],512)}const ne=y(U,[["render",se]]),{VITE_API:v,VITE_PATH:M}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homework-Vite",MODE:"production",DEV:!1,PROD:!0,SSR:!1},le={data(){return{tempCoupon:{},isNew:!1}},methods:{openCouponModal(o,t){this.isNew=o,t?this.tempCoupon={...t}:this.tempCoupon={is_enabled:0,due_date:Math.ceil(new Date().getTime()/1e3)},this.$refs.couponModal.openModal()},updateCoupon(o){if(o.percent<1||o.percent>=100){this.triggerToast("info","coupon折扣百分比需介於1~99");return}else{const t=this.isNew?"post":"put";let i=`${v}api/${M}/admin/coupon`;this.isNew||(i=`${v}api/${M}/admin/coupon/${o.id}`),this.loadings.pageLoading=!0,this.$http[t](i,{data:{...o}}).then(u=>{this.$refs.couponModal.hideModal(),this.getCoupons(),this.loadings.pageLoading=!1,this.triggerToast("success",this.isNew?"已新增優惠券":"已更新優惠券")}).catch(u=>{this.loadings.pageLoading=!1,this.triggerToast("error",u.response.data.message)})}},..._(N,["createDeleteModalRef","openModal"]),..._(g,["getCoupons"]),..._(E,["triggerToast"])},computed:{...h(g,["coupons"]),...h($,["loadings"])},mounted(){const o=this.$refs.deleteModal;this.createDeleteModalRef(o,"優惠券"),this.getCoupons()},components:{couponModal:ne,deleteModal:T}},ae={class:"text-end mt-4"},de={class:"table mt-4"},ie=e("thead",null,[e("tr",null,[e("th",null,"名稱"),e("th",null,"折扣百分比"),e("th",null,"到期日"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),pe={key:0,class:"text-success"},ue={key:1,class:"text-muted"},re={class:"btn-group"},ce=["onClick"],me=["onClick"];function _e(o,t,i,u,s,r){const n=C("coupon-modal"),k=C("delete-modal");return l(),a(b,null,[e("div",null,[e("div",ae,[e("button",{class:"btn btn-primary",type:"button",onClick:t[0]||(t[0]=d=>r.openCouponModal(!0))}," 建立新的優惠券 ")]),e("table",de,[ie,e("tbody",null,[(l(!0),a(b,null,S(o.coupons,(d,w)=>(l(),a("tr",{key:w},[e("td",null,m(d.title),1),e("td",null,m(d.percent)+"%",1),e("td",null,m(o.$filters.date(d.due_date)),1),e("td",null,[d.is_enabled===1?(l(),a("span",pe,"啟用")):(l(),a("span",ue,"未啟用"))]),e("td",null,[e("div",re,[e("button",{class:"btn btn-outline-primary btn-sm",onClick:D=>r.openCouponModal(!1,d)}," 編輯 ",8,ce),e("button",{class:"btn btn-outline-danger btn-sm",onClick:D=>o.openModal("delete",d)}," 刪除 ",8,me)])])]))),128))])])]),f(n,{ref:"couponModal",coupon:s.tempCoupon,"is-new":s.isNew,onUpdate:r.updateCoupon},null,8,["coupon","is-new","onUpdate"]),f(k,{ref:"deleteModal"},null,512)],64)}const ge=y(le,[["render",_e]]);export{ge as default};
