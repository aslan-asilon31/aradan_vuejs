import { createRouter, createWebHistory } from 'vue-router'
import FrontendLayout from '@/components/frontend/FrontendLayout.vue'

import PostsView from '../views/PostsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontendLayout,
      children: [
        {
          path: '/',
          component: () => import('../views/visitors/LandingPage.vue')
        },
        {
          path: '/login',
          name: 'login',
          component: () => import('../views/auth/Login.vue')
        },
        {
          path: '/men',
          name: 'men',
          component: () => import('../views/visitors/mens/Men.vue')
        },
        {
          path: '/women',
          name: 'women',
          component: () => import('../views/visitors/womens/Women.vue')
        },
        {
          path: '/kid',
          name: 'kid',
          component: () => import('../views/visitors/kids/Kid.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ],
    },
    {
      path: '/posts',
      name: 'posts',
      component: PostsView
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('../views/products/Product.vue')
    },

  ]
})

export default router
