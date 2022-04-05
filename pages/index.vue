<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card :loading="loading">
          <v-card-title>Public groups</v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item
                v-for="group in publicGroups"
                :key="group.name"
                :to="`/groups/${group.name}`"
                link
                nuxt
                two-line
              >
                <v-list-item-content>
                  <v-list-item-title>{{group.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{group.description}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {ServerConnection} from '@/utils/protocol';

export default {
  name: 'IndexPage',
  data() {
    return {
      loading: false,
      publicGroups: [],
    };
  },
  async mounted() {
    console.log(this.$galene);

    this.loading = true;
    const result = await fetch('https://cors-anywhere.herokuapp.com/https://galene.org:8443/public-groups.json');
    const data = await result.json();
    this.publicGroups = data;
    this.loading = false;
  }
}
</script>
