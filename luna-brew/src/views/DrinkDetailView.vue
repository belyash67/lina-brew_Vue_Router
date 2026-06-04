<template>
  <v-row v-if="drink" justify="center">
    <v-col cols="12" md="8">
      <v-btn
        variant="text"
        color="primary"
        class="mb-4"
        prepend-icon="mdi-arrow-left"
        :to="{ name: 'menu-category', params: { category } }"
      >
        Назад к {{ categoryLabel }}
      </v-btn>
      <v-card color="surface" rounded="0" border="opacity-20" class="pa-6 pa-md-10">
        <div class="drink-detail-emoji mb-4">{{ drink.emoji }}</div>
        <h2 class="section-title mb-2">{{ drink.name }}</h2>
        <p class="menu-card-origin mb-4">{{ drink.origin }}</p>
        <p class="concept-text mb-6">{{ drink.desc }}</p>
        <v-chip
          :color="phaseColor(drink.phase)"
          variant="tonal"
          class="mb-6"
          label
        >
          {{ drink.phase }} {{ drink.phaseLabel }}
        </v-chip>
        <div class="drink-detail-price mb-6">{{ drink.price }} ₽</div>
        <v-btn color="primary" size="large" rounded="0" @click="openOrder">
          Забронировать дегустацию
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
  <v-row v-else justify="center">
    <v-col cols="12" md="6" class="text-center">
      <p class="section-sub mb-4">Напиток не найден</p>
      <v-btn :to="{ name: 'menu-category', params: { category: 'espresso' } }" color="primary">
        В меню
      </v-btn>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { findDrink } from '../data/menu.js'
import { useOrder } from '../composables/useOrder.js'

const props = defineProps({
  category: { type: String, required: true },
  slug: { type: String, required: true },
})

const router = useRouter()
const { openOrder } = useOrder()

const drink = computed(() => findDrink(props.category, props.slug))

const categoryLabel = computed(() => {
  const labels = {
    espresso: 'эспрессо',
    filter: 'фильтру',
    alternative: 'альтернативе',
    tea: 'чаю',
  }
  return labels[props.category] ?? 'меню'
})

watch(drink, (value) => {
  if (!value) {
    router.replace({ name: 'not-found' })
  }
}, { immediate: true })

function phaseColor(phase) {
  if (phase === '🌑') return 'secondary'
  if (phase === '🌒') return 'primary'
  return 'accent'
}
</script>
