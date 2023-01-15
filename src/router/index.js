import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue"
import DetailView from "../views/DetailView.vue";
import DetailService from "@/services/DetailService.js";
import store from "@/store/index.js";
import UserFavoriteView from "../views/FavoriteListView.vue";
// import SuggestionView from "../views/SuggestionView.vue";
const routes = [
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailView,
    beforeEnter: (to) => {
      return DetailService.getAnime(to.params.id).then((response) => {
        store.state.anime = response.data;
        store.state.givenScore = "";
        console.log(store.state.anime);
      });
    },
  },
  {
    path: "/favorite",
    name: "favorite",
    component: UserFavoriteView,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

