import {makeRequest} from "@/api/request";
import router from "@/router";

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
        userImage:null
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
        setUserImage(state,image){
            state.userImage=image
        }
    },
    actions:{
        async dispatchGetUser(state){
            state.commit('startUserAuth')
            try{
                const url='user'
                const response = await makeRequest({url,method:'get'})
                state.commit('successUserAuth',response.data)
                const userImage=sessionStorage.getItem('userImage')
                if (userImage){
                    state.commit('setUserImage',userImage)
                }else{
                    const url = state?.state?.data?.avatar_url
                    const imageResponse=await fetch(url)
                    const imageBlob = await imageResponse.blob()
                    const reader = new FileReader();
                    await reader.readAsDataURL(imageBlob)
                    reader.onload=function (){
                        const userImage=reader.result
                        state.commit('setUserImage',userImage)
                        sessionStorage.setItem('userImage',userImage)
                    }
                }
            }catch (error){
                state.commit('failedUserAuth',error)
            }
        },
        async dispatchStartUserAuth(state){

        },
        async dispatchUserLogout(state){
            localStorage.removeItem('token')
            await router.push({name:'login'})
            state.commit('userLogOut')


        }

    }
}
