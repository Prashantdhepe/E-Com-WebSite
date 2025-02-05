// this is index.js file in store folder
// import { createStore } from 'vuex';
import { defineStore } from 'pinia';

import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import state from './state.js';
import modules from './modules.js';

const store = defineStore('main' ,{
    actions: actions,
    mutations: mutations,
    getters: getters,
    state: state,
    modules: modules,
});

export default store;

