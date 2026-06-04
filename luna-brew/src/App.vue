<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" temporary color="#0a0806">
      <div class="drawer-logo pa-6">
        <router-link :to="{ name: 'home' }" @click="drawer = false">
          <span class="logo-text">LUNA BREW</span>
        </router-link>
        <div class="logo-sub">☽ кофейня</div>
      </div>
      <v-divider color="rgba(200,169,110,0.2)" />
      <v-list nav color="transparent">
        <v-list-item
          v-for="item in navItems"
          :key="item.label"
          :to="item.to"
          :title="item.label"
          :prepend-icon="item.icon"
          color="primary"
          class="nav-drawer-item"
          @click="drawer = false"
        />
      </v-list>
      <template #append>
        <div class="pa-4">
          <v-btn block color="primary" variant="outlined" @click="drawer = false; openOrder()">
            Заказать стол
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar flat color="transparent" class="app-bar-custom" :elevation="scrolled ? 4 : 0">
      <template #prepend>
        <v-app-bar-nav-icon
          class="d-flex d-md-none"
          color="primary"
          @click="drawer = !drawer"
        />
      </template>
      <v-app-bar-title>
        <router-link :to="{ name: 'home' }" class="app-bar-logo">LUNA BREW</router-link>
      </v-app-bar-title>
      <template #append>
        <div class="d-none d-md-flex align-center ga-1 mr-4">
          <v-btn
            v-for="item in navItems"
            :key="item.label"
            :to="item.to"
            variant="text"
            color="primary"
            size="small"
            class="nav-btn"
            exact
          >
            {{ item.label }}
          </v-btn>
        </div>
        <v-btn
          color="primary"
          variant="outlined"
          size="small"
          class="d-none d-md-flex mr-4"
          @click="openOrder"
        >
          Заказать стол
        </v-btn>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
      <SiteFooter />
    </v-main>

    <OrderDialog />
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navItems } from './data/site.js'
import { provideOrder } from './composables/useOrder.js'
import OrderDialog from './components/OrderDialog.vue'
import SiteFooter from './components/SiteFooter.vue'

const { openOrder } = provideOrder()

const drawer = ref(false)
const scrolled = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
