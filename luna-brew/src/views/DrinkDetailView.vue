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
        <div class="d-flex flex-wrap ga-2">
          <v-btn color="primary" size="large" rounded="0" @click="addToCart">
            В корзину
          </v-btn>
          <v-btn
            :color="isFavorite ? 'red' : 'primary'"
            size="large"
            variant="outlined"
            rounded="0"
            @click="toggleFavorite"
          >
            <v-icon start>{{ isFavorite ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
            {{ isFavorite ? 'В избранном' : 'В избранное' }}
          </v-btn>
          <v-btn color="primary" variant="text" size="large" rounded="0" @click="openOrder">
            Забронировать дегустацию
          </v-btn>
        </div>
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
import { useStore } from 'vuex'
import { findDrink } from '../data/menu.js'

const props = defineProps({
  category: { type: String, required: true },
  slug: { type: String, required: true },
})

const router = useRouter()
const store = useStore()

const drink = computed(() => findDrink(props.category, props.slug))

const isFavorite = computed(() =>
  drink.value ? store.getters['favorites/isFavorite'](drink.value.id) : false,
)

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

function addToCart() {
  if (drink.value) store.dispatch('cart/addToCart', drink.value)
}

function toggleFavorite() {
  if (drink.value) store.dispatch('favorites/toggleFavorite', drink.value)
}

function openOrder() {
  store.dispatch('booking/openOrder')
}
</script>
