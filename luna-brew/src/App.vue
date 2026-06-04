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
        <div class="d-none d-md-flex align-center ga-1 mr-2">
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

        <v-btn icon variant="text" color="primary" class="mr-1" @click="openCart">
          <v-badge v-if="cartCount" :content="cartCount" color="primary">
            <v-icon>mdi-cart-outline</v-icon>
          </v-badge>
          <v-icon v-else>mdi-cart-outline</v-icon>
        </v-btn>

        <v-btn
          :to="{ name: 'favorites' }"
          icon
          variant="text"
          color="primary"
          class="mr-1"
        >
          <v-badge v-if="favoritesCount" :content="favoritesCount" color="secondary">
            <v-icon>mdi-heart-outline</v-icon>
          </v-badge>
          <v-icon v-else>mdi-heart-outline</v-icon>
        </v-btn>

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

    <CartDrawer />
    <OrderDialog />
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useStore } from 'vuex'
import { navItems } from './data/site.js'
import CartDrawer from './components/CartDrawer.vue'
import OrderDialog from './components/OrderDialog.vue'
import SiteFooter from './components/SiteFooter.vue'

const store = useStore()

const drawer = ref(false)
const scrolled = ref(false)

const cartCount = computed(() => store.getters['cart/itemCount'])
const favoritesCount = computed(() => store.getters['favorites/count'])

function openOrder() {
  store.dispatch('booking/openOrder')
}

function openCart() {
  store.dispatch('cart/openDrawer')
}

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
