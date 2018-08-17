<template>
  <div id="app">
    <b-navbar id="nav" variant="dark" type="dark" toggleable="md" class="sticky-top">
      <b-navbar-brand to="/" class="p-0 m-0">
        <img src="./assets/wolf-logo.png" alt="Wolf Logo" height="38px" class="mr-3">
        <strong>Angel Marin</strong>
      </b-navbar-brand>

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/about" class="pr-3 pl-3 pt-1 pb-1">About</b-nav-item>
          <b-nav-item to="/experience" class="pr-3 pl-3 pt-1 pb-1">Experience</b-nav-item>
          <b-nav-item to="/about" class="pr-3 pl-3 pt-1 pb-1">Education</b-nav-item>
          <b-nav-item to="/about" class="pr-3 pl-3 pt-1 pb-1">Projects</b-nav-item>
          <b-nav-item to="/about" class="pr-3 pl-3 pt-1 pb-1">Blog</b-nav-item>
          <b-nav-item to="/about" class="pr-3 pl-3 pt-1 pb-1">Contact</b-nav-item>
          <b-nav-item href="#hello" class="pr-3 pl-3 pt-1 pb-1">EN</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <router-view/>
  </div>
</template>

<style>
#nav {
  background-color: #212224 !important;
}

#nav a.nav-link {
  padding: 0;
}
</style>
