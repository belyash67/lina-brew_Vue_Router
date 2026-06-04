<template>
  <section class="section-menu page-section">
    <v-container>
      <div class="section-header">
        <v-chip color="primary" variant="tonal" size="small" class="mb-4">меню</v-chip>
        <h2 class="section-title">Напитки фазы</h2>
        <p class="section-sub">{{ menuSubtitle }}</p>
      </div>

      <v-tabs
        :model-value="activeCategory"
        color="primary"
        align-tabs="center"
        class="menu-tabs mb-8"
        @update:model-value="onTabChange"
      >
        <v-tab
          v-for="cat in menuCategories"
          :key="cat.id"
          :value="cat.id"
          :to="{ name: 'menu-category', params: { category: cat.id } }"
        >
          {{ tabLabels[cat.id] }}
        </v-tab>
      </v-tabs>

      <router-view />
    </v-container>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { menuCategories } from '../data/menu.js'

const route = useRoute()
const router = useRouter()
const store = useStore()

const menuSubtitle = computed(() => store.getters['moon/menuSubtitle'])

const tabLabels = {
  espresso: 'Эспрессо',
  filter: 'Фильтр',
  alternative: 'Альтернатива',
  tea: 'Чай & не-кофе',
}

const activeCategory = computed(() => route.params.category || 'espresso')

function onTabChange(category) {
  if (route.params.slug) {
    router.push({ name: 'menu-category', params: { category } })
  }
}
</script>
