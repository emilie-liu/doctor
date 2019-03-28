import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/home/home'
import Product from './components/product/product'
import Doctor from './components/doctor/doctor'
import ProductDetails from './components/product-details/product-details'
import DoctorDetails from './components/doctor-details/doctor-details'
import Contact from './components/contact/contact'
import ProductOrder from './components/product-order/product-order'
import ProductPay from './components/product-pay/product-pay'
import DoctorOrder from './components/doctor-order/doctor-order'
import DoctorPay from './components/doctor-pay/doctor-pay'

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
      children: [
        {
          path: ':id',
          component: ProductDetails
        },
        {
          path: ':id',
          component: DoctorDetails
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
      path: '/product-details/:id',
      component: ProductDetails
    },
    {
      path: '/doctor-details/:id',
      component: DoctorDetails
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/product-order/:id',
      component: ProductOrder
    },
    {
      path: '/product-pay/:id',
      component: ProductPay
    },
    {
      path: '/doctor-order/:id',
      component: DoctorOrder
    },
    {
      path: '/doctor-pay/:id',
      component: DoctorPay
    }
  ]
})
