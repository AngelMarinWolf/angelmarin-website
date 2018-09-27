<template lang="html">
  <div id="WorkCard" class="card mb-3 shadow">
    <img class="card-img-top" :src="image_path" :alt="alt_image">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text text-justify">{{ content }}</p>
      <p class="card-text"><small class="text-muted">{{ subtitle }}</small></p>
    </div>
  </div>
</template>

<script>
import { storage } from '../firebase'

export default {
  name: 'WorkCard',
  props: {
    title: String,
    image: String,
    alt_image: String,
    content: String,
    subtitle: String
  },
  data () {
    return {
      image_path: ''
    }
  },
  created () {
    storage.ref('/public/logos/works/' + this.image).getDownloadURL().then((result) => {
      this.image_path = result
    })
  }
}
</script>

<style lang="css">
#WorkCard {
  max-width: 400px;
}
</style>
