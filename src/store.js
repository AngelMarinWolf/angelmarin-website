import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: 'EN'
  },
  getters: {
    isEnglish: state => {
      return state.language === 'EN'
    }
  },
  mutations: {
    switchLanguage: state => {
      if (state.language === 'EN') {
        state.language = 'ES'
      } else {
        state.language = 'EN'
      }
    }
  },
  actions: {

  }
})
