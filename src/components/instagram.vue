<template>
  <div class="instagram">
    <center>
      <h1>Instagram</h1>
    </center>
    <center>
        <v-slide-group
          v-model="slide"
          class="pa-4"
          id="slide-group"
          active-class="success"
          prev-icon="mdi-minus"
          next-icon="mdi-plus"
          show-arrows
        >
          <v-slide-item
            v-for="post in instagramPost"
            :key="post.id"
            id="slide-item"
            @click="redirect(post.media_url)"
          >
            <img
              @click="redirect(post.permalink)"
              :src="
                post.media_type == 'IMAGE' ||
                post.media_type == 'CAROUSEL_ALBUM'
                  ? post.media_url
                  : post.thumbnail_url
              "
              alt=""
            />
          </v-slide-item>
        </v-slide-group>
    </center>
    <div class="btn">
      <center>
        <v-btn
          color="orange"
          @click="redirect('https://www.instagram.com/t.j._2.0/')"
        >
          @t.j._2.0
        </v-btn>
      </center>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  doc,
  getFirestore,
  setDoc,
  onSnapshot,
  collection,
} from "firebase/firestore";
export default {
  methods: {
    redirect(link) {
      window.location = link;
    },

    async updateInstagram() {
      try {
        axios
          .get("https://v1.nocodeapi.com/tj20/instagram/OSmDoGbQOLFQQPBD")
          .then((response) => {
            this.instagramPost = response;
            if (this.instagramPost.data.data.length !== 0) {
              this.instagramPost.data.data.forEach(async (post) => {
                await setDoc(doc(this.db, "post", post.id), {
                  id: post.id,
                  media_url: post.media_url,
                  media_type: post.media_type,
                  permalink: post.permalink,
                  thumbnail_url:
                    typeof post.thumbnail_url !== "undefined"
                      ? post.thumbnail_url
                      : "",
                  timestamp: post.timestamp,
                }).then(() => {});
              });
            }
          });
      } catch (e) {
        console.error(e);
      }
    },
  },

  data() {
    return {
      instagramPost: [],
      db: getFirestore(),
    };
  },
  async created() {
    const colRef = collection(this.db, "post");
    onSnapshot(colRef, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        this.instagramPost.push({ ...doc.data(), id: doc.id });
      });
      this.instagramPost.sort(function (a, b) {
        if (new Date(a.timestamp) > new Date(b.timestamp)) {
          return -1;
        }
        if (new Date(a.timestamp) < new Date(b.timestamp)) {
          return 1;
        }
        return 0;
      });
    });
  },
};
</script>

<style>
.instagram {
  background-color: rgb(118, 46, 93);
  padding: 0;
}
#slide-group {
  width: 100% !important ;
  padding-left: 17px !important;
  padding-right: 17px !important;
}
#slide-item {
  width: 300px !important;
}
.v-slide-group__next{
   min-width: 20px !important;
   padding-left: 15px !important;
}

.v-slide-group__prev {
    min-width: 20px !important;
    padding-right: 15px !important;
}
.btn {
  padding: 30px;
}
</style>