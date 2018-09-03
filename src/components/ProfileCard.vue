<template lang="html">
  <b-row align-v="center">
    <b-col sm="12" md="3" class="p-3">
      <img src="../assets/pictures/profile-picture-op.jpg" alt="Profile_Picture" class="img-thumbnail">
    </b-col>
    <b-col sm="12" md="9" class="p-3">
      <h4><strong>{{ isEnglish ? 'PROFILE':'PERFIL' }}</strong></h4>
      <hr>
      <p class="text-justify description-text">
        {{ paragrafs[0] }}
      </p>
      <b-collapse id="ReadMoreProfile">
        <p class="text-justify description-text">
          {{ paragrafs[1] }}
        </p>
        <p class="text-justify description-text">
          {{ paragrafs[2] }}
        </p>
      </b-collapse>
      <div class="d-flex justify-content-end">
        <b-button variant="outline-secondary" v-b-toggle="'ReadMoreProfile'"
          v-on:click="readmoreShow = !readmoreShow" class="btn-outline-square">
          <strong>{{ getReadMessageBtn }}</strong>
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import db from '../firebase'

export default {
  name: 'ProfileCard',
  data () {
    return {
      readmoreShow: false,
      paragrafs: ''
    }
  },
  computed: {
    getReadMessageBtn () {
      if (this.readmoreShow) {
        if (this.$store.state.language === 'EN') {
          return '<< Collapse'
        } else {
          return '<< Cerrar'
        }
      } else {
        if (this.$store.state.language === 'EN') {
          return 'Read More >>'
        } else {
          return 'Ver más >>'
        }
      }
    },
    language () {
      return this.$store.state.language
    },
    isEnglish () {
      return this.$store.getters.isEnglish
    }
  },
  created () {
    db.collection('SectionContent').doc('About').onSnapshot((doc) => {
      this.paragrafs = doc.data().ProfileCard.Paragraf[this.language]
    })
  },
  watch: {
    language (val, oldVal) {
      db.collection('SectionContent').doc('About').onSnapshot((doc) => {
        this.paragrafs = doc.data().ProfileCard.Paragraf[this.language]
      })
    }
  }
}
</script>

<style lang="css">
.btn-outline-square {
  color: #17181A !important;
}
.btn-outline-square:hover, .btn-outline-square:focus {
  background-color: #17181A !important;
  border-color: #17181A;
  color: white !important;
}
</style>
