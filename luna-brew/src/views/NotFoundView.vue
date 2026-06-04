<template>
  <section class="page-section text-center">
    <v-container>
      <div class="section-header">
        <span class="phase-icon mb-4 d-block" style="font-size: 3rem">🌑</span>
        <h2 class="section-title">Страница<br /><em>не найдена</em></h2>
        <p class="section-sub mt-4">Маршрут ушёл в затмение. Вернитесь на главную или в меню.</p>
      </div>
      <v-btn :to="{ name: 'home' }" color="primary" class="mr-2">На главную</v-btn>
      <v-btn :to="{ name: 'menu-category', params: { category: 'espresso' } }" variant="outlined" color="primary">
        В меню
      </v-btn>
    </v-container>
  </section>
</template>
