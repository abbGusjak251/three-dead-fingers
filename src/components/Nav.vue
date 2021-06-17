<template>
    <div id="nav">
      <v-app-bar-nav-icon @click.stop="clicked()" :color="navColor" style="padding: 40px;" :class="navClass"></v-app-bar-nav-icon>
      <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
      dark
      >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item v-for="item in items" :key="item.title" @click="goto(item.link)">
            <v-list-item-title>{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
import router from '../router/index.js'

  export default {
    name: 'Nav',
    mounted() {
        window.addEventListener("scroll", this.onScroll);
    },
    methods: {
      goto(location) {
        router.push(location);
      },
      clicked() {
          this.drawer = !this.drawer;
          window.scrollTo(0, 0);
      },
      onScroll() {
          if(window.scrollY > 80) {
              this.navClass = "low";
              this.navColor = "gray";
          } else {
              this.navClass = "";
              this.navColor = "white";
          }
      }
    },
    data: () => ({
      navClass: "",
      navColor: "",
      drawer: false,
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
        {
          title: "Contact Us",
          link: "/contact-us"
        }
      ]
    })
     
  }
</script>

<style scoped>
    .low {
        top: 51vw;
    }
    @media only screen and (max-width: 1200px) {
        .low {
            top: 51vw;
        }
    }
</style>
