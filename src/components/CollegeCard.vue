<template lang="html">
  <section id="ITS">
    <div class="d-flex justify-content-center mb-2">
      <div class="card shadow m-0">
        <div class="card-body px-2 pb-0 pt-2">
          <b-button variant="outline-dark" size="sm" v-b-toggle="'ITSinfo'" class="btn-fullwidth">
            <strong>{{ title }}</strong>
          </b-button>
        </div>
        <img class="card-img p-2" :src="image_url" :alt="alt_image">
        <b-collapse id="ITSinfo">
          <div class="card-body">
            <p class="card-text text-justify">{{ description }}</p>
            <p class="card-text"><small class="text-muted">{{ dates }}</small></p>
          </div>
        </b-collapse>
      </div>
    </div>

  </section>
</template>

<script>
import { storage } from '../firebase'
export default {
  name: 'CollegeCard',
  props: {
    title: String,
    image: String,
    alt_image: String,
    description: String,
    dates: String,
    site_url: String,
    certificate_image_name: String
  },
  data () {
    return {
      image_url: ''
    }
  },
  computed: {
    language () {
      return this.$store.state.language
    },
    isEnglish () {
      return this.$store.getters.isEnglish
    }
  },
  created () {
    storage.ref('/public/photos/' + this.image).getDownloadURL().then((result) => {
      this.image_url = result
    })
  }
}
</script>

<style lang="css">
.btn-fullwidth {
  width: 100%;
}
</style>
