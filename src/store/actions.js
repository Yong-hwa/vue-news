import {
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from '../api/index.js'

export default {
  // promise

  // FETCH_USER({ commit }, username) {
  //   return fetchUserInfo(username)
  //   .then(({ data }) => {
  //     commit('SET_USER', data)
  //   })
  //   .catch(error => console.log(error))
  // },
  // FETCH_ITEM({ commit }, itemId) {
  //   return fetchCommentItem(itemId)
  //   .then(({ data }) => {
  //     commit('SET_ITEM', data)
  //   })
  //   .catch(error => console.log(error))
  // },

  // async
  // try - catch
  async FETCH_USER({ commit }, username) {
    try {
      const response = await fetchUserInfo(username)
      commit('SET_USER', response.data)
      return response
    } catch (error) {
      console.log(error)
    }
  },
  async FETCH_ITEM({ commit }, itemId) {
    const response = await fetchCommentItem(itemId)
    commit('SET_ITEM', response.data)
    return response
  },
  // promise

  // FETCH_LIST({ commit }, pageName) {
  //   return fetchList(pageName)
  //   .then(response => {
  //     commit('SET_LIST', response.data)
  //     return response
  //   })
  //   .catch(error => console.log(error))
  // },
  
  // async
  async FETCH_LIST(context, pageName) {
    const response = await fetchList(pageName) 
    context.commit('SET_LIST', response.data)
    return response
  }
}