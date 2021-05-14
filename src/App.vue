<template>
  <!-- App.vue -->
  <v-app>
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
    <v-footer class="footer" >
     <font-awesome-icon :icon="['fab', 'spotify']" class=" fa-4x " />
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
   url(./assets/fonts/WinterSong.ttf);
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
.v-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;            /* Footer height */
}
.v-btn:hover:before {
  opacity: 0 !important;
}
</style>
