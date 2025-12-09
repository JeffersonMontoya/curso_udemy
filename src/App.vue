<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
    <div class="container">
      <router-link class="navbar-brand" to="/">Mi App</router-link>

      <div class="navbar-nav">
        <router-link class="nav-link" to="/home">Home</router-link>
        <router-link class="nav-link" to="/pokemon">Pokemon</router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>
