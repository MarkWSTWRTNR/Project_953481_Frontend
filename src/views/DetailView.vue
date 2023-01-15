<template>
  <router-link to="/favorite"> Favorite</router-link>
  <div >

    <h2 class="header">
      <p>{{ anime.title }}</p>
      <span>Rank: #{{ anime.rank }}</span> |
      <span>Score: {{ anime.score }}</span> |
      <span>Popularity: #{{ anime.popularity }}</span>
    </h2>
    <p>Fav: {{ anime.favorites }} people</p>
    <p>Duration: {{ anime.duration }}</p>
    <p>Status: {{ anime.status }}</p>
    <p>Source:{{ anime.source }}</p>
    <p>Ep Total: {{ anime.episodes }}</p>

    <span v-if="loggedIn">

      Your score:
      <span v-if="Fav() == ''">
        <select id="score" v-model="givenScore">
          <option value="" disabled selected>Score</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>/10
        <span v-if="givenScore != ''">
          <router-link to="/favorite">
          <button @click="this.$store.dispatch('AddToList')">
            Add to Favorite</button></router-link>
        </span>
      </span>
      <h3>Synopsis</h3>
      <p>{{ anime.synopsis }}</p>
    </span>
  </div>

</template>
<script>
import { mapState } from "vuex";
export default {
  name: "DetailView",
  methods: {
    Fav() {
      let anime = this.$store.state.anime.data;
      // find a matching anime list, then do something
      let exists = this.$store.state.currentUser.favorites.find(
        (fAnime) => fAnime.id === anime.mal_id
      );
      if (exists) {
        //do something
        return exists.score;
      } else {
        return "";
      }
    },
  },
  computed: {
    ...mapState({
      user: (state) => state.currentUser.username,
      anime: (state) => state.anime.data,
      loggedIn: (state) => state.loggedIn,
    }),
    givenScore: {
      get() {
        return this.$store.state.givenScore;
      },
      set(input) {
        this.$store.commit("setScoreInput", input);
      },
    },
  },
};
</script>
<style scoped>

</style>
