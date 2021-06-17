<template>
    <v-card padless="true">
        <v-footer width="100vw">
            <v-card flat color="transparent" tile width="100vw" class="text-center">
                <div id="links-container"> 
                    <a v-for="item in links" :key="item.link" :href="item.link" target="_blank"><img class="links" :src="item.image" alt="Social Media"></a>
                </div>
                <v-divider width="100%"></v-divider>
                <p><b>Three Dead Fingers</b></p>
            </v-card>
        </v-footer>
    </v-card>
</template>

<script>

export default {
    data: () => ({
        links: [
            {
                image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Facebook_icon_%28black%29.svg/1200px-Facebook_icon_%28black%29.svg.png',
                link: 'https://www.facebook.com/threedeadfingers',
            },
            {
                image: 'https://cdn4.iconfinder.com/data/icons/social-media-2231/512/62-instagram_social-512.png',
                link: 'https://www.instagram.com/threedeadfingers/',
            },
            {
                image: 'http://cdn.onlinewebfonts.com/svg/img_424253.png',
                link: 'https://open.spotify.com/artist/4HRAIaImnzLolfpKhznmIP',
            }
        ]
    })
}
</script>


<style>
    #links-container {
        display: flex;
        justify-content: space-around;
        margin-left: auto;
        margin-right: auto;
        width: 10rem;
        
    }
    .links {
        width: 5vh;
        filter: grayscale(100%);
    }
</style>