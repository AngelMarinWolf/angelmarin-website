<template lang="html">
  <b-row align-v="center">
    <b-col sm="12" md="3" class="p-3">
      <img src="../assets/pictures/profile-picture-op.jpg" alt="Profile_Picture" class="img-thumbnail">
    </b-col>
    <b-col sm="12" md="9" class="p-3">
      <h4><strong>PROFILE</strong></h4>
      <hr>
      <p class="text-justify description-text">
        I was working as a SysAdmin for two years and one year involved in DevOps projects, I am an
        AWS architect designer and a Linux diffuser and promoter, using technologies like NGINX,
        Apache, PHP, Puma, NodeJS, Ruby, Docker, CircleCI, Jenkins, Google Cloud and Amazon AWS, I
        help to build cloud-native applications faster, agile, secure, with high performance, high
        scalability, and high availability.
      </p>
      <b-collapse id="ReadMoreProfile">
        <p class="text-justify description-text">
          My specialty is the creation of infrastructure in Amazon AWS for Microservices and Web Applications,
          thanks to the microservices and the containers I can create isolated services with the capacity to
          adapt it depending on the necessities for the current clients, only growing when are required and
          keeping aware with the fewer resources if are not used, saving costs.
        </p>
        <p class="text-justify description-text">
          In the second place, I created Docker Images for many different sets of applications and services.
          Automating the Build and Deploy process for the containers I improved the performance in the development
          method for the software, and making the deployments completely transparent for the final users without
          downtime and a detailed plan for disaster recovery allowing quick restores.
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
export default {
  name: 'ProfileCard',
  data () {
    return {
      readmoreShow: false
    }
  },
  computed: {
    getReadMessageBtn () {
      if (this.readmoreShow) {
        return '<< Collapse'
      } else {
        return 'Read More >>'
      }
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
