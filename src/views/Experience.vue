<template lang="html">
  <section id="Experience" class="animated fadeIn">
    <section id="ExperienceTitle">
      <SectionTitle sectionName="Experience" description="Great Places to Work."/>
    </section>
    <section id="ExperienceContent">
      <b-container class="mt-3">
        <div class="card-deck">
          <WorkCard
            title="EPAM Systems Mexico"
            image="Logo-EPAM-2.png"
            alt_imgage="EPAM Logo"
            content=""
            subtitle="May 2018 - Pressent"/>
          <WorkCard
            title="Maniak"
            image="Logo-Maniak.png"
            alt_imgage="Maniak Logo"
            content=""
            subtitle="February 2018 - May 2018"/>
          <WorkCard
            title="ClickIT Smart Technologies"
            image="Logo-ClickIT.jpg"
            alt_imgage="ClickIT Logo"
            content=""
            subtitle="February 2018 - May 2018"/>
        </div>
      </b-container>
    </section>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import WorkCard from '@/components/WorkCard.vue'

export default {
  name: 'Experience',
  components: {
    SectionTitle,
    WorkCard
  }
}
</script>

<style lang="css">
#Experience {
  background-image: url("../assets/backgrounds/circuit-board.svg");
  background-color: #2096D6;
  background-repeat: repeat;
  background-attachment: fixed;
  background-position: center;
}
.blurCard {
  background-color: rgb(240,240,240,0.9);

  border-radius: 10px;
  border-color: grey;

  -webkit-box-shadow: 5px 5px 20px 0px rgba(23,24,26,0.5);
  -moz-box-shadow: 5px 5px 20px 0px rgba(23,24,26,0.5);
  box-shadow: 5px 5px 20px 0px rgba(23,24,26,0.5);
}
</style>
