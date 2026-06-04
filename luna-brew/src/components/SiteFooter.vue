<template>
  <v-footer class="footer-custom" color="#050403">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <router-link :to="{ name: 'home' }" class="footer-logo-link">
            <div class="footer-logo mb-2">LUNA BREW</div>
          </router-link>
          <div class="footer-tagline">☽ Кофе по лунному календарю</div>
          <p class="footer-address mt-3">
            Москва, ул. Пречистенка, 17<br />
            Ежедневно: 8:00 — 23:00
          </p>
        </v-col>
        <v-col cols="6" md="2" offset-md="2">
          <div class="footer-col-title">Меню</div>
          <router-link
            v-for="cat in menuLinks"
            :key="cat.id"
            :to="{ name: 'menu-category', params: { category: cat.id } }"
            class="footer-link d-block"
          >
            {{ cat.label }}
          </router-link>
        </v-col>
        <v-col cols="6" md="2">
          <div class="footer-col-title">О нас</div>
          <div v-for="link in footerAbout" :key="link" class="footer-link">{{ link }}</div>
        </v-col>
        <v-col cols="12" md="2">
          <div class="footer-col-title">Соцсети</div>
          <div class="d-flex ga-2 mt-2">
            <v-btn icon="mdi-instagram" variant="text" color="primary" size="small" />
            <v-btn icon="mdi-telegram" variant="text" color="primary" size="small" />
            <v-btn icon="mdi-vk" variant="text" color="primary" size="small" />
          </div>
        </v-col>
      </v-row>
      <v-divider color="rgba(200,169,110,0.15)" class="my-6" />
      <div class="footer-bottom">
        <span>© 2025 LUNA BREW. Все права защищены.</span>
        <span class="footer-phase">Сейчас: Растущая луна 🌒</span>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup>
import { footerAbout } from '../data/site.js'

const menuLinks = [
  { id: 'espresso', label: 'Эспрессо' },
  { id: 'filter', label: 'Фильтр' },
  { id: 'alternative', label: 'Альтернатива' },
  { id: 'tea', label: 'Чай и не-кофе' },
]
</script>
