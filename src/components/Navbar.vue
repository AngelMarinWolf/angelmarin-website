<template lang="html">
  <section id="Navbar">
    <b-navbar id="nav" variant="dark" type="dark" toggleable="lg" class="sticky-top">
      <b-navbar-brand to="/" class="p-0 m-0">
        <img src="../assets/wolf-logo.png" alt="Wolf Logo" height="38px" class="mr-3">
        <strong>Angel Marin</strong>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about"       class="pr-3 pl-3 pt-2 pb-1 text-center">{{ isEnglish ? 'About':'Acerca de'}}</b-nav-item>
          <b-nav-item to="/experience"  class="pr-3 pl-3 pt-2 pb-1 text-center">{{ isEnglish ? 'Experience':'Experiencia'}}</b-nav-item>
          <b-nav-item to="/about"       class="pr-3 pl-3 pt-2 pb-1 text-center">{{ isEnglish ? 'Education':'Educación'}}</b-nav-item>
          <b-nav-item to="/about"       class="pr-3 pl-3 pt-2 pb-1 text-center">{{ isEnglish ? 'Projects':'Proyectos'}}</b-nav-item>
          <b-nav-item to="/about"       class="pr-3 pl-3 pt-2 pb-1 text-center">Blog</b-nav-item>
          <b-nav-item to="/about"       class="pr-3 pl-3 pt-2 pb-1 text-center">{{ isEnglish ? 'Contact':'Contacto'}}</b-nav-item>
          <b-button @click="switchLanguage" :pressed="!isEnglish" variant="outline-light">{{ language }}</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    language () {
      return this.$store.state.language
    },
    isEnglish () {
      return this.$store.getters.isEnglish
    }
  },
  methods: {
    switchLanguage () {
      this.$store.commit('switchLanguage')
    }
  }
}
</script>

<style lang="css">
#nav {
  background-color: #212224 !important;
}

#nav a.nav-link {
  padding: 0;
}
</style>
