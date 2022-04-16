import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
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
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue'),
  },
  {
    path: '/page',
    name: 'Page',
    component: () => import('../views/PageView.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/SettingsView.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const _isUserLoggedIn = true;

function isUserLoggedIn(to, from, next) {
  if (!_isUserLoggedIn && to.path !== '/login') return next({ path: '/login' });
  else return next();
}

router.beforeEach((to, from, next) => {
  // Verify if the is logged in
  isUserLoggedIn(to, from, next);
});

export default router;
