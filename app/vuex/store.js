import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import * as modules from './modules'
// import json from 'static/mock/credit/getCreditReport.json'

Vue.use(Vuex)

const state = {
  // content: json,
  content: {}
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: { ...modules }
})
