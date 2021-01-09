<template>
  <div id="app">
    <div id="wrapper">
      <nav-bar />
      <div class="gray-bg" id="page-wrapper">
        <keep-alive>
          <router-view ref="component" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
/* eslint-disable */
import sharedMethodsMixin from "@/mixins/sharedMethodsMixin";
import NavBar from "@/components/NavBar.vue";
import { correctHeight, detectBody } from "./utils/app.helper";

export default {
  name: "home",
  mixins: [sharedMethodsMixin],
  data() {
    return {
    };
  },
  components: {
    NavBar,
  },
  created() {
  },
  beforeMount() {
  },
  watch: {
  },
  mounted() {
   
  },
  updated() {
  },
  methods: {
  },
  beforeDestroy() {
  },
};
</script>

<style>
</style>
