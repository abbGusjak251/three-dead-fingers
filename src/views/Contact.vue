<template>
    <div class="contact text-center">
        <h2>Email Address</h2>
        <br>
        <p id="email">{{email}}</p>
        <section>
            <button id="copy-button" @click="copyEmail()">Copy E-mail Address</button>
        </section>
        <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="2000">{{snackbarText}}</v-snackbar>
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
        email: "oliwer.bergman@threedeadfingers.com",
        snackbar: false,
        snackbarText: "",
        snackbarColor: "secondary"
    }),
    methods: {
        copyEmail() {
            // Copy text
            let text = document.getElementById('email').innerText;
            let elem = document.createElement("textarea");
            document.body.appendChild(elem);
            elem.value = text;
            elem.select();
            let success = document.execCommand("copy");
            document.body.removeChild(elem);

            // Show snackbar
            this.snackbar = true;
            if(success) {
                this.snackbarText = "Email address successfully copied";
                this.snackbarColor = "secondary";
            } else {
                this.snackbarText = "Failed to copy email address";
                this.snackbarColor = "error";
            }

        }
    }
}
</script>

<style scoped>
    #copy-button {
        text-decoration: underline;
    }
</style>