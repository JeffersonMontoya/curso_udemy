<template>
  <nav class="navbar-custom">
    <div class="nav-container">
      <router-link class="brand" to="/">PokeApi</router-link>

      <div class="links">
        <router-link class="link" to="/">Home</router-link>
        <router-link class="link" to="/pokemon">Pokemon</router-link>
        <router-link class="link" to="/favoritos">Favoritos</router-link>
      </div>
    </div>
  </nav>

  <router-view />
</template>

<style scoped>
.navbar-custom {
  background: #1f1f1f;
  padding: 1rem 0;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0,0,0,0.35);
}

.nav-container {
  max-width: 1100px;
  margin: auto;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand {
  font-size: 1.7rem;
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  letter-spacing: 0.5px;
  transition: opacity 0.3s ease;
}

.brand:hover {
  opacity: 0.75;
}


.links {
  display: flex;
  gap: 1.4rem;
}

.link {
  color: #d4d4d4;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.25s ease, transform 0.25s ease;
}

.link:hover {
  color: #4d9afd;
  transform: translateY(-2px);
}

.router-link-active {
  color: #6ea8ff !important;
  border-bottom: 2px solid #6ea8ff;
  padding-bottom: 2px;
}
</style>
