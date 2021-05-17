<template>
  <!-- App.vue -->
  <v-app id="topNode" v-on:click="select($event)">
    <Appbar />
    <!-- Sizes your content based upon application components -->
    <v-main class="v-main">
      <!-- Provides the application the proper gutter -->
      <v-conatiner fluid>
        <IntroVideo />
        <!-- <About /> -->
        <UnreleasedVault />
      </v-conatiner>
    </v-main>
    <v-footer app>
    <font-awesome-icon icon="spotify"></font-awesome-icon>
    </v-footer>
  </v-app>
</template>

<script>
import "nuxt-fontawesome";
import IntroVideo from "./components/introvideo";
import UnreleasedVault from  './components/UnreleasedVault';
import Appbar from "./components/appbar.vue";
// import About from './components/about.vue';
export default {
  components: {
    UnreleasedVault,
    IntroVideo,
    Appbar,
    // About
  },
  methods: {
    select: function (event){
      const videoElement = document.getElementById('home_video');
            if (videoElement.playing) {
                // video is already playing so do nothing
            }
            else {
                // video is not playing
                // so play video now
                videoElement.play();
            }
    },
    redirect(link) {
      window.location = link;
    },
  },
};
</script>
<style>
@font-face {
  font-family: "WinterSong";
  src: local("WinterSong"),
   url(./assets/fonts/WinterSong.ttf) format("truetype");
}
span {
  padding: 10px;
}
.vertical-center {
  font-family: "Winter";
  font: 12;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.fab {
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.v-btn:hover:before {
  opacity: 0 !important;
}
</style>
