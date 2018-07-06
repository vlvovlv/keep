/**
 * External dependencies
 */
import Vue from 'vue';
import 'normalize.css';
import '@vlvovlv/reset.css';

/**
 * Internal dependencies
 */
import App from './App';
import router from './router';
import './styles/common.less';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
