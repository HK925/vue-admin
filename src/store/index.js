import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

//全局注入
Vue.use(Vuex)

//创建vuex的实例
export default new Vuex.Store({
    modules: {
        tab
    }
})