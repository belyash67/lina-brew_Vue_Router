import { createRouter, createWebHistory } from 'vue-router'
import { categoryIds } from '../data/menu.js'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: { title: 'Главная' },
    },
    {
      path: '/concept',
      name: 'concept',
      component: () => import('../views/ConceptView.vue'),
      meta: { title: 'Концепция' },
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/MenuLayout.vue'),
      meta: { title: 'Меню' },
      children: [
        {
          path: '',
          redirect: { name: 'menu-category', params: { category: 'espresso' } },
        },
        {
          path: ':category',
          name: 'menu-category',
          component: () => import('../views/MenuCategoryView.vue'),
          props: true,
          meta: { title: 'Меню' },
          beforeEnter: (to) => {
            if (!categoryIds.includes(to.params.category)) {
              return { name: 'not-found' }
            }
          },
        },
        {
          path: ':category/:slug',
          name: 'drink-detail',
          component: () => import('../views/DrinkDetailView.vue'),
          props: true,
          meta: { title: 'Напиток' },
          beforeEnter: (to) => {
            if (!categoryIds.includes(to.params.category)) {
              return { name: 'not-found' }
            }
          },
        },
      ],
    },
    {
      path: '/how',
      name: 'how',
      component: () => import('../views/HowView.vue'),
      meta: { title: 'Процесс' },
    },
    {
      path: '/origins',
      name: 'origins',
      component: () => import('../views/OriginsView.vue'),
      meta: { title: 'Происхождение' },
    },
    {
      path: '/subscription',
      name: 'subscription',
      component: () => import('../views/SubscriptionView.vue'),
      meta: { title: 'Подписка' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue'),
      meta: { title: 'Страница не найдена' },
    },
  ],
})

router.afterEach((to) => {
  const title = to.matched.map((r) => r.meta.title).filter(Boolean).pop()
  document.title = title ? `${title} · LUNA BREW` : 'LUNA BREW'
})

export default router
