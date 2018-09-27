<template lang="html">
  <section id="Blog" class="animated fadeIn">
    <section id="BlogTitle">
      <SectionTitle sectionName="Blog" description="Welcome to my blog :)"/>
    </section>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  name: 'Blog',
  components: {
    SectionTitle
  }
}
</script>

<style lang="css">
#Blog {
  background-image: url("../assets/backgrounds/floating-cogs.svg");
  background-color: #2096D6;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;

  height: inherit;
}
</style>
