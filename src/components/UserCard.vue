<template>
  <div class="user-card">
    <img :src="user['imgUrl']" alt="user photo" class="user-card-img" />
    <div class="user-card-description">
      <h2 class="user-card-description-header">
        {{ user["name"] }}, {{ user["surname"] }}
      </h2>
      <p class="user-card-description-text">
        {{ user["isFriend"] ? "Is my friend" : "Not my friend" }}
      </p>
    </div>
    <button
      @click.stop="removeUser(user['id'])"
      class="user-card-delete_button"
    >
      X
    </button>
  </div>
</template>

<script>
import { REMOVE_USER } from "@/store/mutationTypes";
import store from "@/store";
export default {
  name: "UserCard",
  methods: {
    removeUser(id) {
      store.commit(REMOVE_USER, id);
    },
  },
  props: {
    user: { type: Object, required: true },
  },
};
</script>

<style>
.user-card {
  display: flex;
  margin: 0 auto;
  cursor: pointer;
  width: 100%;
  border: 1px solid black;
  align-items: center;
  margin: 5px auto;
  background-color: cornflowerblue;
  position: relative;
}
.user-card-img {
  width: 50px;
  height: 50px;
  margin: 10px;
}
.user-card-description {
  display: flex;
  flex-direction: column;
  align-items: start;
  font-size: 1em;
}
.user-card-description-header {
  margin: 5px 5px 10px;
  font-size: 1em;
}
.user-card-description-text {
  margin: 5px;
}
.user-card-delete_button {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
