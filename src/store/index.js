import { createStore } from 'vuex'

import common from './modules/common.js'
import customer from './modules/customer.js'
import order from './modules/order.js'
import product from './modules/product.js'


export default createStore({
  modules: {
	  common,
	  customer,
	  order,
	  product,
	  
  }
})