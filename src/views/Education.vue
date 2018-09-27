<template lang="html">
  <section id="Education" class="animated fadeIn">
    <section id="EducationTitle">
      <SectionTitle sectionName="Education" description="Back to school."/>
    </section>
    <section id="EducationContent">
      <b-container class="mt-3 mb-md-3">
        <CollegeCard
          title="ITS"
          image="ITS_wallpaper.jpg"
          alt_image=""
          description=""
          dates=""
          site_url=""
          certificate_image_name=""/>
      </b-container>
      <div class="container-fluid jumbotron d-flex justify-content-center shadow-sm mb-md-3 about">
        <h5 class="m-0">Courses and Certifications</h5>
      </div>
      <b-container fluid class="mt-3 mb-md-3">
        <div class="card-deck d-flex justify-content-center">

        </div>
      </b-container>
    </section>
    <Footer :fixed="true"/>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import CollegeCard from '@/components/CollegeCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Education',
  components: {
    SectionTitle,
    CollegeCard,
    Footer
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
