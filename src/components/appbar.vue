<template>
  <div>
    <v-app-bar fixed color="transparent" @click.stop="drawer = !drawer">
      <v-row>
        <v-col cols="2">
          <v-app-bar-nav-icon class="vertical-center"></v-app-bar-nav-icon>
        </v-col>
        <v-col class="d-flex justify-space-around">
          <v-toolbar-title
            class="vertical-center"
          >
            <h1 class="title">Trippie Redd</h1>
          </v-toolbar-title>
        </v-col>
        <v-col cols="2" class="d-flex justify-end">
          <span class="fa-2x " @click="redirect('https://www.instagram.com/trippieredd/?hl=en')">
            <font-awesome-icon color="purple" class="fab" :icon="['fab', 'instagram']" />
          </span>
          <span class=" fa-2x " @click="redirect('https://www.youtube.com/channel/UCstw-41J8syXgdJ8xWvaizA')">
            <font-awesome-icon color="red" :icon="['fab', 'youtube']" />
          </span>
          <span class=" fa-2x " @click="redirect('https://twitter.com/trippieredd?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')">
            <font-awesome-icon color="rgb(29, 161, 242)" :icon="['fab', 'twitter']" />
          </span>
          <span class=" fa-2x " @click="redirect('https://open.spotify.com/artist/6Xgp2XMz1fhVYe7i6yNAax')">
            <font-awesome-icon color="green" :icon="['fab', 'spotify']" />
          </span>
          <span class=" fa-2x " @click="redirect('https://www.facebook.com/TrippieRedd/')">
            <font-awesome-icon color="blue" :icon="['fab', 'facebook']" />
          </span>
          <span class=" fa-2x " @click="redirect('https://soundcloud.com/trippie-hippie-2')">
            <font-awesome-icon color="orange" :icon="['fab', 'soundcloud']" />
          </span>

          <!-- <span class=" fa-2x " @click="redirect('https://www.youtube.com/channel/UCtjsu3dwIPX505yXjOaCHKg')">
              <font-awesome-icon :icon="['fas', 'mail']" />
            </span> -->
        </v-col>
      </v-row>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      bottom
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title>Foo</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Bar</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Fizz</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>Buzz</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>

<style>
  .title{
    font-family: "WinterSong";
    font-size: 30px;
  }
</style>
