<template>
  <div id="top">
    <div id="app">
      <img :class="imageClass" v-bind:src="images[0]">
      <vue-gallery-slideshow :images="images" :index="index" @close="index = null"></vue-gallery-slideshow>
      <navigation></navigation>
    </div> 
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow';
import router from '../router/index.js'
import Navigation from '../components/Nav'

  export default {
    name: 'Top',
    components: {
      VueGallerySlideshow,
      Navigation
    },
    methods: {
      showImages() {
        this.imageClass = "image visible"
      },
      goto(location) {
        router.push(location);
      }
    },
    mounted() {
      this.showImages()
    },
    data: () => ({
      drawer: false,
      images: [
        require('../assets/main-bg-cropped.jpeg'),
        require('../assets/main-bg.jpeg')
      ],
      imageClass: "image",
      items: [
        {
          title: "Home",
          link: "/"
        },
        {
          title: "Concerts",
          link: "/concerts"
        },
        {
          title: "Music Videos",
          link: "/videos"
        },
      ],
      index: null
    })
     
  }
</script>

<style>
  h1 {
    text-shadow: 4px 4px 4px 1 gray;
  }
  .image {
    position: absolute;
    top: 0;
    object-fit: cover;
    width: 100vw;
    opacity: 0%;
    height: 550px;
    box-shadow: 0px 10px 10px rgba(50, 50, 50, .2);
    transform: scale(1.1);
    transition: filter 1s ease-in-out, opacity 1s ease-in-out;
  }
  .visible {
    opacity: 100%;
    filter: blur(.5px);
    height: auto;
    transform: scale(1);
  }

  @media only screen and (max-width: 1000px) {
    .visible {
      height: auto;
    }
  }
</style>
