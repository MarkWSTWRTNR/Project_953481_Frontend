<template>
  <div class="home">
    <form class="search-box" @submit.prevent="SearchTitle">
      <input
        type="search"
        class="search-field"
        placeholder="Search for title:"
        v-model="searchQuery"
      />
    </form>
    <div>
      <Card v-for="anime in animeList"
      :key="anime.mal_id"
      :anime="anime" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '../components/Card.vue'
export default {

  name: "HomeView",
  components: {
    Card
  },
  data() {
    return {
      searchQuery: "",
      animeList: []
    }
  },
  methods:{
    async SearchTitle() {
      const response = await fetch (`http://localhost:5000/searchbytitle?query=${this.searchQuery}`)     
      this.animeList = await response.json();
      console.log(this.animeList)
    }
  }
};
</script>
