<template lang="html">
  <section id="Contact" class="animated fadeIn">
    <section id="ContactTitle">
      <SectionTitle sectionName="Contact" description="How can you find me?"/>
    </section>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  name: 'Contact',
  components: {
    SectionTitle
  }
}
</script>

<style lang="css">
#Contact {
  background-image: url("../assets/backgrounds/floating-cogs.svg");
  background-color: #2096D6;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;

  height: inherit;
}
</style>
