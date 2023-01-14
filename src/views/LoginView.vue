<template>
    <div>
      <input v-model="username" placeholder="Enter username:" type="text" /><br>
      <input v-model="password" placeholder="Enter password:" type="text" />
    </div>
    <span v-if="$store.state.username != '' && $store.state.password != ''">
      <button @click="this.$store.dispatch('login')">submit</button>
    </span>
    <span v-else>
      <button>submit</button>
    </span>
  </template>
  
  <script>
  export default {
    name: "LoginView",
    computed: {
      username: {
        get() {
          return this.$store.state.username;
        },
        set(input) {
          this.$store.commit("setUsernameInput", input);
        },
      },
      password: {
        get() {
          return this.$store.state.password;
        },
        set(input) {
          this.$store.commit("setPasswordInput", input);
        },
      },
    },
  };
  </script>
  <style scoped>

  </style>