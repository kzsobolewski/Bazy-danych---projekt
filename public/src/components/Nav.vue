<template lang="html">

    <header class="hero is-light">
      <div class="hero-head">
        <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <a class="navbar-item is--brand" href="/">
              <img class="navbar-brand-logo" src="../assets/logo.svg" alt="Logo">
            </a>
            <a class="navbar-item is-tab is-hidden-mobile" href="/">Home</a>
            <a class="navbar-item is-tab is-hidden-mobile is-active" href="/admin">Admin</a>
            <a class="navbar-item is-tab is-hidden-mobile" href="/worker">Pracownik</a>

            <button class="button navbar-burger" data-target="navMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
          </div>

          <div class="navbar-menu navbar-end" id="navMenu">
            <a class="navbar-item is-tab is-hidden-tablet" href="/">Home</a>
            <a class="navbar-item is-tab is-hidden-tablet is-active" href="/admin">Admin</a>
            <a class="navbar-item is-tab is-hidden-tablet" href="/worker">Pracownik</a>
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
