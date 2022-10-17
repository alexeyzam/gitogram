import {makeRequest} from "@/api/request";

export default {
    namespaced: true,
    state: {
        isLoggedIn: null,
        userAuthStarting: null,
        userAuthSuccess: null,
        userAuthFailing: null,
        authErrors:null,
        data: null,
    },
    mutations: {
        startUserAuth(state) {
            state.isLoggedIn = null
            state.userAuthStarting = true
            state.userAuthSuccess = null
            state.userAuthFailing = null
            state.authErrors=null
            state.data=null
        },
        failedUserAuth(state,payload){
            state.isLoggedIn = false
            state.userAuthStarting =false
            state.userAuthSuccess = false
            state.userAuthFailing = false
            state.authErrors=payload
            state.data=null
        },
        successUserAuth(state,payload){
            state.isLoggedIn = true
            state.userAuthStarting =false
            state.userAuthSuccess = true
            state.userAuthFailing = false
            state.authErrors=null
            state.data=payload
        }
    },
    actions:{
        async dispatchStartUserAuth(state){
            state.commit('startUserAuth')
            try{
                const url='https://api.github.com/user'
                const response = await makeRequest({})

            }catch (error){
                state.commit('failedUserAuth',error)
            }
        },

    }
}
