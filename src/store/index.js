import { createStore } from 'vuex'

import common from './modules/common.js'

export default createStore({
  modules: {
	  common,
  }
})