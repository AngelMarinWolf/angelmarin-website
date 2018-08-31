<template>
  <section id="Home" class="animated fadeIn">
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

export default {
  name: 'Home',
  components: {
    Headline,
    Footer
  }
}
</script>

<style media="screen">
  #Home {
    height: inherit;
    background-image: url('https://firebasestorage.googleapis.com/v0/b/angel-marin.appspot.com/o/courscant-op.jpg?alt=media&token=8476cc30-f837-4bf6-8e2b-2d1b3bde9f50');
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
