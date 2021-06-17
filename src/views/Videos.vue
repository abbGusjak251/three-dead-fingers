<template>
  <div class="videos mx-auto">
    <h1>Music Videos</h1>
    <div v-for="video in videos" :key="video">
      <section>
        <h2>{{video.name}}</h2>
      </section>
      <section>
        <iframe style="display: block; margin: 0 auto;" width="400vw" height="250vw" :src="video.link" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </section>
    </div>
    <links></links>
  </div>
</template>

<script>
import Links from '../components/Links'
export default {
    components: {
      Links
    },
    data: () => ({
      videos: [
        {
          link: 'https://www.youtube.com/embed/Vu13Us14Ds0',
          name: 'Into The Bloodbath'
        }
      ]
    })
}
</script>