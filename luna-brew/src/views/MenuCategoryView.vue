<template>
  <v-row v-if="category">
    <v-col
      v-for="item in category.items"
      :key="item.slug"
      cols="12"
      sm="6"
      md="3"
    >
      <router-link
        :to="{ name: 'drink-detail', params: { category, slug: item.slug } }"
        class="menu-card"
      >
        <v-card color="surface" rounded="0" border="opacity-10" hover>
          <div class="menu-card-emoji">{{ item.emoji }}</div>
          <v-card-title class="menu-card-title">{{ item.name }}</v-card-title>
          <v-card-subtitle class="menu-card-origin">{{ item.origin }}</v-card-subtitle>
          <v-card-text class="menu-card-desc">{{ item.desc }}</v-card-text>
          <v-card-actions class="px-4 pb-4">
            <v-chip
              :color="phaseColor(item.phase)"
              variant="tonal"
              size="x-small"
              label
            >
              {{ item.phase }} {{ item.phaseLabel }}
            </v-chip>
            <v-spacer />
            <span class="menu-price">{{ item.price }} ₽</span>
          </v-card-actions>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>

<script setup>
import { computed } from 'vue'
import { menuCategories } from '../data/menu.js'

const props = defineProps({
  category: { type: String, required: true },
})

const categoryData = computed(() =>
  menuCategories.find((c) => c.id === props.category),
)

const category = computed(() => categoryData.value)

function phaseColor(phase) {
  if (phase === '🌑') return 'secondary'
  if (phase === '🌒') return 'primary'
  return 'accent'
}
</script>
