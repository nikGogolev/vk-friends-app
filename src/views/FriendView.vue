<template>
  <div v-if="authorized">
    <router-link to="/" class="home_link">Назад</router-link>
    <h1>{{ friend?.first_name }}, {{ friend?.last_name }}</h1>
    <img :src="friend?.photo_100" alt="friend photo" />
    <h2 v-if="friendList.length">Друзья</h2>
    <div class="friend_view-friend_list">
      <template v-for="friend in friendList" :key="friend.id">
        <friend-card :friend="friend" />
      </template>
    </div>
    <h2 v-if="posts.length">Посты</h2>
    <div
      class="friend-posts"
      v-for="post in this.posts.filter(
        (post) =>
          typeof post.attachment === 'undefined' ||
          post.attachments.some((attachment) => attachment.type === 'photo')
      )"
      :key="post.id"
    >
      <user-post :post="post"></user-post>
    </div>
    <button @click="getPosts" v-if="posts.length" class="more-button">
      Загрузить еще
    </button>
  </div>
</template>

<script>
import store from "@/store";
import FriendCard from "@/components/FriendCard.vue";
import { VK_URL } from "@/utils";
import { jsonp } from "vue-jsonp";
import UserPost from "@/components/UserPost.vue";

export default {
  name: "FriendView",
  async created() {
    await this.getPosts();
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    friendList() {
      return store.getters.getMyFriendsById(+this.$route.params.id);
    },
    friend() {
      return store.getters.getFriendById(+this.$route.params.id);
    },
    authorized() {
      return store.getters.getAuthorizedStatus;
    },
  },
  data() {
    return {
      apiKey: "",
      posts: [],
    };
  },
  methods: {
    setError(errorText) {
      this.$emit("error", errorText);
    },
    async getPosts() {
      try {
        this.apiKey = store.getters.getApiKey;
        const requestURL = `${VK_URL}/wall.get?owner_id=${this.friend["id"]}&offset=${this.posts.length}&access_token=${this.apiKey}&v=5.131`;
        const data = await jsonp(requestURL);
        if (data.response) {
          this.posts = [...this.posts, ...data.response.items];
        }
        if (data.error) {
          this.$emit("error", data.error.error_msg);
        }
      } catch (error) {
        this.$emit("error", error.message || error.statusText);
      }
    },
  },
  watch: {
    async id() {
      if (this.$route.params["id"]) {
        this.posts = [];
        await this.getPosts();
      }
    },
  },
  components: { FriendCard, UserPost },
};
</script>
<style>
.friend_view-friend_list {
  width: 50%;
  margin: 0 auto;
}
.friend-posts {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border: 1px solid cornflowerblue;
  padding: 10px;
  margin-bottom: 20px;
}
.home_link {
  color: white;
  background-color: cornflowerblue;
  text-decoration: none;
  padding: 5px 20px;
}
</style>
