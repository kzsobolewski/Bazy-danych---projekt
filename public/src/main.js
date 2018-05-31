// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import fontawesome from '@fortawesome/fontawesome'
//import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'
import Polish from 'flatpickr/dist/l10n/pl.js'

fontawesome.library.add(solid);

Vue.config.productionTip = false

Vue.use(VueResource);

Vue.mixin({
  data: function() {
    return {
      get globalURL() {
        return "http://localhost:8000";
      },
      get language(){
        return Polish.pl;
      }
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
