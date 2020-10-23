import {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from '../api/index.js'

export default {
  FETCH_USER({ commit }, username) {
    return fetchUserInfo(username)
    .then(({ data }) => {
      commit('SET_USER', data)
    })
    .catch(error => console.log(error))
  },
  FETCH_ITEM({ commit }, itemId) {
    return fetchCommentItem(itemId)
    .then(({ data }) => {
      commit('SET_ITEM', data)
    })
    .catch(error => console.log(error))
  },
  FETCH_LIST({ commit }, pageName) {
    fetchList(pageName)
    .then(response => {
      commit('SET_LIST', response.data)
      return response
    })
    .catch(error => console.log(error))
  }
}