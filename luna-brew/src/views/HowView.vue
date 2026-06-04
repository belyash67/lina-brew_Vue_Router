<template>
  <section class="section-how page-section">
    <v-container>
      <div class="section-header">
        <v-chip color="secondary" variant="tonal" size="small" class="mb-4">процесс</v-chip>
        <h2 class="section-title">Как мы варим</h2>
      </div>
      <v-stepper
        v-model="stepperStep"
        :items="steps"
        color="primary"
        bg-color="transparent"
        class="stepper-custom"
        alt-labels
        flat
      >
        <template #item.1>
          <v-card flat color="transparent" class="stepper-content pa-4">
            <p>Мы отслеживаем лунный календарь и каждое утро составляем «карту вкусов дня» — какой профиль обжарки, какая кислотность и плотность тела будут наиболее гармоничны.</p>
          </v-card>
        </template>
        <template #item.2>
          <v-card flat color="transparent" class="stepper-content pa-4">
            <p>Наши обжарщики работают с зерном из Эфиопии, Колумбии и Йемена. Помол настраивается под сезон и фазу — иногда по 3–4 раза за день.</p>
          </v-card>
        </template>
        <template #item.3>
          <v-card flat color="transparent" class="stepper-content pa-4">
            <p>Бариста следует дневному рецепту: температура воды, давление и время экстракции рассчитаны исходя из фазы луны. Никакой самодеятельности — только система.</p>
          </v-card>
        </template>
        <template #item.4>
          <v-card flat color="transparent" class="stepper-content pa-4">
            <p>Вы получаете напиток с карточкой: фаза луны, источник зерна, профиль вкуса и рекомендованное время суток для дегустации.</p>
          </v-card>
        </template>
      </v-stepper>
    </v-container>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { steps } from '../data/site.js'

const stepperStep = ref(1)
</script>
