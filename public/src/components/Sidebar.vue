<template lang="html">
  <aside class="column is-2 aside">
    <nav class="menu">
      <p class="menu-label">
        Główne
      </p>
      <ul class="menu-list">
        <li><a href="#" @click="changeTab('stats')"><span class="icon"><fai icon="chart-bar"/></span> Statystyki</a></li>
        <li><a href="#" @click="changeTab('payments')"><span class="icon"><fai icon="money-bill-wave"/></span> Wypłaty</a></li>
      </ul>
      <p class="menu-label">
        Pracownicy
      </p>
      <ul class="menu-list">
        <li><a href="#" @click="changeTab('workers')"><span class="icon"><fai icon="users"/></span> Lista</a></li>
        <li><a href="#" @click="changeTab('add')"><span class="icon"><fai icon="user-plus"/></span> Dodaj</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Sidebar',
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab);
    }
  },
  components: {
    fai:FontAwesomeIcon
  }
}
</script>

<style lang="css">
</style>
