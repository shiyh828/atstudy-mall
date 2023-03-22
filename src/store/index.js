import { createStore } from 'vuex'

import website from '@/store/modules/website.js'

export default createStore({
  modules: {
	  website,
  }
})