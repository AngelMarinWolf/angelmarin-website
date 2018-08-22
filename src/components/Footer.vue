<template lang="html">
  <section id="Footer">
    <footer class="footer" v-bind:class="{'fixed-bottom': fixed}">
      <b-container>
        <p align="center" class="mb-0">
          Angel Marin | <strong>System Administrator</strong>
        </p>
      </b-container>
    </footer>
  </section>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    fixed: Boolean
  }
}
</script>

<style lang="css">
.footer {
  color: white;
  background-color: #17181A !important;
}
</style>
