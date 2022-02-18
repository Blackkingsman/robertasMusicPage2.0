<template>
  <div class="video">
    <video
      v-if="suspended === false"
      id="home_video"
      width="100%"
      height="auto"
      playsinline
      autoplay
      muted
      loop
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
      videoElement: document.getElementById("home_video"),

    };
  },
  methods: {
    checkLowPower() {
      const videoElement = document.getElementById("home_video");

      videoElement.addEventListener("suspend", () => {
        console.log("suspend event detected");
        this.suspended = true;
      });
      videoElement.addEventListener("pause",() => {
        console.log("pause event detected");
        this.suspended = true;
      }); 

      videoElement.addEventListener("play", () => {
        console.log("play event detected");
        this.suspended = false;
      });
    },
    destroyedEvent(){

    }
  },

  created() {
    this.checkLowPower();
  },
  destroyed(){
    this.destroyedEvent();
  }
}
</script>
<style>
.video {
  background-color: rgb(249, 221, 194);
}
</style>
