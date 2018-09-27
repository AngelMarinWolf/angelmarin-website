<template>
  <section id="Home" class="animated fadeIn" :style="{'background-image': 'url(' + this.backgroud_image_url + ')'}">
    <b-container id="HeadlineContainer">
      <b-row align-v="center">
        <b-col>
          <Headline/>
        </b-col>
      </b-row>
    </b-container>
    <Footer fixed/>
  </section>
</template>

<script>
// @ is an alias to /src
import Headline from '@/components/Headline.vue'
import Footer from '@/components/Footer.vue'

import { storage } from '../firebase'

export default {
  name: 'Home',
  components: {
    Headline,
    Footer
  },
  data () {
    return {
      backgroud_image_url: ''
    }
  },
  beforeCreate () {
    storage.ref('/public/backgrounds/courscant.jpg').getDownloadURL().then((result) => {
      this.backgroud_image_url = result
    })
  }
}
</script>

<style media="screen">
  #Home {
    height: inherit;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: white;
  }
  #HeadlineContainer, #HeadlineContainer .row {
    height: inherit;
  }
</style>
