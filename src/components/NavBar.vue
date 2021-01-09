<template>
  <div class="flex-row nav-menu">
    <div class="logo-element">
      <img class="main-logo" src="../assets/img/logo.png" alt="logo">
    </div>
    <div class="flex-row main-items">
      <router-link tag="li" :to="{ name: 'timeline'}" exact>
        <a>
          <span class="nav-label">Timeline</span>
        </a>
      </router-link>
      <router-link tag="li" :to="{ name: 'chapters'}" exact>
        <a>
          <span class="nav-label">The Chapters</span>
          <v-icon>expand_more</v-icon>
        </a>
      </router-link>
      <router-link tag="li" :to="{ name: 'about'}" exact>
        <a>
          <span class="nav-label">About the project</span>
          <v-icon>expand_more</v-icon>
        </a>
      </router-link>
      <router-link tag="li" :to="{ name: 'quiz'}" exact>
        <a>
          <span class="nav-label">Online Quiz</span>
        </a>
      </router-link>
    </div>
    <div class="right contact">
      <router-link tag="li" :to="{ name: 'contact'}" exact>
        <a>
          <span class="nav-label">Contact Us</span>
        </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import sharedMethodsMixin from "@/mixins/sharedMethodsMixin";

export default {
  name: "NavBar",
  mixins: [sharedMethodsMixin],
  components: {},
  data() {
    return {
      isOpen: true,
    };
  },
  mounted() {},
  updated() {},
  computed: {},
  watch: {},
  methods: {
  },
};
</script>

<style scoped>
</style>
