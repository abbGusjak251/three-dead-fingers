<template>
  <div class="home">
      <v-lazy :options="{
            threshold: 1
          }">
            <bio></bio>
      </v-lazy>
      <section>
          <h1>Music</h1>
      </section>
          <v-lazy :options="{
          threshold: 1
        }">
            <spotify></spotify>
          </v-lazy>
      <links></links>
  </div>
</template>

<script>
import Spotify from '../components/Spotify'
import Bio from '../components/Bio'
import Links from '../components/Links'

export default {
  name: 'Home',
  components: {
    Spotify,
    Bio,
    Links
  }
}
</script>
