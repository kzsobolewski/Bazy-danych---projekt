<template>
<div id="app">
  <Nav/>
  <div class="wrapper">
    <div class="columns">
      <Sidebar @change-tab="changeTab" />
      <main class="column">
        <component :is="currentTab"></component>
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
import add from './components/AddUser.vue'
import workers from './components/Workers.vue'
import payments from './components/Payments.vue'

export default {
  name: 'App',
  data() {
    return {
      currentTab: 'stats',
      previousTab: null
    }
  },
  components: {
    Nav,
    Sidebar,
    stats,
    add,
    payments,
    workers
  },
  methods: {
    changeTab(tab) {
      this.previousTab = this.currentTab;
      this.currentTab = tab;
    },
    goBack() {
      if (this.previousTab)
        this.currentTab = this.previousTab;
    }
  }
}
</script>

<style>
@import './css/bulma.min.css';
@import './css/main.css';
@import './css/admin.css';
</style>
