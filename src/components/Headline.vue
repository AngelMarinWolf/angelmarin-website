<template lang="html">
<section id="Headline">
  <b-jumbotron fluid class="headline text-center mb-0">
    <b-row align-h="center">
        <b-col cols="7" class="card-blur pt-3 pb-3">
          <strong>Hi, I am</strong>
          <h1><strong>ANGEL MARIN</strong></h1>
          <hr class="d-none d-md-block">
          <h2>I am a <strong>DevOps</strong></h2>
          <b-button class="btn-circle-outline bg-transparent text-center">
            <font-awesome-icon :icon="['fab','facebook-f']" />
          </b-button>
        </b-col>
    </b-row>
  </b-jumbotron>
</section>
</template>

<script>
export default {
}
</script>

<style lang="css">
.headline {
  height: 480px;
  color: white;
  background-image: url('../assets/space-station.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.card-blur {
  color: white;
  background-image: url('../assets/space-station-blur.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  border-radius: 15px;
  border-style: solid;
  border-width: 0px
}
.headline hr {
  border-width: 2px;
  border-color: white;
  width: 100%;
}
.btn-circle-outline {
  border-color: white;
  border-radius: 50px;
  height: 38px;
  width: 38px;
  padding: 6px;
  color: white;
}
.btn-circle-outline:hover, .btn-circle-outline:focus {
  background-color: #17181A !important;
  border-color: #17181A;
}
</style>
