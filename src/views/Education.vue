<template lang="html">
  <section id="Education" class="animated fadeIn">
    <section id="EducationTitle">
      <SectionTitle sectionName="Education" description="Back to school."/>
    </section>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'

export default {
  name: 'Education',
  components: {
    SectionTitle
  }
}
</script>

<style lang="css">
#Education {
  background-image: url("../assets/backgrounds/floating-cogs.svg");
  background-color: #2096D6;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;

  height: inherit;
}
</style>
