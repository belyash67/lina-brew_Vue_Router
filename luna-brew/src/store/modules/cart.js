export default {
  namespaced: true,

  state: () => ({
    items: [],
    drawerOpen: false,
    snackbar: false,
  }),

  getters: {
    itemCount(state) {
      return state.items.reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice(state) {
      return state.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    cartItems: (state) => state.items,
    isEmpty: (state) => state.items.length === 0,
  },

  mutations: {
    ADD_ITEM(state, payload) {
      const existing = state.items.find((i) => i.id === payload.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...payload, quantity: 1 })
      }
    },
    REMOVE_ITEM(state, id) {
      state.items = state.items.filter((i) => i.id !== id)
    },
    DECREMENT_ITEM(state, id) {
      const item = state.items.find((i) => i.id === id)
      if (!item) return
      if (item.quantity <= 1) {
        state.items = state.items.filter((i) => i.id !== id)
      } else {
        item.quantity -= 1
      }
    },
    CLEAR_CART(state) {
      state.items = []
    },
    SET_DRAWER(state, open) {
      state.drawerOpen = open
    },
    SET_SNACKBAR(state, value) {
      state.snackbar = value
    },
  },

  actions: {
    addToCart({ commit }, drink) {
      commit('ADD_ITEM', drink)
      commit('SET_SNACKBAR', true)
    },
    removeFromCart({ commit }, id) {
      commit('REMOVE_ITEM', id)
    },
    decrementItem({ commit }, id) {
      commit('DECREMENT_ITEM', id)
    },
    openDrawer({ commit }) {
      commit('SET_DRAWER', true)
    },
    closeDrawer({ commit }) {
      commit('SET_DRAWER', false)
    },
    clearCart({ commit }) {
      commit('CLEAR_CART')
    },
  },
}
