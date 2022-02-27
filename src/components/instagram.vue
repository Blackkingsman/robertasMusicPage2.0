<template>
  <div class="instagram">
    <center>
      <h1>Instagram</h1>
    </center>
    <center>
      <v-slide-group
        v-model="model"
        class="pa-4"
        id="slide-group"
        active-class="success"
        show-arrows
      >
        <v-slide-item
          v-for="post in instagramPost.data.data"
          :key="post.id"
          height="200px"
          @click="redirect(post.media_url)"
        >
          <img
            @click="redirect(post.permalink)"
            :src="
              post.media_type == 'IMAGE' ? post.media_url : post.thumbnail_url
            "
            alt=""
          />
        </v-slide-item>
      </v-slide-group>
    </center>
    <div class="btn">
      <center>
        <v-btn color="orange" @click="redirect('https://www.instagram.com/t.j._2.0/')"> @t.j._2.0 </v-btn>
      </center>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    redirect(link) {
      window.location = link;
    },
  },
  data() {
    return {
      instagramPost: [],
    };
  },
  async created() {
    try {
      axios
        .get("https://v1.nocodeapi.com/tdphill0304/instagram/RvlwSiBQhBAtglDz")
        .then((response) => (this.instagramPost = response));
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style>
.instagram {
  background-color: rgb(118, 46, 93);
  padding: 0;
}
#slide-group {
  width: 90% !important ;
}

.btn {
  padding: 30px;
}
</style>