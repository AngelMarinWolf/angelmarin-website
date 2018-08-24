<template lang="html">
  <section id="About" class="animated fadeIn">
    <section id="AboutTitle">
      <SectionTitle sectionName="About me" description="Let me introduce myself"/>
    </section>
    <b-container class="p-md-0 pl-3 pr-3 mt-3">
      <b-container id="ProfileCard" class="blurCard mb-3">
        <ProfileCard/>
      </b-container>
      <b-container>
        <b-row>
          <b-col sm="6" id="InformationCard" class="p-0 pr-md-2 mb-3">
            <b-container class="blurCard p-3">
              <InformationCard/>
            </b-container>
          </b-col>
          <b-col sm="6" id="SkillsCard" class="p-0 pl-md-2 mb-3">
            <b-container class="blurCard p-3">
              <SkillsCard/>
            </b-container>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <Footer/>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import ProfileCard from '@/components/ProfileCard.vue'
import InformationCard from '@/components/InformationCard.vue'
import SkillsCard from '@/components/SkillsCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'About',
  components: {
    SectionTitle,
    ProfileCard,
    InformationCard,
    SkillsCard,
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
}
.blurCard {
  background-image: url('../assets/backgrounds/debian-blue-blur.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  height: 100%;

  border-radius: 10px;
  border-color: grey;

  -webkit-box-shadow: 5px 5px 20px 0px rgba(23,24,26,0.5);
  -moz-box-shadow: 5px 5px 20px 0px rgba(23,24,26,0.5);
  box-shadow: 5px 5px 20px 0px rgba(23,24,26,0.5);
}
.description-text {
  font-size: 1.30em;
}
</style>
