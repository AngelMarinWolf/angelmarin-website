<template lang="html">
  <section id="Navbar">
    <b-navbar id="nav" variant="dark" type="dark" toggleable="lg" class="fixed-top">
      <b-navbar-brand to="/" class="p-0 m-0">
        <img src="../assets/logos/wolf-logo-op-small.png" alt="Wolf Logo" height="38px" class="mr-3">
        <strong>Angel Marin</strong>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/" class="pr-3 pl-3 pt-2 pb-1 text-center">
                      {{ isEnglish ? 'Home' : 'Inicio' }}
          </b-nav-item>
          <b-nav-item v-for="label in sections.labels" :key="label.id"
                      :to="'/' + Object.keys(label)[0]" class="pr-3 pl-3 pt-2 pb-1 text-center">
                      {{ label[Object.keys(label)[0]][language] }}
          </b-nav-item>
          <b-button @click="switchLanguage" :pressed="!isEnglish" variant="outline-light">{{ language }}</b-button>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>

<script>
import { db } from '../firebase'

export default {
  name: 'Navbar',
  firestore () {
    return {
      sections: db.collection('SectionContent').doc('Navbar')
    }
  },
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
  background-color: #17181A !important;
}

#nav a.nav-link {
  padding: 0;
}
</style>
