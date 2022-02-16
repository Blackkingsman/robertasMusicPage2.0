<template>
  <div class="video">
    <video
      id="home_video"
      width="100%"
      height="auto"
      muted
      loop
      autoplay
      playsinline
      src="../assets/video/theWay.mp4"
      type="video/mp4"
    ></video>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    checkLowPower() { 
       $('body').on('click touchstart', function () {
            const videoElement = document.getElementById('home_video')
            if (!videoElement.paused) {
                console.log("VIDEDO")

            }
            else {
                // video is not playing
                // so play video now
                console.log('play')
                videoElement.play()
            }
    });
    },
  },
  mounted() {
    this.checkLowPower();
  },
};
</script>
<style>
.video {
  background-color: rgb(249, 221, 194);
}
</style>
