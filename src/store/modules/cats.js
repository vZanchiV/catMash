import catService from '../../services/catService';

const state = {
    cats: [],
    catForVote: []
};

const getters = {
    catsList : state => state.cats,
    twoCats : state => state.catForVote,
};


const mutations = {
    GET_CATS:(state, payload) => {
        state.cats = payload
    },
    GET_CATS_ERROR:(state, error) => {
        state.errors = [error, ...state.errors];
    },
    GET_FOR_VOTE:(state, payload)=>{
        state.catForVote = payload
    }
};

const actions = {
    getCats({commit}) {
        catService.getCats().then( res => { 
            const allCats = res.data.images;
            const twoCats = [];
            
            // add node like for each cat
            allCats.forEach(item => {
                item['like'] = 0;
            });
            twoCats.push(catService.getTwoCats(allCats),catService.getTwoCats(allCats));
            /* eslint-disable no-console */
            commit('GET_CATS',allCats);
            commit('GET_FOR_VOTE',twoCats)
        
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

