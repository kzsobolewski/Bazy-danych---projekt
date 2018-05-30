<template lang="html">
  <aside class="column is-2 aside">
    <nav class="menu">
      <p class="menu-label">
        Główne
      </p>
      <ul class="menu-list">
        <li><a href="#" @click="changeTab('stats')"><span class="icon is-small"><i class="fa fa-tachometer"></i></span>Statystyki</a></li>
        <li><a href="#" @click="changeTab('payments')"><span class="icon is-small"><i class="fa fa-tachometer"></i></span>Wypłaty</a></li>
      </ul>
      <p class="menu-label">
        Pracownicy
      </p>
      <ul class="menu-list">
        <li><a href="#" @click="changeTab('workers')"><span class="icon is-small"><i class="fa fa-pencil-square-o"></i></span> Lista</a></li>
        <li><a href="#" @click="changeTab('add')"><span class="icon is-small"><i class="fa fa-desktop"></i></span> Dodaj</a></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
  methods: {
    changeTab(tab) {
      this.$emit('change-tab', tab);
    }
  }
}
</script>

<style lang="css">
</style>
