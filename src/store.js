import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        voicesFavorite: [],
        voiceSelected: '',
        search: '',
    },
    mutations: {
        toggleFavoriteList(state, value) {
            const voiceIndex = state.voicesFavorite.findIndex(_ => _.id === value.id);    
            
            if (voiceIndex !== -1) {
                state.voicesFavorite.splice(voiceIndex, 1)
                return
            }

            state.voicesFavorite.push(value);
        },
        selectVoice(state, value) {
            state.voiceSelected = value;
        },
        setSearch(state, payload) {
            state.search = payload;
        },
    },
    actions: {
        updateSearch(context,val) { 
            context.commit('setSearch', val)
        },
    }
});
