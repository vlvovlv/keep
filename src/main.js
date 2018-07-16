/**
 * External dependencies
 */
import Vue from 'vue';
import 'normalize.css';
import '@vlvovlv/reset.css';
import DemoShow from 'markdown-it-vue-demo-block/lib/dist/demo-show';

/**
 * Internal dependencies
 */
import App from './App';
import router from './router';
import './styles/common.less';

Vue.config.productionTip = false;

Vue.component(DemoShow.name, DemoShow);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
