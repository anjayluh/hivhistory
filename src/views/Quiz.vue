<template>
    <div class="page-content">
      <div class="row wrapper border-bottom white-bg page-heading" v-if="$route.name === 'contacts'">
      </div>
      <div class="wrapper wrapper-content list contacts" v-if="$route.name === 'contacts'">
          <v-card flat class="mb-5 table">
              <v-data-table :headers="headers" :items="allItems" sort-by="name"
                            class="elevation-1 hover-table" :items-per-page="10"
                            :loading="loadTable" loading-text="Loading... Please wait"
                            hide-default-footer @click:row="handleRowClick">
                  <template v-slot:item.name="{ item }">
                      <span>
                          {{getFullName( item.firstName, item.middleName, item.lastName)}}
                      </span>
                  </template>
                  <template v-slot:item.phones="{ item }">
                      <span v-if="item.phones.length > 0">
                          <span v-if="item.phones[0].number === null || item.phones[0].number === ''">
                              -
                          </span>
                          <span v-else>
                            {{arrangePhoneNumber(getPhoneNumber(item.phones, "Primary"))}}
                          </span>
                      </span>
                      <span v-else> - </span>
                  </template>
                  <template v-slot:item.cooperative="{ item }">
                      <span v-if="item.cooperative">
                        {{item.cooperative.name}}
                      </span>
                      <span v-else>-</span>
                  </template>
                  <template v-if="loadTable" v-slot:progress>
                      <v-progress-linear :height="10" indeterminate class="table-loader">
                      </v-progress-linear>
                  </template>
                  <template v-slot:no-data>
                      <span v-if="filter.name || filter.selectedCooperative || filter.selectedBranch">
                          <p class="mt-3">No matching records found</p>
                      </span>
                      <span v-else>
                          <p class="mt-3">No contacts found</p>
                      </span>
                  </template>
                  <template v-slot:footer>
                      <v-divider class="mt-0"></v-divider>
                      <v-row class="table-footer" no-gutters>
                      </v-row>
                  </template>
              </v-data-table>
          </v-card>
          <v-card flat class="mb-5 filter">
            <h5 class="filter-title col-sm-12">
              Filter
            </h5>
            <div class="filter-form col-lg-12 col-md-12 col-sm-12">
              <v-form role="form">
                <v-flex xs12 sm12 md12 mb-3>
                    <v-text-field v-model="filter.name" outlined label="Name"  autocomplete="off" @keyup.enter="handleFilter">
                    </v-text-field>
                </v-flex>
                <v-flex xs12 sm12 md12 mb-3>
                  <v-select class="" outlined flat label="Cooperative" :items="fetchedCooperatives"
                            v-model="filter.selectedCooperative" item-text="name" item-value="id"
                            append-icon="$vuetify.icons.dropdowndown" :loading="loadCoopsSpinner">
                </v-select>
                </v-flex>
                  <v-flex xs12 sm12 md12 mb-3>
                    <v-select class="" outlined flat label="Branch" :items="fetchedBranches"
                              v-model="filter.selectedBranch" item-text="name" item-value="id"
                              persistent-hint hint="Select the branch that the farmer belongs to"
                              append-icon="$vuetify.icons.dropdowndown"
                              :disabled="!filter.selectedCooperative || filter.selectedCooperative === 'All'"
                              :loading="loadBranchesSpinner">
                    </v-select>
                </v-flex>
                  <v-flex xs12 sm12 md12 text-right>
                      <v-btn depressed right small class="table-btn" @click="handleFilter">
                      Apply
                  </v-btn>
                  </v-flex>
              </v-form>
            </div>
          </v-card>
      </div>
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
  components: {
  },
  data() {
    return {
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
