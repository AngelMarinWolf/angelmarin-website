<template lang="html">
<section id="Headline">
  <b-jumbotron fluid class="headline text-center mb-0">
    <strong>Hi, I am</strong>
    <h1><strong>ANGEL MARIN</strong></h1>
    <hr class="d-none d-md-block">
    <h2 v-bind:class="{'animated fadeInDown': employment_in}">
      I am a <strong>{{ employment_display }}</strong>
    </h2>
    <b-button class="btn-circle-outline bg-transparent text-center d-none d-md-inline-block" href="https://www.facebook.com/angel.yagami.16" target="_blank">
      <font-awesome-icon :icon="['fab','facebook-f']" />
    </b-button>
    <b-button class="btn-circle-outline bg-transparent text-center d-none d-md-inline-block" href="https://twitter.com/AngelMarinWolf" target="_blank">
      <font-awesome-icon :icon="['fab','twitter']" />
    </b-button>
    <b-button class="btn-circle-outline bg-transparent text-center" href="mailto:marin.miguelangel96@gmail.com">
      <font-awesome-icon :icon="['fas','envelope']" />
    </b-button>
    <b-button class="btn-circle-outline bg-transparent text-center" href="skype:marin.miguelangel96@outlook.com?chat">
      <font-awesome-icon :icon="['fab','skype']" />
    </b-button>
    <b-button class="btn-circle-outline bg-transparent text-center" href="https://www.linkedin.com/in/angelmarinsys/" target="_blank">
      <font-awesome-icon :icon="['fab','linkedin-in']" />
    </b-button>
    <b-button class="btn-circle-outline bg-transparent text-center d-none d-md-inline-block" href="https://www.youtube.com/channel/UCFK1jlKyZ_583dAnzfEHE-g" target="_blank">
      <font-awesome-icon :icon="['fab','youtube']" />
    </b-button>
    <b-button class="btn-circle-outline bg-transparent text-center d-none d-md-inline-block" href="https://github.com/AngelMarinWolf" target="_blank">
      <font-awesome-icon :icon="['fab','github-alt']" />
    </b-button>
  </b-jumbotron>
</section>
</template>

<script>
export default {
  data () {
    return {
      employments: ['SysAdmin','DevOps','AWS Engineer'],
      employment_display: 'SysAdmin',
      employment_in: true,
      employment_index: 0
    }
  },
  created () {
    setInterval(() => {
      this.employment_display = this.employments[this.employment_index];
      this.employment_in = true;
      setTimeout(() => {
        this.employment_in = false;
      }, 1000);
      if (this.employment_index == this.employments.length - 1 ) {
        this.employment_index = -1;
      }
      this.employment_index += 1;
    }, 2000 )
  }
}
</script>

<style lang="css">
.headline {
  height: 720px;
  color: white;
  background-image: url('../assets/courscant.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 200px;
}
.headline hr {
  border-width: 2px;
  border-color: white;
  width: 75%;
}
.btn-circle-outline {
  border-color: grey;
  border-radius: 50px;
  height: 38px;
  width: 38px;
  padding: 6px;
  margin: 4px;
  color: white;
}
.btn-circle-outline:hover, .btn-circle-outline:focus {
  background-color: #17181A !important;
  border-color: #17181A;
  color: white;
}
</style>
