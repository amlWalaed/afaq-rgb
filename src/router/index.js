import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import AllProducts from '../views/AllProducts.vue'
import MoreCategoriesView from '../views/MoreCategoriesView.vue'
import NotFoundView from '../views/NotFoundView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/products/:id',
    name: 'product',
    component: ProductView
  },
  {
    path:'/more',
    name:'moreCategories',
    component: MoreCategoriesView
  },
  {
    path: '/products/category/',
    name: 'products-category',
    component:AllProducts
  },
  {
    path:'/:pathMatch(.*)*',
    name:'notFound',
    component:NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
