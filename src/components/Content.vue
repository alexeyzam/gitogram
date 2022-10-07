<template>
  <div class="content-wrapper">
    <div class="content-top">
      <Profile
          :src="user.img"
          :username="user.username"
          class="items"
      />
    </div>

    <slot name="postFrame"></slot>
    <Toggler v-model="isViewIssue"/>

    <template v-if="isViewIssue && issues">
      <div class="issue-comment" v-for="issue in issues">

        <div class="issue-autor">{{ issue.user.login }}</div>
        <div class="issue-title"> {{issue.body}}</div>
      </div>
    </template>
  </div>
</template>

<script>
import Toggler from "@/components/Toggler";
import Profile from "@/components/Profile";
import {apiGet} from "@/api/rest/trendings";

export default {
  name: "Content",
  components: {Toggler,Profile},
  props:{
    user:{
      default:{},
      required:true,
    }
  },
  data() {
    return {
      isViewIssue: false,
      issues:[],
    }
  },
  methods:{
    async getIssues(){
      if (this.user?.issues_url){
      const data=await apiGet({basUrl:this.user.issues_url})
        this.issues=data.data
      }else {
        this.issues=[]
      }

    }
  },
  computed:{
    userImage(){
      return require.context('../assets/images', false, /\.jpg$/)('./'+'Josh.jpg')
    }
  },
  watch:{
    isViewIssue(){
      if (this.isViewIssue===true) this.getIssues()
    },
  }


}
</script>

<style scoped>
.content-wrapper {
  margin-top: 32px;
  padding: 0px;
  gap: 18px;
  flex-direction: column;
  display: flex;
  align-self: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
}

.content-top {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  height: 44px;
  justify-content: flex-start;
  padding: 0px;
  gap: 14px;


}

.issue-comment {
  display: flex;
  flex-flow: wrap row;
}

.issue-autor {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #262626;
}

.issue-title {
  margin-left: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}

.items {
  height: 100%;
  display: flex;
  margin: 2px;

}

</style>
