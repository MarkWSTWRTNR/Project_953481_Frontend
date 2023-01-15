<template>
  <div class="events">
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
  </div>
  <div>
    <div v-if="animeList.similar_word == null" class="events-cards">
      <Card
        v-for="anime in animeList"
        :key="anime.mal_id"
        :anime="anime"
      />
    </div>
    <div v-else >
      <h2> Error! not found</h2>
      <h2>
        Did you mean:
        <i @click.prevent="SearchBySimilar" class="text_error">{{ animeList.similar_word }}</i>
      </h2>
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
      this.searchQuery = "";
    },
    async SearchDescription() {
      const response = await fetch (`http://localhost:5000/searchbydescription?query=${this.searchQuery}`)     
      this.animeList = await response.json();
      console.log(this.animeList)
      this.searchQuery = "";
    },
    SearchBySimilar() {
      this.searchQuery = this.animeList.similar_word;
      if (this.searchBy == "title") {
        this.SearchTitle();
      } else {
        this.SearchDescription();
      }
    },
    async ByTitle() {
      this.searchQuery = "";
      this.searchBy = "title";
    },
    async ByDescription() {
      this.searchQuery = "";
      this.searchBy = "description";
    },
  }
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.events-cards {
  display: flex;
  flex-wrap: wrap;
  width: 1200px;
  justify-content: left;
}
.text_error{
  text-decoration: underline;
  cursor: pointer;
}
</style>