
export default {
  saveUserName({ commit }, username) {
    commit('saveUserName', username)
  },
  saveCartCount({commit}, count) {
    commit('saveCartCount', count)
  }
}
