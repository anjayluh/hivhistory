<template>
  <div>
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
            <h1>{{ selectedItem.title }}.</h1>
            <h6 class="uppercase error">{{ selectedItem.chapter }}</h6>
            <h2>
              The disease now has a name, "slim"
            </h2>
            <p class="mb-2">
              There was a time when a strange diseas crept the borders of
              Uganda. Many didn't know how or where such a painful deaths were
              coming from. Perhaps people were being cursed? Peraps the war in
              Tanzania had infected people on their path? In this moment of the
              unknown people would see their loved ones wasting away, becoming
              slim until there were no more.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              cursus sollicitudin odio nec auctor. Nullam condimentum tincidunt
              turpis at accumsan. Nunc sit amet urna ut nibh vulputate gravida
              quis eget urna. In tincidunt vulputate nulla et sollicitudin. Duis
              non varius purus. Proin bibendum, ipsum sit amet tristique
              hendrerit, tortor nunc lobortis neque, id pulvinar sapien turpis
              mattis erat.
            </p>
          </div>
        </div>
        <div class="center-piece">
          <div class="gallery mr-4 top">
            <v-img :src="gallery" alt="gallery"></v-img>
          </div>
          <div class="gallery">
            <v-img :src="outthere" alt="out there full story"></v-img>
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
    <footer class="footer mb-5">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce cursus
        sollicitudin odio nec auctor. Nullam condimentum tincidunt turpis at
        accumsan. Nunc sit amet urna ut nibh vulputate gravida quis eget urna.
        In tincidunt vulputate nulla et sollicitudin. Duis non varius purus.
        Proin bibendum, ipsum sit amet tristique hendrerit, tortor nunc lobortis
        neque, id pulvinar sapien turpis mattis erat.
      </p>
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
  components: {},
  data() {
    return {
      gallery: require("@/assets/img/gallery.png"),
      outthere: require("@/assets/img/out-there-2.png"),
      selectedItem: this.$route.params,
    };
  },
  created() {},
  mounted() {},
  updated() {},
  watch: {},
  methods: {},
};
</script>

<style scoped>
h1 {
  margin-top: -21px;
}
footer {
  width: 70%;
  margin-top: 55px;
}
</style>
