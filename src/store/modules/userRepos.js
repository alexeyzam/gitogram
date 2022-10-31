import {getUserOwnRepos} from "@/api/rest/githubRestQuery";
import {getReposData} from "@/helpers/storeFunctions";

export default {
    namespaced: true,
    state: {
        userOwnRepos: [],
        repoLoadStarting: null,
        repoLoadSuccess: null,
        repoLoadFailed: null,
        errors:null
    },
    getters: {
        getUserRepo(state) {
            return getReposData(state, {fromRepo: 'userOwnrepos'}) || []
        },
        getNumUserRepo(state) {
            return state.userOwnRepos.length
        }
    },
    mutations:{
        startLoadRepos(state){
            state.repoLoadStarting=true
            state.repoLoadSuccess=null
            state.repoLoadFailed=null
        },
        successLoadRepos(state,payload){
            state.repoLoadStarting=false
            state.repoLoadSuccess=true
            state.repoLoadFailed=false
            state.userOwnRepos=payload
        },
        failedLoadRepos(state,payload){
            state.repoLoadStarting=false
            state.repoLoadSuccess=false
            state.repoLoadFailed=true
            state.error=payload
        },
    },
    actions:{

            async dispatchLoadRepos(state) {
                state.commit('startLoadRepos')
                try {
                    const response = await getUserOwnRepos()
                    state.commit('successLoadRepos',response?.data)

                }catch (error){
                    state.commit('failedLoadRepos',error)
                }
            }

    }
}
