<template>
    <div class="page-content">
      <main>
        <div class="previous">
          <div class="icons">
            <v-icon>keyboard_backspace</v-icon>
            <v-icon>remove</v-icon>
            <v-icon>remove</v-icon>
          </div>
        </div>
        <section class="main-content flex-column">
          <div class="flex-row top-row">
            <div class="highlight mr-3">
              <div class="maximize"></div>
            </div>
            <div class="description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus sollicitudin odio nec auctor. Nullam condimentum tincidunt turpis at accumsan. Nunc sit amet urna ut nibh vulputate gravida quis eget urna. In tincidunt vulputate nulla et sollicitudin.
              </p>
              <span class="more">
                <v-icon class="mr-2">slideshow</v-icon> <span class="error">Watch Video</span>
              </span>
            </div>
          </div>
          <div class="center-piece">
            <div class="gallery">
              <v-img :src="outthere" alt="out there"></v-img>
            </div>
            <div class="headings flex-column mt-2">
              <h1 class="intro">
                <v-icon class="remove-icon">remove</v-icon>
                <v-icon class="remove-icon">remove</v-icon>
                <v-icon class="maximize-icon mr-2">maximize</v-icon>
                <span class="year error">1968.</span>
              </h1>
              <h2>
                The disease now has a name, "slim"
              </h2>
              <p>
                "A neighbour and later her boyfriend die in Makindye after suffer-ing from a strange disease"<br/>
                The disease now has a name people got "Slim." People got thinner and died
              </p>
              <p>
                Ut wisi enim and minim veniam, quis nostrud exerci tation ullamcorper suscript lobortis nisl ut a liquip ex ea commodo consequat. Duis autem vel eum iriure dolor i
              </p>
            </div>
          </div>
          
        </section>
        <div class="next">
          <div class="icons">
            <v-icon>remove</v-icon>
            <v-icon>remove</v-icon>
            <v-icon>$vuetify.icons.East</v-icon>
          </div>
        </div>
      </main>
      <div class="graph">
        <v-img :src="graph" alt="graph"></v-img>
      </div>
      <footer class="footer">
        <i class="fa fa-facebook social mr-4"></i>
        <i class="fa fa-twitter social mr-4"></i>
        <i class="fa fa-group social"></i>
      </footer>
    </div>
</template>
<script>
import sharedMethodsMixin from "@/mixins/sharedMethodsMixin";
import { mask } from "vue-the-mask";

export default {
  name: "Timeline",
  mixins: [sharedMethodsMixin],
  directives: {
    mask,
  },
  components: {
  },
  data() {
    return {
      outthere: require('@/assets/img/out-there.png'),
      graph: require('@/assets/img/stats.png')
    };
  },
  created() {
  },
  mounted() {},
  updated() {},
  watch: {
  },
  methods: {
  },
};
</script>

<style scoped>
</style>
