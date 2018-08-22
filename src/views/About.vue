<template lang="html">
  <section id="About" class="animated fadeIn">
    <AboutTitle/>
    <b-container>
      <ProfileCard/>
    </b-container>
    <Footer/>
  </section>
</template>

<script>
import AboutTitle from '@/components/AboutTitle.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    AboutTitle,
    ProfileCard,
    Footer
  }
}
</script>

<style lang="css">
#About {
  background-image: url("../assets/backgrounds/debian-blue.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  /* height: inherit; */
}
</style>
