<template>
  <div>
    <div class="video">
      <video
        id="home_video"
        width="100%"
        height="auto"
        playsinline
        muted
        loop
        src="../assets/video/theWay.mp4"
        type="video/mp4"
      ></video>
    </div>
    <div id="fallback" hidden>
      <v-img
        
        width="100%"
        height="auto"
        src="https://i3.ytimg.com/vi/UnL8-Bwm2Yg/maxresdefault.jpg"
      ></v-img>
    </div>
    <h1 id="detect"></h1>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  data() {
    return {
      suspended: false,
      onMobile: false,
      value: false,
    };
  },
  methods: {
    checkLowPower() {
      $("body").on("click touchstart", function () {
        const videoElement = document.getElementById("home_video");
        const imageElement = document.getElementById("fallback")
        if (!videoElement.playing) {
         videoElement.hidden = false
           imageElement.hidden = true
          videoElement.play();
        }
      });
    },
  },
mounted(){
  const videoElement = document.getElementById("home_video");
 const imageElement = document.getElementById("fallback");
 
 //detect if were on mobile device

// some code..
  // videoElement.addEventListener('suspend', () => {
        // imageElement.hidden = false;
        // videoElement.hidden = true;
  //       document.getElementById("detect").innerHTML = "suspend detected"
  //   });
  
    videoElement.addEventListener('playing', () => {
       //keep video playing
    document.getElementById("detect").innerHTML = this.value
    });
setTimeout(() => {
  if(document.getElementById("detect").innerHTML.length ==! 'false') {
  document.getElementById("detect").innerHTML = "suspended"
        imageElement.hidden = false;
        videoElement.hidden = true;

}
  
}, 1500);
  
},
created(){
  //detect if were on mobile device
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
 // some code..
 this.checkLowPower()
}
}
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
