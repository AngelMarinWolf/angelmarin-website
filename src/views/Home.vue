<template>
  <section id="Home">
    <Headline></Headline>
    <About></About>
  </section>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import About from '@/components/About.vue'

export default {
  name: 'Home',
  components: {
    Headline,
    About
  }
}
</script>
