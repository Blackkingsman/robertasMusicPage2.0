<template>
<div>
  <div class="video">
    <video
      id="home_video"
      width="100%"
      height="auto"
      playsinline
      hidden 
      muted
      autoplay
      loop
      src="../assets/video/theWay.mp4"
      type="video/mp4"
    ></video>
  </div>
  <div id="fallback" >
    <v-img
      width="100%"
      height="auto"
      src="https://i3.ytimg.com/vi/UnL8-Bwm2Yg/maxresdefault.jpg"
    ></v-img>

  </div>
</div>
  
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      hidden: true,
      suspended: false,
    };
  },
  methods: {
    checkLowPower() {
      
      $("body").on("click touchstart", function () {
        const videoElement = document.getElementById("home_video")
        const imageElement = document.getElementById("fallback")
        if (!videoElement.playing) {
        imageElement.hidden = true
         videoElement.hidden = false
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
