<template>
  <h2 v-if="searchResult?.length">Search results</h2>
  <template v-for="user in searchResult" :key="user.id">
    <search-result-card :user="user" @click="addUser(user)" />
  </template>
</template>

<script>
import SearchResultCard from "./SearchResultCard.vue";
export default {
  components: { SearchResultCard },
  name: "SearchResult",
  props: {
    searchResult: { type: [], required: false },
    addUser: { type: Function, required: true },
  },
};
</script>
