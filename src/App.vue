<template>
  <router-view />
</template>

<script>
import store from "./store";
import { LOAD_FRIENDS } from "./store/mutationTypes";
export default {
  created() {
    store.commit(LOAD_FRIENDS);
    // window.location.href =
    //   "https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://localhost:8080&scope=friends&response_type=token&v=5.131&state=123456";
    // router.(
    //   "https://oauth.vk.com/authorize?client_id=1&display=page&redirect_uri=http://localhost:8080&scope=friends&response_type=token&v=5.131&state=123456"
    // );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
