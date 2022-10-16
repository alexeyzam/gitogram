import {createStore} from 'vuex';
import {getTrendigs} from "@/api/rest/trendings";

export default createStore({
    state:{
        repos:[],
        loading:false,
        error:null,
    },
    getters: {
        getUsers(state) {
            return state.repos.map(v => {
                return {
                    id:v.id,
                    username: v.owner.login,
                    img: v.owner.avatar_url,
                    name: v.name,
                    description: v.description,
                    issues_url: v.issues_url.replace('{/number}', ''),
                    stars: v.stargazers_count,
                    forks: v.forks
                }
            })
        }
    },
    mutations:{
        startLoadingData(state){
            state.loading=true
            state.repos=[]
            state.error=null
        },
        successLoadingData(state,payload){
            state.loading=false
            state.repos=payload.repos
            state.error=false
        },
        failLoadingData(state,payload){
            state.loading=false
            state.repos=[]
            state.error=payload.error
        },

    },
    actions:{
        async fetchTrends(state){
            state.commit('startLoadingData')
            try{
                const response= await getTrendigs({lang:'react'})
                state.commit('successLoadingData',{repos:response?.data?.items})
            }catch (error){
                console.error(error)
                state.commit('failLoadingData',{error})
            }

        }
    },
})
