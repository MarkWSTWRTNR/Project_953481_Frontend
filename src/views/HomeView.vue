<template>
  <div class="home">
    <form class="search-box" v-if="byTitle" @submit.prevent="SearchTitle">
      <input
        type="search"
        class="search-field"
        placeholder="Search for title:"
        v-model="searchQuery"
      />
    </form>
    <form class="search-box" v-else @submit.prevent="SearchDescription">
      <input
        type="search"
        class="search-field"
        placeholder="Search for description:"
        v-model="searchQuery"
      />
    </form>
    <button @click="this.byTitle = !this.byTitle">Switch search type</button>
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
      animeList: [],
      byTitle: false
    }
  },
  methods:{
    async SearchTitle() {
      const response = await fetch (`http://localhost:5000/searchbytitle?query=${this.searchQuery}`)     
      this.animeList = await response.json();
      console.log(this.animeList)
    },
    async SearchDescription() {
      const response = await fetch (`http://localhost:5000/searchbydescription?query=${this.searchQuery}`)     
      this.animeList = await response.json();
      console.log(this.animeList)
    },
    async switch() {
      if(this.byTitle){
        this.byTitle = false
      }else {
        this.byTitle = true
      }
    }
  }
};
</script>
