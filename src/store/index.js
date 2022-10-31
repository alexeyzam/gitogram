import {createStore} from 'vuex';
import {getRepoReadme, getRecommendedRepo, getUserLikedRepo} from "@/api/rest/githubRestQuery";
import user from './modules/user'
import userRepos from "@/store/modules/userRepos";
import {getReposData} from "@/helpers/storeFunctions";
export default createStore({
    modules:{
        user,
        userRepos,
    },
    state:{
        likedRepos:[],
        repoReadmeData:[],
        loading:false,
        error:null,
        loadingRecommendRepo:false,
        errorRecommendRepo:null,
        recommendedRepoData:[]
    },
    getters: {
        getLikedRepoData(state){
          return   getReposData(state,{fromRepo:'liked'})
        },
        getRecommendedReposData(state, {fromRepo}) {
            return   getReposData(state,{fromRepo:'recommended'})
        },

        getRepoReadme(state){
            return (data)=>{
            const value = state.repoReadmeData.find(v=>v.id===data.id)
            return value?.response}
        },
    },
    mutations:{
        startLoadingLikedRepo(state){
            state.loading=true
            state.likedRepos=[]
            state.error=null
        },
        successLoadedLikedRepo(state,payload){
            state.loading=false
            state.likedRepos=payload.repos
            state.error=false
        },
        failedLoadLikedRepo(state,payload){
            state.loading=false
            state.likedRepos=[]
            state.error=payload.error
        },
        startLoadingRecommendedRepoData(state){
            state.loadingRecommendRepo=true
            state.recommendedRepoData=[]
            state.error=null
        },
        successLoadRecommendedRepoData(state,payload){
            state.loadingRecommendRepo=false
            state.recommendedRepoData=payload.repos
            state.errorRecommendRepo=false
        },
        failedLoadRecommendedRepoData(state,payload){
            state.loadingRecommendRepo=false
            state.recommendedRepoData=[]
            state.errorRecommendRepo=payload.error
        },
        successLoadReadmeData(state,payload){
            const index = state.repoReadmeData.findIndex(v=>v.id===payload.id)
            if (index ===-1){state.repoReadmeData.push(payload)}
            state.repoReadmeData[index]=payload
        },


    },
    actions:{
        async fetchRecommendedRepo(state){
            state.commit('startLoadingRecommendedRepoData')
            try{
                const response= await getRecommendedRepo({lang:'react'})
                state.commit('successLoadRecommendedRepoData',{repos:response?.data?.items||[]})
            }catch (error){
                console.error(error)
                state.commit('failedLoadRecommendedRepoData',{error})
            }

        },
        async fetchLikedRepo(state){
            state.commit('startLoadingLikedRepo')
          try {
              const response= await getUserLikedRepo()
              state.commit('successLoadedLikedRepo',{repos:response?.data||[]})
          }catch(error){
              console.error(error)

              state.commit('failedLoadLikedRepo',{error})
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
