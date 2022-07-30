<template>
  <div class="result_card">
    <img :src="user.photo_100" alt="photo" class="result_card-img" />
    <p class="result_card-name">{{ user.first_name }} {{ user.last_name }}</p>
  </div>
</template>

<script>
export default {
  name: "SearchResultCard",
  props: { user: { type: Object, required: true } },
};
</script>
<style>
.result_card {
  display: flex;
  margin: 5px auto;
  align-items: center;
  max-width: 300px;
  border: 1px solid black;
  cursor: pointer;
}
.result_card:hover {
  background-color: cornflowerblue;
}

.result_card-img {
  width: 50px;
  height: 50px;
  margin: 5px;
}
</style>
