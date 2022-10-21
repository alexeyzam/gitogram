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
    <div class="issue-block">
    <Toggler v-model="isViewIssue"/>
      <template v-if="isViewIssue">

    <template v-if="!issueLoading">
      <div class="issue-comment" v-for="issue in issues">
        <div class="issue-autor"><span>{{ issue.user.login }}</span></div>
        <div class="issue-title"><span v-html="issue.body"/></div>
      </div>
    </template>
      <template v-else>
        <div class="issue-preloader-block-1" />
        <div class="issue-preloader-block-2" />
        <div class="issue-preloader-block-3" />
      </template>
      </template>
    </div>
  </div>
</template>

<script>
import Toggler from "@/components/Toggler";
import Profile from "@/components/Profile";
import {apiGet} from "@/api/rest/githubRestQuery";

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
      issueLoading:false


    }
  },
  computed:{
    issues(){
      const repoData=this.$store.state.repos.find(v=>v.id===this.user.id)
      const issuesRepo=repoData?.issues
      return issuesRepo?issuesRepo:[]
    },
  },
  methods:{
    async getIssues(){
      this.issueLoading=true
      const repoData=this.$store.state.repos.find(v=>v.id===this.user.id)
      if (repoData?.issues){
        this.issueLoading=false
        return repoData.issues
      }
      if (this.user?.issues_url){
      const data=await apiGet({basUrl:this.user.issues_url})
        repoData.issues=data.data
      }else {
        repoData.issues=[]
      }
      this.issueLoading=false

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
  white-space: nowrap;
}

.issue-title {
  margin-left: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  white-space: pre-line;
}

.items {
  height: 100%;
  display: flex;
  margin: 2px;

}
.issue-block{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 10px;

  width: 504px;
  height: 100%;
}
.issue-preloader-block-1{

  width: 504px;
  height: 22px;

  background: linear-gradient(270deg, #FFFFFF -50%, rgba(255, 255, 255, 0) 100%), #EAEAEA;
  border-radius: 4px;
}
.issue-preloader-block-2{
  width: 298px;
  height: 22px;

  background: linear-gradient(270deg, #FFFFFF -50%, rgba(255, 255, 255, 0) 100%), #EAEAEA;
  border-radius: 4px;
}

.issue-preloader-block-3{
  width: 216px;
  height: 22px;

  background: linear-gradient(270deg, #FFFFFF -50%, rgba(255, 255, 255, 0) 100%), #EAEAEA;
  border-radius: 4px;
}

</style>
