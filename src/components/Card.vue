<template>
    <router-link
    class="card"
    target="_self"
    :to="{ name: 'detail', params: { id: anime.mal_id } }"
  >
      <div class="event-card">
        <img :src="anime.main_picture" />
        <span>{{ anime.title }}</span> <br>
        <span>Score: {{ anime.score }}</span>
      </div>
    </router-link>
  </template>
  <script>
  export default {
    props: ['anime']
  }
  </script>
  <style scoped>
  .event-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  
  .event-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  
  .event-link {
    color: #2c3e50;
    text-decoration: none;
  }
  </style>
  