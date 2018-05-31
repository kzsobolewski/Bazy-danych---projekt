<template>
<div id="app">
  <Nav/>
  <div class="wrapper">
    <div class="columns">
      <Sidebar @change-tab="changeTab" />
      <main class="column">
        <component :is="currentTab" @edit-user="editUser" :id="currentUser"></component>
      </main>
    </div>
  </div>
</div>
</template>

<script>
// Layout
import Nav from './components/Nav'
import Sidebar from './components/Sidebar.vue'

// Tabs
import stats from './components/Stats.vue'
import workers_add from './components/AddUser.vue'
import edit from './components/EditUser.vue'
import workers from './components/Workers.vue'
import payments from './components/Payments.vue'

export default {
  name: 'App',
  data() {
    return {
      currentTab: 'stats',
      currentUser: null,
      previousTab: null
    }
  },
  components: {
    Nav,
    Sidebar,
    stats,
    workers_add,
    edit,
    payments,
    workers
  },
  methods: {
    changeTab(tab) {
      this.previousTab = this.currentTab;
      this.currentTab = tab;
      this.currentUser = null;
    },
    goBack() {
      if (this.previousTab)
        this.currentTab = this.previousTab;
    },
    editUser(id) {
      this.previousTab = this.currentTab;
      this.currentTab = 'edit';
      this.currentUser = id;
    }
  }
}
</script>

<style>
@import './css/bulma.min.css';
@import './css/main.css';
@import './css/admin.css';
</style>
