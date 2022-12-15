import { createStore } from 'vuex'
import API from '../API/API'
export default createStore({
    state:{
        isLoading:true,
        product:[],
        searchResults:[],
        categories:[]
    },
    getters:{
        isLoading:state => state.isLoading,
        searchResults:state => state.searchResults,
        getCategories : state => state.categories,
        getProducts : state => state.products,
    },
    mutations:{
        setSearchResults(state , payload){
            console.log(payload)
            state.searchResults = payload
        },
        setData(state, payload){
            state.categories= payload.categories
            state.products= payload.products
            state.isLoading = false
        },
        setProducts(state, payload){
            state.products= payload
        }
    },
    actions:{
        async getResearchResults({commit}, payload){
            let response = await API.get(`products/search?q=${payload}`).then(res =>res).then(res => res.data);
            commit('setProducts', response);
        },
        async fetchData({state , commit}){
            let categories = await API.get(`products/categories`).then(res => res.data);
            let products = await API.get(`products`).then(res => res.data);
            commit('setData' , {categories , products});
            state.isLoading=false
        },
        async fetchCategoryProducts({commit} , category){
            let response = await API.get(`products/category/${category}`).then(res => res.data)
            commit('setProducts' , response)
        }
    }
})
