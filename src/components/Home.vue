<template>
  <div class="container">
    <div class="header">
    <Header>
      <template v-slot:top>
      <div class="appbar">
          <AppBar></AppBar>
      </div>
      </template>

      <template v-slot:middle>
        <div class="stories">
          <Stories :repos="recommendedRepo"/>
        </div>
      </template>
    </Header>
    </div>
    <div class="content-row">
      <div class="content-col">
      <div v-for="repo in likedRepo" class="content">
        <Content :repo="repo">
          <template v-slot:postFrame>
              <PostFrame :repo="repo"/>
          </template>
        </Content>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import Stories from "@/components/Stories";
import Content from "@/components/Content";
import Header from "@/components/Header";
import PostFrame from "@/components/PostFrame";
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    AppBar,
    Stories,
    Content,
    Header,
    PostFrame,
  },
  // data(){
  //   return {
  //     users:[],
  //   }
  // },
  computed:{
    ...mapGetters({
                  'getLikedRepoData':'getLikedRepoData',
                  'getRecommendedReposData':'getRecommendedReposData',
               }),
    recommendedRepo(){
      return this.getRecommendedReposData
    },
    likedRepo(){
      return this.getLikedRepoData
    }
  },
  methods:{
    ...mapActions({
      'fetchRecommendedRepo':'fetchRecommendedRepo',
      'fetchLikedRepo':'fetchLikedRepo',
    }),
  },
  async mounted() {
    let promises = [
      this.fetchRecommendedRepo(),
      this.fetchLikedRepo(),
    ]
    await Promise.all(promises)
  },
}
</script>

<style scoped>
@import "@/styles/app.css";


.header{
  background: #FAFAFA;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.appbar{
  margin-top: 43.5px;
  /*margin-left: 121px;*/
  /*margin-right: 121px;*/
}

.content-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: row;
}
.content-col{
  display: flex;
  flex-direction: column;
  flex-basis: 979px;
  justify-content: center;
}

</style>
