import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  // {
  //   path: '/admin',
  //   component: admin
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/main',
    name: 'Main',
    component: Main,
    children : [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/myVote',
        name: 'MyVote',
        component: () => import('../views/MyVote.vue')
      },
      {
        path: '/voteHistory',
        name: 'VoteHistory',
        component: () => import('../views/VoteHistory.vue')
      },
      {
        path: '/personal',
        name: 'Personal',
        component: () => import('@/views/Personal.vue')
      },
      {
        path: '/voteList',
        name: 'VoteList',
        component: () => import(/* webpackChunkName: "Vote" */ '../views/VoteList.vue')
      },
    ]
  },
  // {
  //   path: '/main',
  //   redirect: '/home'
  // },
  // {
  //   path: '/',
  //   redirect: { name: 'Home' }
  // },
  // {
  //   path: '/home',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/myVote',
  //   name: 'MyVote',
  //   component: () => import('../views/MyVote.vue')
  // },
  // {
  //   path: '/voteHistory',
  //   name: 'VoteHistory',
  //   component: () => import('../views/VoteHistory.vue')
  // },
  // {
  //   path: '/personal',
  //   name: 'Personal',
  //   component: () => import('@/views/Personal.vue')
  // },
  // {
  //   path: '/voteList',
  //   name: 'VoteList',
  //   component: () => import(/* webpackChunkName: "Vote" */ '../views/VoteList.vue')
  // },
  // {
  //   path: '/auth',
  //   name: 'Auth',
  //   component: () => import('../views/Auth.vue')
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('../views/Login-o.vue')
  // },
  // {
  //   path: '/signup',
  //   name: 'Signup',
  //   component: () => import('../views/Signup.vue')
  // },
  // {
  //   path: '/dashboard',
  //   name: 'Dashboard',
  //   component: () => import('@/views/Dashboard.vue')
  // },
  // {
  //   path: '/vote',
  //   name: 'Vote',
  //   component: () => import(/* webpackChunkName: "Vote" */ '../views/Vote.vue')
  // },
  // {
  //   path: '/voting',
  //   name: 'Voting',
  //   component: () =>
  //     import(/* webpackChunkName: "Voting" */ '../views/Voting.vue')
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
];

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });

const router = new VueRouter({
  mode:'history',
  base:__dirname,
  routes
});

/* 挂载路由导航守卫，防止访问没有权限的页面 */
router.beforeEach((to, from, next) => {
  if(to.path === '/login' || to.path === '/register'){
    next();
    return;
  }
  const token = window.sessionStorage.getItem('token');
  // 如果token不存在，则重定向到登录页面
  if(!token) next('/login');
  next()
});

export default router
