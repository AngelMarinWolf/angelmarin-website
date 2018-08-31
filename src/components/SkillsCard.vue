<template lang="html">
  <b-container class="p-0" v-observe-visibility="elementIsFocused">
    <h4><strong>{{ isEnglish ? 'MAIN SKILLS':'HABILIDADES PRINCIPALES'}}</strong></h4>
    <hr>
    <ul class="list-unstyled">
      <li class="mb-3">
        <label for="#linuxSkill"><strong>Linux Servers:</strong></label>
        <b-progress id="liuxSkill" :value="isVisible ? 75 : 0" variant="secondary"
        :striped="true" :animated="false" :show-progress="isVisible"></b-progress>
      </li>
      <li class="mb-3">
        <label for="#AmazonSkill"><strong>Amazon Web Services:</strong></label>
        <b-progress id="AmazonSkill" :value="isVisible ? 85 : 0" variant="secondary"
        :striped="true" :animated="false" :show-progress="isVisible"></b-progress>
      </li>
      <li class="mb-3">
        <label for="#webServersSkill"><strong>Web Services and Applications:</strong></label>
        <b-progress id="webServersSkill" :value="isVisible ? 70 : 0" variant="secondary"
        :striped="true" :animated="false" :show-progress="isVisible"></b-progress>
      </li>
      <li class="mb-3">
        <label for="#dockerSkill"><strong>Contatainariztion and Orchestration:</strong></label>
        <b-progress id="dockerSkill" :value="isVisible ? 80 : 0" variant="secondary"
        :striped="true" :animated="false" :show-progress="isVisible"></b-progress>
      </li>
      <li class="mb-3">
        <label for="#cicdSkill"><strong>Continuos Integration/Continuos Delivery:</strong></label>
        <b-progress id="cicdSkill" :value="isVisible ? 65 : 0" variant="secondary"
        :striped="true" :animated="false" :show-progress="isVisible"></b-progress>
      </li>
      <li class="mb-3">
        <label for="#scriptSkill"><strong>Scripting:</strong></label>
        <b-progress id="scriptSkill" :value="isVisible ? 90 : 0" variant="secondary"
        :striped="true" :animated="false" :show-progress="isVisible"></b-progress>
      </li>
      <li class="mb-3">
        <label for="#programingSkill"><strong>Programing:</strong></label>
        <b-progress id="programingSkill" :value="isVisible ? 55 : 0" variant="secondary"
        :striped="true" :animated="false" :show-progress="isVisible"></b-progress>
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  name: 'SkillsCard',
  data () {
    return {
      isVisible: false
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
    elementIsFocused (isVisible, entry) {
      setTimeout(() => {
        this.isVisible = isVisible
      }, 1000)
    }
  }
}
</script>

<style lang="css">
</style>
