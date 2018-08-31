<template lang="html">
  <section id="Experience" class="animated fadeIn">
    <section id="ExperienceTitle">
      <SectionTitle sectionName="Experience" description="Great Places to Work."/>
    </section>
    <section id="ExperienceContent">
      <b-container fluid class="mt-3">
        <div class="card-deck d-flex justify-content-center">
          <WorkCard
            title="EPAM Systems Mexico"
            image="Logo-EPAM.jpg"
            alt_imgage="EPAM Logo"
            content="Working as Senior DevOps specialized in Cloud Architectures over the Amazon AWS platform,
                    creating integrations for the automatization following the principles of CI/CD, infrastructure
                    as code, the creation of containers and orchestration of application."
            subtitle="May 2018 - Pressent"/>
          <WorkCard
            title="Maniak"
            image="Logo-Maniak.jpg"
            alt_imgage="Maniak Logo"
            content="Automating processes to get better performances during the Development
                    of Software Projects, Designing and building Infrastructure as code
                    for the quick creation of environments with high availability and excellent security."
            subtitle="February 2018 - May 2018"/>
          <WorkCard
            title="ClickIT Smart Technologies"
            image="Logo-ClickIT.jpg"
            alt_imgage="ClickIT Logo"
            content="I design and built architectures for web applications. Using the latest technologies and
                    best practices for it. Creating workflows and automating the tasks to reach an agile development."
            subtitle="March 2016 - February 2018"/>
        </div>
      </b-container>
    </section>
    <Footer/>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import WorkCard from '@/components/WorkCard.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Experience',
  components: {
    SectionTitle,
    WorkCard,
    Footer
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
</style>
