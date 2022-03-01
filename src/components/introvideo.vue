<template>
<div>
  <div v-if="suspended === false" class="video">
    <video
      id="home_video"
      width="100%"
      height="auto"
      playsinline
      muted
      autoplay
      loop
      src="../assets/video/theWay.mp4"
      type="video/mp4"
    ></video>
  </div>
  <div v-else>
    <v-img
      width="100%"
      height="auto"
      src="../assets/images/TrippieBackground.jpg"
    ></v-img>

  </div>
</div>
  
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      suspended: false,
      videoElement: document.getElementById("home_video"),
    };
  },
  methods: {
    checkLowPower() {
      var promise = $("#home_video").play();

      if (promise === 'undefined'){
        this.suspended == true
      }
      $("body").on("click touchstart", function () {
        const videoElement = document.getElementById("home_video");
        if (!videoElement.playing) {
          console.log("video is doing something");
          videoElement.play();
        }
      });
    },
  },

  created() {
    this.checkLowPower();
  },
  destroyed() {
    this.destroyedEvent();
  },
};
</script>
<style>
*::-webkit-media-controls-panel {
  display: none !important;
  -webkit-appearance: none;
}

/* Old shadow dom for play button */

*::-webkit-media-controls-play-button {
  display: none !important;
  -webkit-appearance: none;
}

/* New shadow dom for play button */

/* This one works! */

*::-webkit-media-controls-start-playback-button {
  display: none !important;
  -webkit-appearance: none;
}
.video {
  background-color: rgb(249, 221, 194);
}
</style>
