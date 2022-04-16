import store from '@/store';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Verify if the is logged in
function isUserLoggedIn(to, from, next) {
  if (store.state.isUserLoggedIn === false && to.path !== '/login')
    return next({ path: '/login' });
  else return next();
}

const routes = [
  // Redirect "/" to "/dashboard"
  {
    path: '/',
    redirect: '/dashboard',
  },
  // Public routes
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/LoginView.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/RegisterView.vue'),
  },
  // Protected routes
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
    beforeEnter: (to, from, next) => {
      isUserLoggedIn(to, from, next);
    },
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
    beforeEnter: (to, from, next) => {
      isUserLoggedIn(to, from, next);
    },
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('../views/PageView.vue'),
    beforeEnter: (to, from, next) => {
      isUserLoggedIn(to, from, next);
    },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/SettingsView.vue'),
    beforeEnter: (to, from, next) => {
      isUserLoggedIn(to, from, next);
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
