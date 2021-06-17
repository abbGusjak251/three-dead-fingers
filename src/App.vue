<template>
  <div id="app">
  <v-app id="vuetify-container">
      <div id="top">
          <top></top>
      </div>
      <img id="logo" src="./assets/tdf-logo-site.png" alt="Band logo" width="400px"/>
      <router-view></router-view>
  </v-app>
  </div>
</template>

<script>
import Top from './components/Top';

export default {
  name: 'App',

  components: {
    Top
  },

  data: () => ({
    logo: "./assets/tdf-logo-site.png"
  }),
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap');

#app {
  user-select: none;
  max-height: 100vh;
}
#logo {
  margin-left: auto;
  margin-right: auto;
  margin-top: -90px;
}
#top {
  margin-bottom: 25%;
}
#vuetify-container {
  max-height: 100vh;
}
#footer {
  position: relative;
  bottom: 0;
}

section {
  margin-top: 20px;
  margin-bottom: 20px;
}


h1 {
  font-family: 'Metal Mania', cursive;
  text-align: center;
  font-size: 10vh;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .3);
}

h2 {
  text-align: center; 
  position: relative; 
  margin: 0 auto;
}

@media only screen and (max-width: 700px) {
    h1 {
      font-size: 8vh;
    }
}

</style>
