import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home'
import Product from './components/product/product'
import ProductDetails from './components/product-details/product-details'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/product',
      component: Product,
      children:[
        {
          path:':id',
          component:ProductDetails
        }
      ]
    },
    {
      path:'/product-details',
      component:ProductDetails
    }
  ]
})
