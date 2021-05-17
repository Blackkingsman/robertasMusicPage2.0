<template>
  <div >
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
           <h1 v-if="!isPlaying && song.id !== setSong" style="margin: 0;
                   position: absolute;
                   text-align:center;
                   width: 100%
                   progress-circular-rotate-animation: progress-circular-rotate 0.5 linear infinite !default;
                   bottom: 0px;">{{song.title}}</h1>
            <h1 v-if="isPlaying && song.id !== setSong" style="margin: 0;
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
export default {
  data () {
    return {
      interval: {},
      audio: undefined,
      isPlaying: false,
      value: 0,
      setSong: undefined,
      lorem: 'Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.',
      songs: [
        {
          color: 'orange',
          id: 1,
          title: 'Missing The Rage',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1SfT9VRA1WumsQvtJTF6VOES1buGDK7Vw',
          cover_art_url: 'https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/xwpfpwoavrpaagyyemz2/trippie-redd'
        },
        {
          color: 'yellow',
          title: 'Who Needs Love',
          id: 2,
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1MyHsOj4bddkY_J6rr9vihjW_KNrMnEkG',
          cover_art_url: 'https://m.media-amazon.com/images/I/71o-nx6xlUL._SS500_.jpg'
        },
        {
          color: 'cyan',
          id: 3,
          title: 'I Kill People',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1YIFQanbXcup67c8TEy5pLV7Gr2fEKsld',
          cover_art_url: 'https://i1.sndcdn.com/artworks-000355808694-j5t3p0-t500x500.jpg'
        },
        {
          color: 'purple',
          id: 4,
          title: 'Hate Me',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1bSdDFFoKw6cHjn6IqlLURzyvT3A7cuMP',
          cover_art_url: 'https://m.media-amazon.com/images/I/71o-nx6xlUL._SS500_.jpg'
        },
        {
          color: 'red',
          id: 5,
          title: 'Weeeeee',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1UbR2EkOAevYGHRIMfmtxtnP4gThiJhzT',
          cover_art_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Trippie_Redd_-_Pegasus.jpg/220px-Trippie_Redd_-_Pegasus.jpg'
        },
        {
          color: 'blue',
          id: 6,
          title: 'Real Feel',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1cezrar-XyxDvPDkvk-kC2YsSf1V25reU',
          cover_art_url: 'https://m.media-amazon.com/images/I/71o-nx6xlUL._SS500_.jpg'
        },
        {
          color: 'green',
          id: 7,
          title: '6 Kiss',
          album: '',
          url: 'https://drive.google.com/uc?export=download&id=1RynC07xSIl58CrVa1MPrLpjFtRMi5ks9',
          cover_art_url: 'https://m.media-amazon.com/images/I/71o-nx6xlUL._SS500_.jpg'
        }
      ]
    }
  },
  methods: {
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
          console.log(Math.ceil(this.value));
        }, 1000)
      }
      this.isPlaying = true;
      this.setSong = songid
      console.log(this.isPlaying, songurl);
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
h1{
  color: red;
}
body{ margin:0;}
:root{
  --main-radius:5px;
  --main-padding:5;
}
.myGrid {
  display: grid;
  height: 100vh;
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
.purple {
  grid-area: purple;
  border-radius: var(--main-radius);
  padding-top: var(--main-padding); }
.red{
  grid-area: red;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}
.green {
  grid-area: green;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}
.blue {
  grid-area: blue;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);}

.yellow {
  grid-area: yellow;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);
}
.cyan{
  grid-area: cyan;
   border-radius: var(--main-radius);
  padding-top: var(--main-padding);
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
