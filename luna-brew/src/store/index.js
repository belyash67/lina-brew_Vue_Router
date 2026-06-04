import { createStore } from 'vuex'
import cart from './modules/cart.js'
import favorites, { favoritesPersistencePlugin } from './modules/favorites.js'
import moon from './modules/moon.js'
import booking from './modules/booking.js'

const store = createStore({
  modules: {
    cart,
    favorites,
    moon,
    booking,
  },
  plugins: [favoritesPersistencePlugin],
})

store.dispatch('favorites/loadFromStorage')

export default store
