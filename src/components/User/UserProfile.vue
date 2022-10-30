<template>

  <div class="user-profile">
    <div class="col">
      <div class="header-user-profile">
        <div class="appbar">
        <AppBar :height="40"/>
        </div>
      </div>
      <div class="body-profile">
        <div class="user-block">
          <div class="user-title">My profile</div>
          <div class="user-data">
            <div class="user-image">
              <img :src="userImage" alt="user-image" class="round-image">
            </div>
            <div class="col user-info">
              <div class="c-login"><span>{{ login }}</span></div>
              <div class="c-user-statistics">

                  <span class="user-repositories-num">{{ followers }}</span>
                  <span class="user-repositories-text">followers</span>

                <span class="c-user-following-num">{{numLikedRepo}}</span>
                <span class="c-user-following-text" @click="handlerUserFollowingClicked">following</span>

              </div>
              <div>
                <span class="c-username">{{ username }}</span>
              </div>

            </div>
          </div>
        </div>
        <div class="user-data-info">

            <div class="user-data-title">
              <div class="user-data-title-text"><span>{{ pageData.dataTitle }}</span></div>
              <div class="user-data-title-counter">{{ pageData.dataCounter }}</div>

            </div>
          <div class="user-info-block">
            <router-view></router-view>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import UserRepository from "@/components/User/UserRepository";
import {useStore} from "vuex";
import {computed} from "vue";
import {useRoute, useRouter} from 'vue-router'

export default {
  name: "UserProfile",
  setup() {
    const {state,getters} = useStore()
    const router = new useRouter()
    const route = new useRoute()
    const handlerUserFollowingClicked = async () => {

      await router.push({name: 'user-following'})
    }
    return {
      handlerUserFollowingClicked,
      userImage: computed(()=>state.user?.userImage),
      login: computed(()=>state.user?.data?.login),
      username: computed(()=>state.user?.data?.name),
      followers:computed(()=>state.user?.data?.followers),
      numLikedRepo:computed(() => state.likedRepos.length),
      repos: computed(()=>getters.userRepos.getUserRepo),
      numUserRepos: computed(()=>state.userRepos.userOwnRepos.length),
      pageData: computed(() => {
        if (route?.name === 'user-own-repos') {
          return {
            dataTitle: 'Repositories',
            dataCounter: computed(()=>state.userRepos.userOwnRepos.length),
          }
        } else if (route?.name === 'user-following') {
          return {
            dataTitle: 'Following',
            dataCounter: computed(()=>state.likedRepos.length)
          }
        }
      })

    }
  },
  components:{AppBar,UserRepository},
}
</script>

<style scoped>
.c-username{
  width: 239px;
  height: 17px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #9E9E9E;
}
.c-user-statistics{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 10px;
  width: 160px;
  height: 21px;
}
.c-user-following-text:hover{
  cursor: pointer;
}
.c-user-following-text{
  height: 15px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;

  /* identical to box height */
  text-align: center;
  letter-spacing: -0.1px;
  text-decoration-line: underline;
  color: #31AE54;

}
.c-user-following-num{
  height: 21px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #262626;
}
.user-repositories-text{
  height: 15px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  letter-spacing: -0.1px;
  color: #404040;
}
.user-repositories-num{

  height: 21px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: -0.3px;
  color: #262626;
}
.c-login{
  width: 97px;
  height: 29px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #262626;
}
.user-info{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  position: absolute;
  width: 239px;
  height: 79px;
  left: 110px;
  top: 0px;


}
.user-image{
  height: 90px;
  width: 90px;
}
.user-info-block{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  position: absolute;
width: 800px;
  height: 790px;
  padding-top: 104px;
  margin-left: 74px;
  margin-right: 126px;
  overflow-y: clip;
}
.appbar{
  width: 1198px;
  height: 40px;
  margin-left: 121px;
  margin-right: 121px;
  align-items: center;
}
.user-title{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  color: #262626;
  margin-left: 121px;
  margin-top: 40px;
}
.user-data-title-text{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 28px;
  color: #262626;
  height: 28px;
}
.user-data-title-counter{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  text-align: right;
  color: #9E9E9E;
  height: 28px;
  margin-right: 126px;
}
.user-data-title{

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  margin-left: 74px;
  margin-top: 26px;
}
.user-data{
  position: absolute;
  width: 349px;
  height: 107px;
  left: 121px;
  top: 224px;
  display: flex;
  flex-direction: row;
}
.body-profile{
  width: 1440px;
  height: 898px;
  display: flex;
  flex-direction: row;

}
.user-block{
  border: 1px solid #D3D3D3;
  width: 500px;
  display: flex;
  flex-direction: row;
}
.col{
  display: flex;
  flex-direction: column;
}
.user-profile{
  display: flex;
  flex-direction: row;
  position: relative;
  width: 1440px;
  height: 1024px;
  border: 1px solid #D3D3D3;
  background: #FFFFFF;
}
.header-user-profile{
  display: flex;
  width: 1440px;
  height: 126px;
  left: 0px;
  top: 0px;
align-items: center;
  background: #FAFAFA;
  justify-content: space-between;
}
.user-data-info{
  display: flex;
  flex-direction: column;
  width: 940px;
  border: 1px solid #D3D3D3;
}
.round-image{
  border-radius: 50%;
  height: 100%;
}
</style>
