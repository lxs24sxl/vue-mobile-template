import { getToken, setToken, removeToken } from '@/utils/auth';

const user = {
  statee: {
    token: getToken(),
    name: "",
    avatar: "",
    roles: []
  },
  mutations: {
    SET_TOKEN: ( state, token ) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  // 获取用户信息
  GetInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // getInfo(state.token).then(response => {
        // const data = response.data
        const data = {
          roles: ['admin'],
          name: "lxs",
          avatar: "http://img3.duitang.com/uploads/item/201507/09/20150709200521_nYZMX.thumb.700_0.jpeg"
        };
        commit('SET_ROLES', data.role)
        commit('SET_NAME', data.name)
        commit('SET_AVATAR', data.avatar)
        resolve(data);
        // resolve(response)
      // }).catch(error => {
        // reject(error)
      // })
    })
  },
}