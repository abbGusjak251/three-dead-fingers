<template>
  <div>
      <section v-if="loading">
        <p class="text-center">Loading Concerts</p>
        <v-progress-circular v-if="loading" indeterminate color="secondary" style="display: block; margin: 0 auto;"></v-progress-circular>
      </section>
      <section>
        <v-card width="600px" class="mx-auto" v-for="concert in concerts" :key="concert.name" dark padless shaped>
          <v-img :src="concert.img" width="600px" height="260px"></v-img>
          <v-card-title>{{concert.name}}</v-card-title>
          <v-card-subtitle><b>{{concert.date}}</b></v-card-subtitle>
          <v-card-text>{{concert.description}}</v-card-text>
        </v-card>
      </section>
      <links></links>
  </div>
</template>

<script>
import axios from 'axios'
import Links from '../components/Links'
export default {
    components: {
      Links
    },
    data: () => ({
      concerts: [],
      loading: true
    }),
    async mounted() {
      const response = await axios.get('http://thawing-earth-16818.herokuapp.com/api/concerts');
      if(response) {
        this.concerts = response.data;
        this.loading = false;
        console.log(response.data);
      }
    }
}
</script>
