import {createStore} from 'vuex';
import {getRepoReadme, getTrendigs, getUserStarredRepo} from "@/api/rest/githubRestQuery";
import user from './modules/user'

export default createStore({
    modules:{
        user
    },
    state:{
        repos:[],
        repoReadmeData:[],
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
        },

        getRepoReadme(state){
            return (data)=>{
            const value = state.repoReadmeData.find(v=>v.id===data.id)
            return value?.response}
        },
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
        successLoadReadmeData(state,payload){
            const index = state.repoReadmeData.findIndex(v=>v.id===payload.id)
            if (index ===-1){state.repoReadmeData.push(payload)}
            state.repoReadmeData[index]=payload
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

        },
        async fetchStarredRepo(state){
            state.commit('startLoadingData')
          try {
              const response= await getUserStarredRepo()
              state.commit('successLoadingData',{repos:response?.data})
          }catch(error){
              console.error(error)
              state.commit('failLoadingData',{error})
          }

        },
        async fetchReadme(state,payload){
            try {
                const response=await getRepoReadme({owner:payload.username,repo:payload.name})
                state.commit('successLoadReadmeData',{id:payload.id,response:response.data})
            }catch (error){
                state.commit('successLoadReadmeData',{id:payload.id,response:''})
            }


        }
    },
})
