import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import StartView from '../views/StartView.vue'
import StorageView from '../views/StorageView.vue'
import { getAuth } from "firebase/auth";

const routes = [
  {
    path: '/jsonplaceholder',
    name: 'about',
    component: AboutView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/',
    name: 'startPage',
    component: StartView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/storage',
    name: 'storage',
    component: StorageView,
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/register',
    component: () => import ("../views/Register.vue")
  },
  {
    path: '/sign-in',
    component: () => import ("../views/SignIn.vue")
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some((record) => record.meta.requiresAuth)) {
    if(getAuth().currentUser) {
      next();
    }
    else {
      alert("You don't have access until you verify authentification or register new account!");
    }
  }
  else {
    next()
  }
})

export default router