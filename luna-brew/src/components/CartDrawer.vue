<template>
  <v-navigation-drawer
    :model-value="drawerOpen"
    location="right"
    temporary
    width="380"
    color="#0a0806"
    @update:model-value="onDrawerChange"
  >
    <div class="pa-6">
      <div class="d-flex align-center mb-4">
        <span class="logo-text">Корзина ☽</span>
        <v-spacer />
        <v-btn icon="mdi-close" variant="text" color="primary" @click="closeDrawer" />
      </div>

      <p v-if="isEmpty" class="section-sub">Корзина пуста. Добавьте напитки из меню.</p>

      <v-list v-else color="transparent" class="cart-list">
        <v-list-item
          v-for="item in cartItems"
          :key="item.id"
          class="px-0 mb-2"
        >
          <template #prepend>
            <span class="text-h5 mr-2">{{ item.emoji }}</span>
          </template>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.price }} ₽ × {{ item.quantity }}</v-list-item-subtitle>
          <template #append>
            <v-btn icon size="x-small" variant="text" @click="decrementItem(item.id)">
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-btn icon size="x-small" variant="text" color="error" @click="removeFromCart(item.id)">
              <v-icon>mdi-delete-outline</v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </v-list>

      <v-divider v-if="!isEmpty" class="my-4" color="rgba(200,169,110,0.2)" />

      <div v-if="!isEmpty" class="mb-4">
        <div class="d-flex justify-space-between menu-price text-h6">
          <span>Итого</span>
          <span>{{ totalPrice }} ₽</span>
        </div>
        <p class="section-sub mt-2">Фаза: {{ currentPhase.name }} {{ currentPhase.icon }}</p>
      </div>

      <v-btn
        v-if="!isEmpty"
        block
        color="primary"
        class="mb-2"
        rounded="0"
        @click="checkout"
      >
        Оформить заказ
      </v-btn>
      <v-btn
        v-if="!isEmpty"
        block
        variant="outlined"
        color="primary"
        rounded="0"
        @click="clearCart"
      >
        Очистить
      </v-btn>
    </div>
  </v-navigation-drawer>

  <v-snackbar
    :model-value="cartSnackbar"
    color="primary"
    location="bottom right"
    :timeout="2500"
    rounded="0"
    @update:model-value="setCartSnackbar"
  >
    <v-icon class="mr-2">mdi-cart-check</v-icon>
    Напиток добавлен в корзину
  </v-snackbar>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const drawerOpen = computed({
  get: () => store.state.cart.drawerOpen,
  set: (v) => store.commit('cart/SET_DRAWER', v),
})

const cartSnackbar = computed({
  get: () => store.state.cart.snackbar,
  set: (v) => store.commit('cart/SET_SNACKBAR', v),
})

const cartItems = computed(() => store.getters['cart/cartItems'])
const totalPrice = computed(() => store.getters['cart/totalPrice'])
const isEmpty = computed(() => store.getters['cart/isEmpty'])
const currentPhase = computed(() => store.getters['moon/currentPhase'])

function onDrawerChange(open) {
  store.commit('cart/SET_DRAWER', open)
}

function closeDrawer() {
  store.dispatch('cart/closeDrawer')
}

function decrementItem(id) {
  store.dispatch('cart/decrementItem', id)
}

function removeFromCart(id) {
  store.dispatch('cart/removeFromCart', id)
}

function clearCart() {
  store.dispatch('cart/clearCart')
}

function setCartSnackbar(value) {
  store.commit('cart/SET_SNACKBAR', value)
}

function checkout() {
  store.dispatch('cart/closeDrawer')
  store.dispatch('booking/openOrder')
}
</script>
