<template lang="html">
  <div class="container-fluid jumbotron about mt-3 mt-md-0 mb-0 animated slideInDown">
    <h3>{{ sectionName }}</h3>
    <h2>{{ description }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
  props: {
    sectionName: String,
    description: String
  }
}
</script>

<style lang="css">
.about {
  background-color: #17181A;
  color: white;
  border-radius: 0;
}
</style>
