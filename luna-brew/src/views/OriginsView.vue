<template>
  <section class="section-origins page-section">
    <v-container>
      <div class="section-header">
        <v-chip color="primary" variant="tonal" size="small" class="mb-4">происхождение</v-chip>
        <h2 class="section-title">Зерно из трёх<br /><em>континентов</em></h2>
      </div>
      <v-row>
        <v-col v-for="origin in origins" :key="origin.country" cols="12" md="4">
          <v-card class="origin-card" color="surface" rounded="0" border="opacity-10">
            <div class="origin-flag">{{ origin.flag }}</div>
            <v-card-title class="origin-country">{{ origin.country }}</v-card-title>
            <v-card-subtitle class="origin-region">{{ origin.region }}</v-card-subtitle>
            <v-card-text>
              <v-list dense color="transparent">
                <v-list-item
                  v-for="note in origin.notes"
                  :key="note"
                  :title="note"
                  density="compact"
                  class="px-0"
                >
                  <template #prepend>
                    <v-icon color="primary" size="small">mdi-circle-small</v-icon>
                  </template>
                </v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions class="px-4 pb-4">
              <v-chip color="primary" variant="outlined" size="small" label>
                {{ origin.phase }}
              </v-chip>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { origins } from '../data/site.js'
</script>
