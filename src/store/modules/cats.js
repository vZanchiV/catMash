import catService from '../../services/catService';

const state = {
    cats: [],
    catForVote: []
};

const getters = {
    catsList : state => state.cats,
    twoCats : state => state.catForVote,
};


 export const mutations = {
    GET_CATS:(state, payload) => {
        state.cats = payload
    },
    GET_CATS_ERROR:(state, error) => {
        state.errors = [error, ...state.errors];
    },
    GET_TWO_CATS:(state, payload)=>{
        state.catForVote = payload
    },
    UPDATE_CATS:(state, payload)=> {
        state.cats = payload
    }
};

const actions = {
    getCats({commit}) {
        catService.getCats().then( res => { 
            let allCats = res.data.images;
            const twoCats = [];
            // add node like for each cat
            allCats.forEach(item => {
                item['like'] = 0;
            });
            twoCats.push(catService.getOneCats(allCats),catService.getOneCats(allCats));
            commit('GET_CATS',allCats);
            commit('GET_TWO_CATS',twoCats)
        
        })
        .catch(err =>{
            const error = {
                date :new Date(),
                message:`failled to retrieve products:${err.message}`
            }
            commit('GET_CATS_ERROR', error)
        });         
    },
    getTwoCats({commit}) {
        const twoCats = [];
        twoCats.push(catService.getOneCats(state.cats),catService.getOneCats(state.cats));
        commit('GET_TWO_CATS',twoCats)
    },
    updateCat({commit},cat) {
       let objIndex = state.cats.findIndex((obj => obj.id == cat.id));
       state.cats[objIndex].like++
       state.cats = catService.sortCats(state.cats);
       commit('UPDATE_CATS',state.cats)
    }

}

export default {
    state,
    mutations,
    getters,
    actions
}

