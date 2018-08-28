<template lang="html">
  <section id="WorkCard">
    <div class="card">
      <img class="card-img-top" :src="image_path" :alt="alt_image">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <p class="card-text">{{ content }}</p>
        <p class="card-text"><small class="text-muted">{{ subtitle }}</small></p>
      </div>
    </div>
  </section>
</template>

<script>
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
      image_path: require("../assets/logos/"+this.image)
    }
  }
}
</script>

<style lang="css">
img {
  max-width: 400px;
  max-height: 400px;
}
</style>
