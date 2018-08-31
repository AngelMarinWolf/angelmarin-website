<template lang="html">
  <section id="Projects" class="animated fadeIn">
    <section id="ProjectsTitle">
      <SectionTitle sectionName="Projects" description="Something that I did."/>
    </section>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  name: 'Projects',
  components: {
    SectionTitle
  }
}
</script>

<style lang="css">
#Projects {
  background-image: url("../assets/backgrounds/circuit-board.svg");
  background-color: #2096D6;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;

  height: inherit;
}
</style>
