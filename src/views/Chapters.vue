<template>
  <div class="page-content">
    <main>
      <div class="previous"></div>
      <section class="main-content flex-column">
        <div class="flex-row top-row">
          <div class="highlight mr-3">
            <div class="maximize"></div>
          </div>
          <div class="description">
            <h1>
              Chapters.
            </h1>
            <h6 class="uppercase error">All Chapters</h6>
            <p>
              Ut wisi enim and minim veniam, quis nostrud exerci tation
              ullamcorper suscript lobortis nisl ut a liquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor i
            </p>
          </div>
        </div>
        <div class="center-piece">
          <v-row no-gutters class="mb-5">
            <v-flex xs12 lg12 class="today-wrapper">
              <v-container class="pa-1" fluid>
                <v-row class="content-card">
                  <v-col
                    cols="12"
                    sm="12"
                    md="6"
                    lg="5"
                    xl="4"
                    v-for="(item, index) in allItems"
                    :key="index"
                    @click="showDetails(item)"
                  >
                    <v-card flat class="mini-card text-center">
                      <v-card-text>
                        <div class="card-header-text">{{ item.name }}.</div>
                        <h6 class="uppercase error">{{ item.chapter }}</h6>
                      </v-card-text>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-flex>
          </v-row>
        </div>
      </section>
    </main>
  </div>
</template>
<script>
import sharedMethodsMixin from "@/mixins/sharedMethodsMixin";
import { mask } from "vue-the-mask";

export default {
  name: "Chapters",
  mixins: [sharedMethodsMixin],
  directives: {
    mask,
  },
  components: {},
  data() {
    return {
      outthere: require("@/assets/img/out-there.png"),
      graph: require("@/assets/img/stats.png"),

      allItems: [
        { name: "Unknown", chapter: "Chapter I" },
        { name: "Knowing", chapter: "Chapter II" },
        { name: "Beliving", chapter: "Chapter III" },
        { name: "Caring", chapter: "Chapter IV" },
        { name: "Treating", chapter: "Chapter V" },
        { name: "Surviving", chapter: "Chapter VI" },
        { name: "Remembering", chapter: "Chapter VII" },
        { name: "Testing", chapter: "Chapter VIII" },
        { name: "Testing", chapter: "Chapter IX" },
      ],
    };
  },
  created() {},
  mounted() {},
  updated() {},
  watch: {},
  methods: {
    showDetails(item) {
      this.$router.push({
        name: "timeline-details",
        params: { title: item.name, chapter: item.chapter },
      });
    },
  },
};
</script>

<style scoped>
h1 {
  margin-top: -21px;
}
.mini-card h6 {
  padding-top: 14px;
}
main .main-content {
  width: 90%;
  margin-left: unset;
}
.center-piece {
  margin-right: auto;
}
.mini-card.v-card:hover,
.mini-card.v-card:focus,
.mini-card.v-card:active {
  border: 1px solid #b5b5b5;
  border-right: 0px;
}
</style>
