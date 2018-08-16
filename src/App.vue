<template>
  <div id="app">
    <b-navbar variant="dark" type="dark" style="background-color: #212224 !important;">
      <b-navbar-brand>
        <img src="./assets/wolf-logo.png" alt="Wolf Logo" height="38px" class="mr-3">
        <strong>Angel Marin</strong>
      </b-navbar-brand>
    </b-navbar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
