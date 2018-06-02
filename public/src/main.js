// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import fontawesome from '@fortawesome/fontawesome'
import solid from '@fortawesome/fontawesome-free-solid'
// flatpickr language
import Polish from 'flatpickr/dist/l10n/pl.js'

// App layout
import App from './App.vue'

// Main Routes
import Home from './Home.vue'
import Admin from './Admin.vue'
import Worker from './Worker.vue'

// Sub routes
// ----- ADMIN
import stats from './components/Stats.vue'
import workers_add from './components/AddUser.vue'
import edit from './components/EditUser.vue'
import workers from './components/Workers.vue'
import depts from './components/Departments.vue'
import depts_add from './components/AddDept.vue'
import jobs from './components/Jobs.vue'
import jobs_add from './components/AddJob.vue'
import payments from './components/Payments.vue'

fontawesome.library.add(solid);

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/admin',
  component: Admin,
  children: [
    {path:'',component:stats},
    {path:'jobs',component:jobs},
    {path:'workers',component:workers},
    {path:'depts',component:depts},
    {path:'jobs/add',component:jobs_add},
    {path:'depts/add',component: depts_add},
    {path:'workers/add',component: workers_add},
    {path:'payments',component:payments}
  ]
} ,{
  path: '/worker',
  component: Worker,
  children: [{path:'test', component: Home}]
}];

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: "is-active",
  linkExactActiveClass: "is-active"
});

Vue.mixin({
  data: function() {
    return {
      get globalURL() {
        return "http://localhost:8000";
      },
      get language() {
        return Polish.pl;
      }
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
