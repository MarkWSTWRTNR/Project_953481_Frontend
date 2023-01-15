<template>
<div> <button @click="this.$router.back()">Go Back</button>
</div> <br>
  <table>
    <tr>
      <th>Tag</th>
      <th class>Anime</th>
      <th>Score</th>
    </tr>
    <tr
      class="favorites-detail"
      v-for="favorite in favorites"
      :key="favorite.id"
    >
      <td>{{ favorite.rank }}</td>
      <td >{{ favorite.name }}</td>
      <td>{{ favorite.score }}</td>
      <td>
        
        <!-- <button @click="dispatchAction(favorite)">-</button> -->
        <!--Function ใช้บอก Store ว่าเกิด Action ขึ้นแล้ว ให้อัพเดท Type ตาม Reducer  -->
      </td>
    </tr>
  </table>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "FavoriteListView",
  methods: {
    dispatchAction(favorite) {
      console.log(favorite);
      this.$store.commit("setSelectedAnime", favorite);
      this.$store.dispatch("RemoveFromList");
    },
  },
  computed: {
    // mapState() เป็น function สําหรับ map state ใน Store ของเราเข้ามาเป็น Computed เพื่อให้เราสามารถเรียกใช้งานใน Component ได้ง่ายๆ
    ...mapState({
      favorites: (state) => state.currentUser.favorites,
    }),
  },
};
</script>
<style scoped>
table {
  background-color: rgb(207, 191, 120);
  width: 100%;
  margin: auto;
}
td,
th {
  color: rgb(0, 0, 0);
}

</style>
