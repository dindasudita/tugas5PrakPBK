import { createMemoryHistory, createRouter } from 'vue-router'

import ListBag from './ListBag.vue'
import About from './About.vue'

const routes = [
  { path: '/', component: ListBag },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})