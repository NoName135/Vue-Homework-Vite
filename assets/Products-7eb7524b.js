import{_ as w,k as I,o as n,c as l,p as C,b as e,F as u,a as k,r as P,q as c,v as m,d as g,w as M,s as B,t as E,h as D,m as $,g as b,j as y,u as f}from"./index-3168ab36.js";import{m as V,p as U,M as S,d as T}from"./DeleteModal-df886aa5.js";import{p as R}from"./Pagination-46aa8bd6.js";import"./swalStore-be32231f.js";const{VITE_API:A,VITE_PATH:F}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"weekhomeworks",BASE_URL:"/Vue-Homework-Vite",MODE:"production",DEV:!1,PROD:!0,SSR:!1},N={props:["index"],emits:["changeImg"],methods:{handleFile(t,o,p){const h=t.target.files[0],s=new FormData;s.append("file-to-upload",h),h&&I.post(`${A}/api/${F}/admin/upload`,s).then(d=>{const a=d.data.imageUrl;this.$emit("changeImg",p,o,a)}).catch(d=>{alert(d.response.data.message)})}}};function z(t,o,p,h,s,d){return n(),l(u,null,[C(t.$slots,"main",{},()=>[e("input",{type:"file",class:"form-control",onChange:o[0]||(o[0]=a=>d.handleFile(a,"imageUrl"))},null,32)]),C(t.$slots,"multi",{},()=>[e("input",{type:"file",class:"form-control",onChange:o[1]||(o[1]=a=>d.handleFile(a,"imagesUrl",p.index))},null,32)])],64)}const H=w(N,[["render",z]]),L={data(){return{modal:""}},methods:{modalShow(){this.modal.show()},modalHide(){this.modal.hide()},changeImage(t,o,p){t===void 0?this.tempProduct[o]=p:this.tempProduct[o][t]=p}},computed:{...k(V,["tempProduct","isNew","updateProduct"]),...k(U,["pagination"])},mounted(){this.modal=new S(this.$refs.modal,{keyboard:!1,backdrop:"static"})},components:{UploadImg:H}},j={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},O={class:"modal-dialog modal-xl"},q={class:"modal-content border-0"},G={class:"modal-header bg-dark text-white"},J={id:"productModalLabel",class:"modal-title"},K={key:0},Q={key:1},W=e("button",{type:"button",class:"btn-close bg-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),X={class:"modal-body"},Y={class:"row"},Z={class:"col-sm-4"},x={class:"mb-2"},ee={class:"mb-3"},te=e("label",{for:"imageUrl",class:"form-label"},"主要圖片 (請輸入網址或上傳圖片)",-1),oe=e("span",null,null,-1),se=["src"],ne=e("h3",{class:"mb-3"},"多圖新增",-1),le={class:"mb-3"},ie=["for"],re=["id","onUpdate:modelValue"],de=e("span",null,null,-1),ae=["src"],ce={key:0},me={key:1},pe={class:"col-sm-8"},ue={class:"mb-3"},he=e("label",{for:"title",class:"form-label"},"標題",-1),ge={class:"row"},_e={class:"mb-3 col-md-6"},be=e("label",{for:"category",class:"form-label"},"分類",-1),ye={class:"mb-3 col-md-6"},fe=e("label",{for:"price",class:"form-label"},"單位",-1),Pe={class:"row"},ve={class:"mb-3 col-md-6"},ke=e("label",{for:"origin_price",class:"form-label"},"原價",-1),Ue={class:"mb-3 col-md-6"},we=e("label",{for:"price",class:"form-label"},"售價",-1),Ce=e("hr",null,null,-1),Me={class:"mb-3"},$e=e("label",{for:"description",class:"form-label"},"產品描述",-1),Be={class:"mb-3"},Ve=e("label",{for:"content",class:"form-label"},"說明內容",-1),Ie={class:"mb-3"},Ee={class:"form-check"},De=e("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Se={class:"modal-footer"},Te=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1),Re=["disabled"];function Ae(t,o,p,h,s,d){var _;const a=P("UploadImg");return n(),l("div",j,[e("div",O,[e("div",q,[e("div",G,[e("h5",J,[t.isNew?(n(),l("span",K,"新增產品")):(n(),l("span",Q,"編輯產品"))]),W]),e("div",X,[e("div",Y,[e("div",Z,[e("div",x,[e("div",ee,[te,c(e("input",{id:"imageUrl","onUpdate:modelValue":o[0]||(o[0]=i=>t.tempProduct.imageUrl=i),type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,512),[[m,t.tempProduct.imageUrl,void 0,{lazy:!0}]]),g(a,{onChangeImg:d.changeImage},{multi:M(()=>[oe]),_:1},8,["onChangeImg"])]),e("img",{class:"img-fluid",src:t.tempProduct.imageUrl},null,8,se)]),ne,(n(!0),l(u,null,B(t.tempProduct.imagesUrl,(i,r)=>(n(),l("div",{class:"mb-1",key:r},[e("div",le,[e("label",{for:"imagesUrl"+r,class:"form-label"},"圖片網址 (請輸入網址或上傳圖片)",8,ie),c(e("input",{id:"imagesUrl"+r,"onUpdate:modelValue":v=>t.tempProduct.imagesUrl[r]=v,type:"text",class:"form-control mb-2",placeholder:"請輸入圖片連結"},null,8,re),[[m,t.tempProduct.imagesUrl[r],void 0,{lazy:!0}]]),g(a,{index:r,onChangeImg:d.changeImage},{main:M(()=>[de]),_:2},1032,["index","onChangeImg"])]),e("img",{class:"img-fluid",src:i},null,8,ae)]))),128)),!((_=t.tempProduct.imagesUrl)!=null&&_.length)||t.tempProduct.imagesUrl[t.tempProduct.imagesUrl.length-1]?(n(),l("div",ce,[e("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:o[1]||(o[1]=i=>t.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(n(),l("div",me,[e("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:o[2]||(o[2]=i=>t.tempProduct.imagesUrl.pop())}," 取消新增 ")]))]),e("div",pe,[e("div",ue,[he,c(e("input",{id:"title",type:"text",class:"form-control",placeholder:"請輸入標題","onUpdate:modelValue":o[3]||(o[3]=i=>t.tempProduct.title=i)},null,512),[[m,t.tempProduct.title]])]),e("div",ge,[e("div",_e,[be,c(e("input",{id:"category",type:"text",class:"form-control",placeholder:"請輸入分類","onUpdate:modelValue":o[4]||(o[4]=i=>t.tempProduct.category=i)},null,512),[[m,t.tempProduct.category]])]),e("div",ye,[fe,c(e("input",{id:"unit",type:"text",class:"form-control",placeholder:"請輸入單位","onUpdate:modelValue":o[5]||(o[5]=i=>t.tempProduct.unit=i)},null,512),[[m,t.tempProduct.unit]])])]),e("div",Pe,[e("div",ve,[ke,c(e("input",{id:"origin_price",type:"number",min:"0",class:"form-control",placeholder:"請輸入原價","onUpdate:modelValue":o[6]||(o[6]=i=>t.tempProduct.origin_price=i)},null,512),[[m,t.tempProduct.origin_price,void 0,{number:!0}]])]),e("div",Ue,[we,c(e("input",{id:"price",type:"number",min:"0",class:"form-control",placeholder:"請輸入售價","onUpdate:modelValue":o[7]||(o[7]=i=>t.tempProduct.price=i)},null,512),[[m,t.tempProduct.price,void 0,{number:!0}]])])]),Ce,e("div",Me,[$e,c(e("textarea",{id:"description",type:"text",class:"form-control",placeholder:"請輸入產品描述","onUpdate:modelValue":o[8]||(o[8]=i=>t.tempProduct.description=i)},`
                `,512),[[m,t.tempProduct.description]])]),e("div",Be,[Ve,c(e("textarea",{id:"content",type:"text",class:"form-control",placeholder:"請輸入說明內容","onUpdate:modelValue":o[9]||(o[9]=i=>t.tempProduct.content=i)},`
                `,512),[[m,t.tempProduct.content]])]),e("div",Ie,[e("div",Ee,[c(e("input",{id:"is_enabled",class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":o[10]||(o[10]=i=>t.tempProduct.is_enabled=i)},null,512),[[E,t.tempProduct.is_enabled]]),De])])])])]),e("div",Se,[Te,e("button",{type:"button",class:"btn btn-primary",onClick:o[11]||(o[11]=D(i=>t.updateProduct(t.pagination.current_page),["prevent"])),disabled:!t.tempProduct.title||!t.tempProduct.category||!t.tempProduct.unit||!t.tempProduct.origin_price||!t.tempProduct.price}," 確認 ",8,Re)])])])],512)}const Fe=w(L,[["render",Ae]]),Ne={data(){return{ascending:!1,sortBy:""}},methods:{...$(V,["createProductModalRef","createDeleteModalRef","openModal"]),...$(U,["getProducts"])},computed:{...k(U,["products","pagination"]),sortProductsPrice(){return this.sortBy==="category"?[...this.products].sort((t,o)=>this.ascending?t.category.localeCompare(o.category,"zh-hant"):o.category.localeCompare(t.category,"zh-hant")):this.sortBy?[...this.products].sort((t,o)=>this.ascending?t[this.sortBy]-o[this.sortBy]:o[this.sortBy]-t[this.sortBy]):this.products}},mounted(){const t=this.$refs.productModal;this.createProductModalRef(t);const o=this.$refs.deleteModal;this.createDeleteModalRef(o,"產品"),this.getProducts()},components:{productModal:Fe,deleteModal:T,pagination:R}},ze={class:"text-end mt-4"},He={class:"table mt-4"},Le={key:0},je={key:1},Oe=e("th",null,"產品名稱",-1),qe={key:0},Ge={key:1},Je={key:0},Ke={key:1},Qe={key:0},We={key:1},Xe=e("th",{width:"120"},"編輯",-1),Ye={class:"text-end"},Ze={class:"text-end"},xe={key:0,class:"text-success"},et={key:1},tt={class:"btn-group"},ot=["onClick"],st=["onClick"];function nt(t,o,p,h,s,d){const a=P("pagination"),_=P("product-modal"),i=P("delete-modal");return n(),l(u,null,[e("div",ze,[e("button",{class:"btn btn-primary",onClick:o[0]||(o[0]=r=>t.openModal("new"))}," 建立新的產品 ")]),e("table",He,[e("thead",null,[e("tr",null,[e("th",{width:"120",style:{cursor:"pointer"},onClick:o[1]||(o[1]=r=>{s.sortBy="category",s.ascending=s.sortBy==="category"?!s.ascending:!0})},[b(" 分類 "),s.sortBy==="category"?(n(),l(u,{key:0},[s.ascending?(n(),l("span",Le,"▲")):(n(),l("span",je,"▼"))],64)):y("",!0)]),Oe,e("th",{width:"120",style:{cursor:"pointer"},onClick:o[2]||(o[2]=r=>{s.sortBy="origin_price",s.ascending=s.sortBy==="origin_price"?!s.ascending:!0})},[b(" 原價 "),s.sortBy==="origin_price"?(n(),l(u,{key:0},[s.ascending?(n(),l("span",qe,"▲")):(n(),l("span",Ge,"▼"))],64)):y("",!0)]),e("th",{width:"120",style:{cursor:"pointer"},onClick:o[3]||(o[3]=r=>{s.sortBy="price",s.ascending=s.sortBy==="price"?!s.ascending:!0})},[b(" 售價 "),s.sortBy==="price"?(n(),l(u,{key:0},[s.ascending?(n(),l("span",Je,"▲")):(n(),l("span",Ke,"▼"))],64)):y("",!0)]),e("th",{width:"100",style:{cursor:"pointer"},onClick:o[4]||(o[4]=r=>{s.sortBy="is_enabled",s.ascending=s.sortBy==="is_enabled"?!s.ascending:!0})},[b(" 是否啟用 "),s.sortBy==="is_enabled"?(n(),l(u,{key:0},[s.ascending?(n(),l("span",Qe,"▲")):(n(),l("span",We,"▼"))],64)):y("",!0)]),Xe])]),e("tbody",null,[(n(!0),l(u,null,B(d.sortProductsPrice,r=>(n(),l("tr",{key:r.id},[e("td",null,f(r.category),1),e("td",null,f(r.title),1),e("td",Ye,f(t.$filters.currency(r.origin_price)),1),e("td",Ze,f(t.$filters.currency(r.price)),1),e("td",null,[r.is_enabled?(n(),l("span",xe,"啟用")):(n(),l("span",et,"未啟用"))]),e("td",null,[e("div",tt,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:v=>t.openModal("edit",r)}," 編輯 ",8,ot),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:v=>t.openModal("delete",r)}," 刪除 ",8,st)])])]))),128))])]),g(a,{"page-obj":t.pagination,onEmitPage:t.getProducts},null,8,["page-obj","onEmitPage"]),g(_,{ref:"productModal"},null,512),g(i,{ref:"deleteModal"},null,512)],64)}const at=w(Ne,[["render",nt]]);export{at as default};