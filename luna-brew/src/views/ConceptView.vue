<template>
  <section class="section-concept page-section">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="5" class="text-center text-md-left">
          <v-chip color="secondary" variant="tonal" class="mb-4" size="small">
            наша философия
          </v-chip>
          <h2 class="section-title">Луна<br />влияет<br /><em>на всё</em></h2>
        </v-col>
        <v-col cols="12" md="6" offset-md="1">
          <p class="concept-text">
            Фермеры, следующие лунным календарям, собирают урожай зерна
            в определённые дни — и вкус кофе меняется. Мы верим в это
            и подбираем обжарку, помол и рецептуры под текущую фазу луны.
          </p>
          <v-row class="mt-6" dense>
            <v-col v-for="principle in principles" :key="principle.title" cols="12" sm="6">
              <v-card
                color="surface"
                class="principle-card pa-4"
                border="opacity-20"
                rounded="0"
              >
                <div class="principle-icon mb-2">{{ principle.icon }}</div>
                <div class="principle-title">{{ principle.title }}</div>
                <div class="principle-desc">{{ principle.desc }}</div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { principles } from '../data/site.js'
</script>
