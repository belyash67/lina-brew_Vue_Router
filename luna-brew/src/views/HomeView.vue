<template>
  <section class="hero-section">
    <div class="hero-bg">
      <div class="moon-glow"></div>
      <div class="star star-1"></div>
      <div class="star star-2"></div>
      <div class="star star-3"></div>
      <div class="star star-4"></div>
      <div class="star star-5"></div>
      <div class="coffee-steam"></div>
    </div>
    <v-container class="hero-content">
      <v-chip
        color="primary"
        variant="outlined"
        size="small"
        class="mb-6"
        prepend-icon="mdi-moon-waning-crescent"
      >
        {{ currentPhase.name }} — {{ currentPhase.hint }}
      </v-chip>
      <h1 class="hero-title">
        Кофе,<br />
        <em>заваренный</em><br />
        по звёздам
      </h1>
      <p class="hero-subtitle">
        Каждый напиток — по фазе луны.<br />
        Каждая обжарка — по лунному календарю.
      </p>
      <div class="hero-actions">
        <v-btn
          color="primary"
          size="large"
          class="hero-btn-main"
          prepend-icon="mdi-coffee"
          @click="openOrder"
        >
          Забронировать стол
        </v-btn>
        <router-link
          :to="{ name: 'menu-category', params: { category: 'espresso' } }"
          class="text-decoration-none"
        >
          <v-btn
            variant="text"
            color="accent"
            size="large"
            append-icon="mdi-arrow-down"
          >
            Смотреть меню
          </v-btn>
        </router-link>
      </div>
      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-value">{{ stat.value }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </v-container>
    <div class="moon-phase-bar">
      <button
        v-for="phase in moonPhases"
        :key="phase.key"
        type="button"
        class="phase-item phase-btn"
        :class="{ active: phase.active }"
        @click="setPhase(phase.key)"
      >
        <span class="phase-icon">{{ phase.icon }}</span>
        <span class="phase-name">{{ phase.name }}</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { stats } from '../data/site.js'

const store = useStore()

const currentPhase = computed(() => store.getters['moon/currentPhase'])
const moonPhases = computed(() => store.getters['moon/phasesWithActive'])

function openOrder() {
  store.dispatch('booking/openOrder')
}

function setPhase(key) {
  store.dispatch('moon/setPhase', key)
}
</script>
