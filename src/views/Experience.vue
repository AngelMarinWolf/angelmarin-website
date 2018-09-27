<template lang="html">
  <section id="Experience" class="animated fadeIn" :class="[{fullHeight: isBigger}]">
    <section id="ExperienceTitle">
      <SectionTitle sectionName="Experience" description="Great Places to Work."/>
    </section>
    <section id="ExperienceContent">
      <b-container fluid class="mt-3 mb-md-3">
        <div class="card-deck d-flex justify-content-center">
          <WorkCard v-for="card in workcards" v-bind:key="card.id"
            :title="card.Title"
            :image="card.Image"
            :alt_imgage="card.Alt_Image"
            :content="card.Description[language]"
            :subtitle="card.Subtitle[language]"/>
        </div>
      </b-container>
    </section>
    <Footer :fixed="isBigger"/>
  </section>
</template>

<script>
import SectionTitle from '@/components/SectionTitle.vue'
import WorkCard from '@/components/WorkCard.vue'
import Footer from '@/components/Footer.vue'

import { db } from '../firebase'

export default {
  name: 'Experience',
  components: {
    SectionTitle,
    WorkCard,
    Footer
  },
  data () {
    return {
      window: {
        width: 0,
        height: 0
      },
      workcards: []
    }
  },
  computed: {
    isBigger () {
      if (this.window.height >= 850 && this.window.width >= 850) {
        return true
      } else {
        return false
      }
    },
    language () {
      return this.$store.state.language
    },
    isEnglish () {
      return this.$store.getters.isEnglish
    }
  },
  beforeCreate () {
    db.collection('SectionContent').doc('Experience').onSnapshot(doc => {
      this.workcards = doc.data().WorkCards.reverse()
    })
  },
  created () {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
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
