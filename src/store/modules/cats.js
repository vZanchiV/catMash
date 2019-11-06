import catService from '../../services/catService';

const state = {
    cats: [],
};

const getters = {
    catsList : state => state.cats
};


const mutations = {
    GET_CATS:(state, payload) => {
        state.cats = payload
    },
    GET_CATS_ERROR:(state, error) => {
        state.errors = [error, ...state.errors];
    }
};

const actions = {
    getCats({commit}) {
        catService.getCats().then( res => { 
            // add node like for each cat
            res.data.images.forEach(item => {
                item['like'] = 0
            })
            commit('GET_CATS',res.data.images)
        })
        .catch(err =>{
            const error = {
                date :new Date(),
                message:`failled to retrieve products:${err.message}`
            }
            commit('GET_CATS_ERROR', error)
        });         
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}

