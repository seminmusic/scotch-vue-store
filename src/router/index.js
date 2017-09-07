import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/Home';
import Cart from '@/pages/Cart';

// Admin Components:
import Index from '@/pages/admin/Index';
import Products from '@/pages/admin/Products';
import New from '@/pages/admin/New';
import Edit from '@/pages/admin/Edit';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/admin',
      component: Index,
      children: [
        {
          path: '',
          name: 'Products',
          component: Products,
        },
        {
          path: 'new',
          name: 'New',
          component: New,
        },
        {
          path: 'edit/:id',
          name: 'Edit',
          component: Edit,
        },
      ],
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart,
    },
  ],
});
