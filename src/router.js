import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home'
import Product from './components/product/product'
import Doctor from  './components/doctor/doctor'
import ProductDetails from './components/product-details/product-details'
import DoctorDetails from './components/doctor-details/doctor-details'
import Contact from './components/contact/contact'
import ProductOrder from './components/product-order/product-order'

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
        },
        {
          path:':id',
          component:DoctorDetails
        }
      ]
    },
    {
      path: '/doctor',
      component: Doctor,
      children: [
        {
          path: ':id',
          component: DoctorDetails
        }
      ]
    },
    {
      path:'/product-details',
      component: ProductDetails
    },
    {
      path:'/doctor-details',
      component:DoctorDetails
    },
    {
      path:'/contact',
      component: Contact
    },
    {
      path:'/product-order',
      component: ProductOrder
    }
  ]
})
