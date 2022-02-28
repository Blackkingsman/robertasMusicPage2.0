<template>
  <div style="background-color:rgb(118,46,93)">
    <h1 >Unreleased Vault</h1>
    <v-container class="myGrid">
      <v-card
        v-for="song in songs"
        :key="song.id"
        :class="song.color"
        :color="song.color + ' ' + 'lighten-2'"
        tile
        flat
        width="100%"
        height="100%"
        @click="!isPlaying ? playSong(song.url,song.id) : pause(song.url,song.id)"
      >
        <v-img class="card-img" :src="song.cover_art_url" width="inherit" height="inherit">
           <h1 class="song_title" v-if="!isPlaying && song.id !== setSong" style="margin: 0;
                   position: absolute;
                   text-align:center;
                   width: 100%
                   progress-circular-rotate-animation: progress-circular-rotate 0.5 linear infinite !default;
                   bottom: 0px;">{{song.title}}</h1>
            <h1 class="song_title" v-if="isPlaying && song.id !== setSong" style="margin: 0;
                   position: absolute;
                   text-align:center;
                   width: 100%
                   progress-circular-rotate-animation: progress-circular-rotate 0.5 linear infinite !default;
                   bottom: 0px;">{{song.title}}</h1>
          <div v-if="song.id === setSong" :class="song.id">
            <v-progress-circular
              v-if="isPlaying"
              :class="song.id"
              :rotate="360"
              :size="200"
              :width="15"
              :value="value"
              color="red accent-3"
              style="margin: 0;
                   position: absolute;
                   progress-circular-rotate-animation: progress-circular-rotate 0.5 linear infinite !default;
                   top: 50%;
                   left: 50%;
                   -ms-transform: translate(-50%, -50%);
                   transform: translate(-50%, -50%);"
            >
              <font-awesome-icon :icon="['fas', 'stop']" class=" fa-4x " />
            </v-progress-circular>
          </div>
        </v-img>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import {getFirestore,collection,onSnapshot} from 'firebase/firestore'
export default {
  async created() {
    //real time collection of data
    const db = getFirestore()
    const colRef = collection(db, "songs");
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.songs.push({ ...doc.data(), id: doc.id });
      });
      // console.log(this.songs); used to check the object that came from database
  })
  },
  data () {
    return {
      interval: {},
      audio: undefined,
      isPlaying: false,
      value: 0,
      setSong: undefined,
      songs: []
    }
  },
  methods: {
    //function for playing the song and setting the value of the progress bar as it progresses
    playSong (songurl, songid) {
      // if nothing is playing at all
      if (this.isPlaying === false) {
        this.audio = new Audio();
        this.audio.src = songurl;
        this.audio.type ="audio/mpeg"
        this.audio.load();
        this.audio.play();
        this.setSong = songid;
        this.interval = setInterval(() => {
          if (Math.ceil(this.value) === 100) {
            this.pause(songurl, songid);
            return (this.value = 0)
          }
          this.value += 3.33;
          // console.log(Math.ceil(this.value)); used to check values 
        }, 1000)
      }
      this.isPlaying = true;
      this.setSong = songid
      
      // console.log(this.isPlaying, songurl); used to debug
    },
    pause (songurl, songid) {
      if (this.setSong === songid) {
        this.audio.pause();
        this.isPlaying = false;
        this.setSong = undefined;
        clearInterval(this.interval);
        this.value = 0;
      } else {
        console.log('play the new song and send the id');
        this.audio.pause();
        this.isPlaying = false;
        clearInterval(this.interval);
        this.value = 0;
        this.playSong(songurl, songid);
      }
    }
  }
}
</script>

<style>
.song_title{
  color: whitesmoke;
  font-family: 'Arial';
}
body{ margin:0;}
:root{
  --main-radius:5px;
  --main-padding:5;
}
.myGrid {
  display: grid;
  height: 100vh;
  margin-bottom: 0 !important;
  grid-template-columns: 30% 40% 30%;
  grid-template-rows: repeat(3, 33%);
  grid-gap: 0.3rem;
  grid-template-areas: 
    "orange cyan red"
    "orange purple blue"
    "yellow purple green" ;
}

.orange {
  grid-area: orange;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding);
  
}
.orange:hover{
  transform:  translatex(-1px) translateY(-4px);
  transition: transform 500ms ease;
}
.purple {
  grid-area: purple;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding); 
  }
  .purple:hover{
  transform:  translatex(-1px) translateY(-4px);
  transition: transform 500ms ease;
}
.red{
  grid-area: red;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);
  
  }
  .red:hover{
  transform:  translatex(-1px) translateY(-4px);
  transition: transform 500ms ease;
}
.green {
  grid-area: green;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}
.green:hover{
  transform:  translatex(-1px) translateY(-4px);
  transition: transform 500ms ease;
}
.blue {
  grid-area: blue;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}
.blue:hover{
  transform:  translatex(-1px) translateY(-4px);
  transition: transform 500ms ease;
}
.yellow {
  grid-area: yellow;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
.yellow:hover{
  transform:  translatex(-1px) translateY(-4px);
  transition: transform 500ms ease;
}
.cyan{
  grid-area: cyan;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
.cyan:hover{
  transform:  translatex(-1px) translateY(-4px);
  transition: transform 500ms ease;
}
@media only screen and (max-width:550px) {
  .myGrid{
  grid-gap: 0.2rem;
  height: 99% !important;
    grid-template-columns: 100%;
    grid-template-rows: repeat(7, 13%);
    grid-template-areas:
    "orange"
    "yellow"
    "cyan"
    "purple"
    "red"
    "green"
    "blue"
    ;
    margin-bottom: 500px;
  }
  .footer {
        position: absolute;
        bottom: 0;
        height: 300px;
        width: 100%;
  }
}

</style>
