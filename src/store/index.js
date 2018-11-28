import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import user from './modules/user';
import permission from './modules/permission';
import getters from './getters';

// 告诉 vue “使用” vuex
Vue.use(Vuex);

// 创建一个对象来保存应用启动时的初始状态
// 需要维护的状态
const store = new Vuex.Store({
  modules: {
    app,
    user,
    permission
  },
  getters
});

// 整合初始状态和变更函数，我们就得到了我们所需的 store
// 至此，这个 store 就可以连接到我们的应用中
export default store
