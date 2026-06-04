<template>
  <section class="section-menu page-section">
    <v-container>
      <div class="section-header">
        <v-chip color="secondary" variant="tonal" size="small" class="mb-4">избранное</v-chip>
        <h2 class="section-title">Любимые<br /><em>напитки</em></h2>
        <p class="section-sub">Сохранено в Vuex и localStorage ({{ favoriteCount }})</p>
      </div>

      <v-row v-if="favoriteDrinks.length">
        <v-col
          v-for="item in favoriteDrinks"
          :key="item.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card color="surface" rounded="0" border="opacity-10">
            <router-link
              :to="{ name: 'drink-detail', params: { category: item.category, slug: item.slug } }"
              class="menu-card text-decoration-none"
            >
              <div class="menu-card-emoji">{{ item.emoji }}</div>
              <v-card-title class="menu-card-title">{{ item.name }}</v-card-title>
              <v-card-text class="menu-card-desc">{{ item.desc }}</v-card-text>
            </router-link>
            <v-card-actions class="px-4 pb-4">
              <span class="menu-price">{{ item.price }} ₽</span>
              <v-spacer />
              <v-btn
                icon
                size="small"
                color="red"
                @click="toggleFavorite(item)"
              >
                <v-icon>mdi-heart</v-icon>
              </v-btn>
              <v-btn icon size="small" color="primary" @click="addToCart(item)">
                <v-icon>mdi-cart-plus</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div v-else class="text-center">
        <p class="section-sub mb-4">Пока пусто. Нажмите ♥ в меню.</p>
        <v-btn :to="{ name: 'menu-category', params: { category: 'espresso' } }" color="primary">
          Перейти в меню
        </v-btn>
      </div>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const favoriteDrinks = computed(() => store.getters['favorites/favoriteDrinks'])
const favoriteCount = computed(() => store.getters['favorites/count'])

function toggleFavorite(item) {
  store.dispatch('favorites/toggleFavorite', item)
}

function addToCart(item) {
  store.dispatch('cart/addToCart', item)
}
</script>
