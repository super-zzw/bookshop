import Vue from 'vue'
import Vuex from 'vuex'
import { getTags, getList } from '@/js/api'
import createPersistedState from 'vuex-persistedstate'  //Vuex持久化存储配置
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    booksTags: [],
    title: '',
    BooksList:[],
    bookMsg:[]
  },
  mutations: {
    getBooksList(state, val) {
       state.booksTags = val
    },
    getTitle(state, val) {
      state.title = val
    },
    BooksList(state, val) {
      state.BooksList = val
     
      // Lockr.set('BooksList', JSON.stringify(val))
    },
    queryID(state, val) {
      state.bookMsg=val
    }
  },
  actions: {
    async getBooksList({ commit }, val) {
      if (val != '首页') {
        let val1 = await getTags(val)
        commit('getBooksList', val1)
      }
      commit('getTitle', val)
    },
    async BooksList({ commit }, val) {
      let list = await getList(val)
      console.log(val)
      commit('BooksList',list)
    },
   // 通过ID查询书籍
    async queryID({ commit }, val) {
      let { data } = await axios.get(`https://douban.uieee.com/v2/book/${val}`)
      console.log(data)
      commit('queryID', data)
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
