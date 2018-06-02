<template lang="html">

    <header class="hero is-light">
      <div class="hero-head">
        <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link class="navbar-item is--brand" to="/" exact-active-class="" active-class="" exact>
              <img class="navbar-brand-logo" src="../assets/logo.svg" alt="Logo">
            </router-link>
            <router-link class="navbar-item is-tab is-hidden-mobile" to="/" exact>Home</router-link>
            <router-link class="navbar-item is-tab is-hidden-mobile" to="/admin">Admin</router-link>
            <router-link class="navbar-item is-tab is-hidden-mobile" to="/worker">Pracownik</router-link>

            <button class="button navbar-burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
          </div>

          <div class="navbar-menu navbar-end" id="navMenu">
            <router-link class="navbar-item is-tab is-hidden-tablet" to="/">Home</router-link>
            <router-link class="navbar-item is-tab is-hidden-tablet" to="/admin">Admin</router-link>
            <router-link class="navbar-item is-tab is-hidden-tablet" to="/worker">Pracownik</router-link>
          </div>
        </nav>
      </div>
    </header>

</template>

<script>
export default {
  name: 'Nav'
}
</script>

<style lang="css">
</style>
