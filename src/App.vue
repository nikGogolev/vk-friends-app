<template>
  <error-modal @close="error = false" v-if="error"
    ><template v-slot:header>
      <h2>{{ errorText }}</h2>
    </template>
    <template v-slot:body> </template>
    <template v-slot:footer v-if="!authorized">
      <a :href="authURL" class="auth_button">Авторизоваться</a>
    </template>
  </error-modal>
  <router-view @error="(errorText) => setError(errorText)" />
</template>

<script>
import ErrorModal from "./components/ErrorModal.vue";
import store from "./store";
import { AUTHORIZED, LOAD_USERS, STORE_APIKEY } from "./store/mutationTypes";
import { AUTH_URL } from "./utils";
export default {
  components: { ErrorModal },
  data() {
    return { authURL: AUTH_URL, error: false, errorText: "" };
  },
  methods: {
    setError(errorText) {
      this.error = true;
      this.errorText = errorText;
    },
  },
  computed: {
    authorized() {
      return store.getters.getAuthorizedStatus;
    },
  },
  created() {
    store.commit(LOAD_USERS);
    const hash = new URL(document.location).hash;
    if (hash.includes("#access_token")) {
      const token = hash.substring(
        hash.indexOf("#access_token=") + "#access_token=".length,
        hash.indexOf("&expires_in")
      );
      store.commit(STORE_APIKEY, token);
      store.commit(AUTHORIZED);
      this.error = false;
    } else {
      this.setError("Вы не авторизованы. Авторизуйтесь, перейдя по ссылке");
    }
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
.auth_button {
  display: block;
  padding: 3px;
  text-decoration: none;
  color: #ffffff;
  background-color: cornflowerblue;
  border: 1px solid white;
}
</style>
