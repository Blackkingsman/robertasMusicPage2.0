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
    // redirect(url){
    //   window.location = url;
    // }
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
    font-size: 45px;
    margin-bottom:  30px;
    margin-top: 30px;
    color: red;
  }
 @media screen and (max-width: 500px) {
  #items { display: none; }   /* hide it elsewhere */
}
</style>
