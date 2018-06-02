<template>
<div class="wrapper">
  <div class="columns">
    <Sidebar @change-tab="changeTab" />
    <main class="column">
      <router-view></router-view>
    </main>
  </div>
</div>
</template>

<script>

// Layout
import Sidebar from './components/Sidebar.vue'


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
    Sidebar,
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

@import './css/admin.css';
</style>
