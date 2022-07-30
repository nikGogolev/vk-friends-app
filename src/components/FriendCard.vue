<template>
  <div
    class="friend-card"
    @click="navigateToFriend"
    :style="{ filter: `brightness(${brightness}%)` }"
  >
    <img :src="friend['imgUrl']" alt="friend photo" class="friend-card-img" />
    <div class="friend-card-description">
      <h2 class="friend-card-description-header">
        {{ friend["name"] }}, {{ friend["surname"] }}
      </h2>
      <p class="friend-card-description-text">
        Sex: {{ friend["sex"] === 1 ? "female" : "male" }}
      </p>
      <p class="friend-card-description-text">Age: {{ friend["age"] }}</p>
      <p class="friend-card-description-text">
        Friends amount: {{ friend["friendList"].length }}
      </p>
      <p class="friend-card-description-text">ID: {{ friend["id"] }}</p>
      <p class="friend-card-description-text">
        {{ friend["isFriend"] ? "Is my friend" : "Not my friend" }}
      </p>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "FriendCard",
  methods: {
    navigateToFriend() {
      router.push({ name: "friend", params: { id: this.friend["id"] } });
    },
  },
  props: {
    friend: { type: Object, required: true },
    brightness: { type: Number, required: false },
  },
};
</script>

<style>
.friend-card {
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  width: 100%;
  height: 200px;
  border: 1px solid black;
  align-items: center;
  margin: 10px auto;
  background-color: cornflowerblue;
}
.friend-card-img {
  width: 100px;
  height: 100px;
  margin: 20px;
}
.friend-card-description {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.friend-card-description-header {
  margin: 10px;
}
.friend-card-description-text {
  margin: 5px 10px;
}
</style>
