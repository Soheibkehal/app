import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Raphael from 'raphael/raphael'
global.Raphael = Raphael
global.jQuery = require('jquery');
import Vuex from "vuex"


Vue.use(BootstrapVue)
Vue.use(VueRouter)

//Vue.use(require("moment"));


Vue.config.productionTip = false

Vue.use(Vuex);

const store = new Vuex.Store(
  {
    state: {
      authenticated: false
    },
    mutations: {
      setAuthentication(state, status) {
        state.authenticated = status;
      }
    }

  }
)

const router = new VueRouter({
  routes:[
    {
      path: "/dashboard",
      name: "Dashboard",
      component: () => import("@/components/Workingtime/Dashboard.vue"),
      beforeEnter: (to, from, next) => {
        if (store.state.authenticated == false) {
          next("/login");
        }
        else {
          next();
        }
      }
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/components/Account/Logger.vue"),
    },
    {
      path: "/signin",
      name: "SignIn",
      component: () => import("@/components/Account/SignIn.vue"),
    },
    {
      path: '/private',
      name: 'private',
      component: () => import('@/components/private.vue'),

    },
    {
      path: '/myaccount',
      name: 'MyAccount',
      component: () => import("@/components/Account/MyAccount.vue")
    },
    {
      path: "/skills",
      name: "SkillManager",
      component: () => import("@/components/Account/SkillsManager.vue")
    }
  ],

  mode: "history",
  base: process.env.BASE_URL,
});


new Vue({
  template:'',
  store:store,
  router,
  render: h => h(App)
}).$mount('#app')

