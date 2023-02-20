import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

// vue-loading
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";

// CKeditor
import CKEditor from "@ckeditor/ckeditor5-vue";

// fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faSpinner);

// sweetAlert2
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
const swalOptions = {};

// vee-validate
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";
// vee-validate 規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
defineRule("phone", (value) => {
  const phoneNumber = /^(09)[0-9]{8}$/;
  if (phoneNumber.test(value)) {
    return true;
  } else {
    return "電話須為手機號碼格式";
  }
});
// vee-validate 語系
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  // validateOnInput: true, // 當輸入任何內容直接進行驗證
});
setLocale("zh_TW"); // 設定預設語系

// Global functions
import { date, currency } from "./methods/filters";

const app = createApp(App);
// 全域方法 globalProperties
// https://cn.vuejs.org/api/application.html#app-config-globalproperties
app.config.globalProperties.$filters = {
  date,
  currency,
};

app.use(createPinia())
app.use(router)
app.use(VueAxios, axios)
app.use(CKEditor)
app.use(VueSweetalert2, swalOptions)

app.component("VueLoading", Loading)
app.component("FontAwesomeIcon", FontAwesomeIcon)
app.component("VForm", Form)
app.component("VField", Field)
app.component("ErrorMessage", ErrorMessage)
app.mount("#app");
