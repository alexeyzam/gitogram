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
        token:null,
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
            state.token=null
        },
        successUserAuth(state,payload){
            state.isLoggedIn = true
            state.userAuthStarting =false
            state.userAuthSuccess = true
            state.userAuthFailing = false
            state.authErrors=null
            state.data=payload
        },
        userLogOut(state){
            state.isLoggedIn = false
            state.userAuthStarting = true
            state.userAuthSuccess = null
            state.userAuthFailing = null
            state.authErrors=null
            state.data=null
        },
    },
    actions:{
        async dispatchGetUser(state){
            state.commit('startUserAuth')
            try{
                const url='user'
                const response = await makeRequest({url,method:'get'})
                state.commit('successUserAuth',response.data)

            }catch (error){
                state.commit('failedUserAuth',error)
            }
        },
        async dispatchStartUserAuth(state){

        },

    }
}
