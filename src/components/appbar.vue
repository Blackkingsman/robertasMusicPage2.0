<template>
  <div>
    <v-app-bar fixed color="transparent" >
      <v-row>
        <v-col class="d-flex justify-space-around">
          <v-toolbar-title
            class="vertical-center"
          >
            <h1 class="Name" >Trippie Redd</h1>
          </v-toolbar-title>
        </v-col>
        <v-col cols="2"  class="d-flex justify-end">
          <span class="hidden-sm-and-down fa-2x "  @click="redirect('https://www.instagram.com/trippieredd/?hl=en')">
            <font-awesome-icon color="purple" class="fab" :icon="['fab', 'instagram']" />
          </span>
          <span class="hidden-sm-and-down  fa-2x " v-show="!$vuetify.breakpoint.sm"  @click="redirect('https://www.youtube.com/channel/UCstw-41J8syXgdJ8xWvaizA')">
            <font-awesome-icon color="red" :icon="['fab', 'youtube']" />
          </span>
          <span class="hidden-sm-and-down  fa-2x " v-show="!$vuetify.breakpoint.sm" @click="redirect('https://twitter.com/trippieredd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')">
            <font-awesome-icon color="rgb(29, 161, 242)" :icon="['fab', 'twitter']" />
          </span>
          <span class=" hidden-sm-and-down fa-2x " v-show="!$vuetify.breakpoint.sm" @click="redirect('https://open.spotify.com/artist/6Xgp2XMz1fhVYe7i6yNAax')">
            <font-awesome-icon color="green" :icon="['fab', 'spotify']" />
          </span>
          <span class="hidden-sm-and-down  fa-2x " v-show="!$vuetify.breakpoint.sm" @click="redirect('https://www.facebook.com/TrippieRedd/')">
            <font-awesome-icon color="blue" :icon="['fab', 'facebook']" />
          </span>
          <span class="hidden-sm-and-down  fa-2x " v-show="!$vuetify.breakpoint.sm" @click="redirect('https://soundcloud.com/trippie-hippie-2')">
            <font-awesome-icon color="orange" :icon="['fab', 'soundcloud']" />
          </span>
        </v-col>
      </v-row>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),
  methods: {
    redirect(url){
      window.location = url;
    }
  },

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style>
  .Name{
    font-family: "WinterSong" ;
    font-size: 35px;
    padding: 10px;
    color: orange;
  }
 @media screen and (max-width: 500px) {
  #items { display: none; }   /* hide it elsewhere */
}
</style>
