<template lang="html">
  <b-container class="p-0">
    <h4><strong>{{ isEnglish ? 'GENERAL INFO':'INFORMACION GENERAL'}}</strong></h4>
    <hr>
    <ul class="list-unstyled description-text text-center">
      <li>
        <label class="labelInfo pl-2 pr-2">
          <strong>{{ isEnglish ? 'Full Name:':'Nombre Completo:' }}</strong>
        </label>
        <p>Miguel Angel Marin Ecina</p>
      </li>
      <li>
        <label class="labelInfo pl-2 pr-2">
          <strong>{{ isEnglish ? 'Birth Day:':'Cumpleaños' }}</strong>
        </label>
        <p>{{ isEnglish ? 'January 29th':'29 de Enero' }}</p>
      </li>
      <li>
        <label class="labelInfo pl-2 pr-2">
          <strong>{{ isEnglish ? 'Job:':'Roles:' }}</strong>
        </label>
        <p>SysAdmin, DevOps, AWS Engineer, Frontend Developer, Database Administrator</p>
      </li>
      <li>
        <label class="labelInfo pl-2 pr-2">
          <strong>{{ isEnglish ? 'Telephone:':'Telefono' }}</strong>
        </label>
        <p>
          <b-button variant="outline-secondary btn-outline-square" href="tel:+52018441289316">
            <strong>+52 01 844 128 9316</strong>
          </b-button>
        </p>
      </li>
      <li>
        <label class="labelInfo pl-2 pr-2">
          <strong>Email:</strong>
        </label>
        <p>
          <b-button variant="outline-secondary btn-outline-square" href="mailto:marin.miguelangel96@gmail.com">
            <strong>marin.miguelangel96@gmail.com</strong>
          </b-button>
        </p>
      </li>
    </ul>
  </b-container>
</template>

<script>
export default {
  name: 'InformationCard',
  computed: {
    language () {
      return this.$store.state.language
    },
    isEnglish () {
      return this.$store.getters.isEnglish
    }
  }
}
</script>

<style lang="css">
.labelInfo {
  border-bottom: double;
  width: 60%;
  font-size: 0.8em !important
}
</style>
