/**
 * External dependencies
 */
import Vue from 'vue';
import Router from 'vue-router';

/**
 * Internal dependencies
 */
import Container from '@/pages/Container';
import menus from './menus';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'container',
      component: Container,
      children: [
        ...menus,
      ],
    },
  ],
});
