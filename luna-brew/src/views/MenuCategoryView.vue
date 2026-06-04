<template>
  <v-row v-if="category">
    <v-col
      v-for="item in category.items"
      :key="item.slug"
      cols="12"
      sm="6"
      md="3"
    >
      <v-card color="surface" rounded="0" border="opacity-10" hover>
        <router-link
          :to="{ name: 'drink-detail', params: { category: props.category, slug: item.slug } }"
          class="menu-card-link"
        >
          <div class="menu-card-emoji">{{ item.emoji }}</div>
          <v-card-title class="menu-card-title">{{ item.name }}</v-card-title>
          <v-card-subtitle class="menu-card-origin">{{ item.origin }}</v-card-subtitle>
          <v-card-text class="menu-card-desc">{{ item.desc }}</v-card-text>
        </router-link>

        <v-card-actions class="px-4 pb-4 d-flex align-center">
          <v-chip
            :color="phaseColor(item.phase)"
            variant="tonal"
            size="x-small"
            label
          >
            {{ item.phase }} {{ item.phaseLabel }}
          </v-chip>

          <v-spacer />

          <span class="menu-price font-weight-medium">{{ item.price }} ₽</span>

          <v-btn
            icon
            size="small"
            color="primary"
            class="mx-1"
            @click.stop="addToCart(item)"
            title="Добавить в корзину"
          >
            <v-icon>mdi-cart-plus</v-icon>
          </v-btn>

          <v-btn
            icon
            size="small"
            :color="isFavorite(drinkPayload(item).id) ? 'red' : 'grey'"
            @click.stop="toggleFavorite(item)"
            title="В избранное"
          >
            <v-icon>{{ isFavorite(drinkPayload(item).id) ? 'mdi-heart' : 'mdi-heart-outline' }}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { menuCategories, withDrinkMeta } from '../data/menu.js'

const store = useStore()

const props = defineProps({
  category: { type: String, required: true }
})

const categoryData = computed(() =>
  menuCategories.find((c) => c.id === props.category)
)

const category = computed(() => categoryData.value)

function phaseColor(phase) {
  if (phase === '🌑') return 'secondary'
  if (phase === '🌒') return 'primary'
  return 'accent'
}

function drinkPayload(item) {
  return withDrinkMeta(props.category, item)
}

const addToCart = (item) => {
  store.dispatch('cart/addToCart', drinkPayload(item))
}

const toggleFavorite = (item) => {
  store.dispatch('favorites/toggleFavorite', drinkPayload(item))
}

const isFavorite = (id) => {
  return store.getters['favorites/isFavorite'](id)
}
</script>