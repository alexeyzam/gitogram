<template>
<div class="col">
  <div class="logo-1">
    <Logo name="Gitogram"></Logo>
  </div>
  <div class="text-block-1">
    <p>{{blockText}}</p>
  </div>
  <div class="button-auth-block">
  <ButtonAuth @click="handlerStartLogin"/>
  </div>
  <div class="gitogram-image">
    <img src="@/assets/images/device-macbook.jpg">
  </div>
  <div class="bottom-block">
    <div class="bottom-text">
    <span>{{bottomText}}</span>
    </div>
  </div>
</div>
</template>

<script>
import Logo from "@/components/Logo";
import ButtonAuth from "@/components/Login/ButtonAuth";
import {mapActions, mapState} from "vuex";
import {makeRequest} from "@/api/request";
import {urlPaths} from "@/api/urls";
import {simpleRequest} from "@/api/rest/simpleRestQuery";
export default {
  name: "LoginPage",
  components: {Logo,ButtonAuth},
  data(){
    return {
      blockText:'More than just one repository.\n' +
          'This is our digital world.',
      bottomText:'© Gitogram from Loftschool'
    }
  },
  computed: {
    ...mapState({
      isLoggedIn: state=>state.user.isLoggedIn
    })
  },
  methods:{
    ...mapActions({
      dispatchStartUserAuth:'user/dispatchStartUserAuth',
      dispatchGetUser:'user/dispatchGetUser',
    }),
    handlerStartLogin(){
      const params = new URLSearchParams();
      params.append('client_id', process.env.VUE_APP_CLIENT_ID);
      params.append('scope', 'repo:status public_repo read:user');
      const githubAuthApi = "https://github.com/login/oauth/authorize";
      window.location.href = `${githubAuthApi}?${params}`;
    }
  },
  async created() {
    const code = new URLSearchParams(window.location.search).get("code");
    if (!code){return}
    try{
      const params = new URLSearchParams()
      params.set('clientId',process.env.VUE_APP_CLIENT_ID)
      params.set('clientSecret',process.env.VUE_APP_CLIENT_SECRET)
      params.set('code',code)
      const url= `${urlPaths.getToken}?${params}`
      const response=await  simpleRequest({url,method:'post'})
      const token=response?.data?.token
      if (token) localStorage.setItem("token", token);
      await this.dispatchGetUser()
    }catch (error){
      console.error(error)

    }
  }

}
</script>

<style scoped>
.col{

  width: 1440px;
  height: 1024px;
  background: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.logo-1 {
  height: 40px;
  display: flex;
  margin-top: 205px;
}
.text-block-1{
  width: 256px;
  height: 96px;
  display: flex;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  text-align: center;
  color: #6F6F6F;
  margin-top: 12px;
}
.button-auth-block{
  margin-top: 38px;
}
.gitogram-image{
  margin-top: 90px;
}
.bottom-block{
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.bottom-text{
  width: 1440px;
  height: 84px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.01px;
  color: rgba(0, 0, 0, 0.4);

}

</style>
