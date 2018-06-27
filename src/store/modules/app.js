const app = {
  state: {
    name: "lxs",
    current: 0
  },
  mutations: {
    TOGGLE_NAME: state => {
      if ( state.name == 'lxs') {
        state.name = 'lxs24sxl'
      }else {
        state.name = 'lxs'
      }
    },
    TOGGLE_INDEX: (state, current) => {
      state.current = current
    }
  },
  actions:{
    ToggleName: ({ commit }) => {
      commit("TOGGLE_NAME");
    },
    ToggleIndex: ({ commit }, current) => {
      commit("TOGGLE_INDEX", current );
    }
  }
}

export default app;