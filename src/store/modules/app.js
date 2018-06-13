const app = {
  state: {
    name: "lxs"
  },
  mutations: {
    TOGGLE_NAME: state => {
      if ( state.name == 'lxs') {
        state.name = 'lxs24sxl'
      }else {
        state.name = 'lxs'
      }
    }
  },
  actions:{
    ToggleName: ({ commit }) => {
      commit("TOGGLE_NAME");
    }
  }
}

export default app;