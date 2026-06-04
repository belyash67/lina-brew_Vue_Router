const phases = {
  new: { icon: '🌑', name: 'Новолуние', hint: 'лёгкие и тёмные профили' },
  waxing: { icon: '🌒', name: 'Растущая', hint: 'насыщенные вкусы' },
  full: { icon: '🌕', name: 'Полнолуние', hint: 'яркие и сладкие ноты' },
  waning: { icon: '🌘', name: 'Убывающая', hint: 'мягкие и медитативные напитки' },
}

export default {
  namespaced: true,

  state: () => ({
    current: 'waxing',
  }),

  getters: {
    currentPhase: (state) => phases[state.current],
    phaseList: () =>
      Object.entries(phases).map(([key, value]) => ({
        key,
        ...value,
        active: false,
      })),
    phasesWithActive: (state) =>
      Object.entries(phases).map(([key, value]) => ({
        key,
        ...value,
        active: key === state.current,
      })),
    menuSubtitle: (state, getters) =>
      `Сегодня: ${getters.currentPhase.name} ${getters.currentPhase.icon} — время ${getters.currentPhase.hint}`,
  },

  mutations: {
    SET_PHASE(state, phase) {
      if (phases[phase]) state.current = phase
    },
  },

  actions: {
    setPhase({ commit }, phase) {
      commit('SET_PHASE', phase)
    },
  },
}
