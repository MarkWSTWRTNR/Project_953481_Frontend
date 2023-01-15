<template>
  <div :style="{}">
    <nav>
      <router-link to="/home"><a class="">Home</a></router-link>
      <span v-if="this.$route.name == 'home'"> |
        <span v-if="this.$store.state.loggedIn == false">
          <router-link to="/login">
            <a class="">Log in</a>
          </router-link>
        </span>
        <span v-else>
          <router-link to="/favorite"><a class="favorite-button">Favorite</a></router-link>
         | <a class="" @click="this.$store.dispatch('logout')">Log out</a>
        </span>
      </span>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.commit('logout')
    }

  },
}
</script>

<style>
body {
  background-image: url('../src/assets/bg.png');
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;

}
</style>