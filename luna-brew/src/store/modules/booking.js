export default {
  namespaced: true,

  state: () => ({
    orderDialog: false,
    snackbar: false,
    submitting: false,
    form: {
      name: '',
      phone: '',
      date: '',
      guests: 2,
      wish: '',
    },
  }),

  mutations: {
    SET_ORDER_DIALOG(state, open) {
      state.orderDialog = open
    },
    SET_SNACKBAR(state, open) {
      state.snackbar = open
    },
    SET_SUBMITTING(state, value) {
      state.submitting = value
    },
    SET_FORM_FIELD(state, { field, value }) {
      state.form[field] = value
    },
    RESET_FORM(state) {
      state.form = { name: '', phone: '', date: '', guests: 2, wish: '' }
    },
  },

  actions: {
    openOrder({ commit }) {
      commit('SET_ORDER_DIALOG', true)
    },
    closeOrder({ commit }) {
      commit('SET_ORDER_DIALOG', false)
    },
    updateField({ commit }, payload) {
      commit('SET_FORM_FIELD', payload)
    },
    submitOrder({ commit, state }) {
      commit('SET_SUBMITTING', true)
      setTimeout(() => {
        commit('SET_SUBMITTING', false)
        commit('SET_ORDER_DIALOG', false)
        commit('SET_SNACKBAR', true)
        commit('RESET_FORM')
        console.info('[LUNA BREW] Бронирование:', { ...state.form })
      }, 1500)
    },
  },
}
