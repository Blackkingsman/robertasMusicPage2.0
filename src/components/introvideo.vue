<template>
  <div class="video">
    <video
      v-if="!suspended"
      id="home_video"
      width="100%"
      height="auto"
      muted
      loop
      autoplay
      inline
      src="../assets/video/theWay.mp4"
      type="video/mp4"
    ></video>
    <v-img
      v-else
      width="100%"
      height="auto"
      src="../assets/images/TrippieBackground.jpg"
    ></v-img>
  </div>
</template>

<script>
// import $ from "jquery";
export default {
  data() {
    return {
      suspended: false,
    };
  },
  methods: {
    checkLowPower() {
      const videoElement = document.getElementById("home_video");

      videoElement.addEventListener("suspend", () => {
        this.suspended = true;
      });

      videoElement.addEventListener("play", () => {
        this.suspended = false;
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
