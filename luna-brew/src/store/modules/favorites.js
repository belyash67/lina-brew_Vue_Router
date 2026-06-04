import { getAllDrinks } from '../../data/menu.js'

const STORAGE_KEY = 'luna-brew-favorites'

export default {
  namespaced: true,

  state: () => ({
    ids: [],
  }),

  getters: {
    isFavorite: (state) => (id) => state.ids.includes(id),
    count: (state) => state.ids.length,
    favoriteDrinks: (state) => {
      const drinks = getAllDrinks()
      return drinks.filter((d) => state.ids.includes(d.id))
    },
  },

  mutations: {
    SET_FAVORITES(state, ids) {
      state.ids = ids
    },
    TOGGLE_FAVORITE(state, drink) {
      const index = state.ids.indexOf(drink.id)
      if (index === -1) {
        state.ids.push(drink.id)
      } else {
        state.ids.splice(index, 1)
      }
    },
  },

  actions: {
    toggleFavorite({ commit }, drink) {
      commit('TOGGLE_FAVORITE', drink)
    },
    loadFromStorage({ commit }) {
      try {
        const raw = localStorage.getItem(STORAGE_KEY)
        if (raw) commit('SET_FAVORITES', JSON.parse(raw))
      } catch {
        commit('SET_FAVORITES', [])
      }
    },
  },
}

export function favoritesPersistencePlugin(store) {
  store.subscribe((mutation) => {
    if (mutation.type.startsWith('favorites/')) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(store.state.favorites.ids))
    }
  })
}
