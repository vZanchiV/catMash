import catService from '../../services/catService';
import * as firebase from 'firebase'

const state = {
    cats: [],
    catForVote: [],
    catsSorted:[]
};

const getters = {
    catsList : state => state.cats,
    twoCats : state => state.catForVote,
    catsSorted : state => state.catsSorted
};


 export const mutations = {
    GET_CATS:(state, payload) => {
        state.cats = payload
    },
    GET_TWO_CATS:(state, payload)=>{
        state.catForVote = payload
    },
    UPDATE_CATS:(state, payload)=> {
        state.cats = payload
    },
    SORT_CATS:(state, payload)=> {
        state.cats = payload
    }
};

const actions = {
    getCats({commit}) {
        const refCats = firebase.database().ref('cats');
        refCats.on('value', snapshot => {
            let allCats = snapshot.val();
            commit('GET_CATS',allCats);
            this.dispatch('getTwoCats');
            this.dispatch('sortCats');
        })        
    },
    getTwoCats({commit}) {
        const twoCats = [];
        let CatOne = catService.getOneCats(state.cats);
        let CatTwo = catService.getOneCats(catService.removeOneCatFromAllCats(state.cats,CatOne))          
        twoCats.push(CatOne,CatTwo);
        commit('GET_TWO_CATS',twoCats)
    },
    updateCat({commit},cat) {
       
       const {index} = cat;
       console.log(index,state.cats[index])
       const db = firebase.database()
       db.ref(`cats/${index}`).update({ like: cat.item.like +1 });
       console.log(state.cats[index])
       commit('UPDATE_CATS',state.cats)
    },
    sortCats({commit}){
        console.log('sortale',state.catss)
        const  catsSort = catService.sortCats(state.cats);
        commit('SORT_CATS',catsSort)
    }

}

export default {
    state,
    mutations,
    getters,
    actions
}

