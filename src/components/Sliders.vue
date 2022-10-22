<template>
  <div class="sliders">
    <div class="menu-logo">
      <Logo name="Gitogram"></Logo>
      <CloseButton @click="handlerCloseButton"/>
    </div>
    <div class="row">
      <Slider v-for="(repo,index) in repos" :data="repo" :index="index" :key="repo.id"/>
    </div>
  </div>

</template>

<script>
import Slider from "@/components/Slider";
import {mapGetters,mapActions} from "vuex";
import Logo from "@/components/Logo";
import CloseButton from "@/components/Buttons/CloseButton";
export default {
  name: "Sliders",
  components: {Slider,Logo,CloseButton},
  computed:{
    ...mapGetters({'getRecommendedReposData':'getRecommendedReposData'}),
    repos(){
        return this.getRecommendedReposData
    }
  },
  methods:{
    ...mapActions({'fetchRecommendedRepo':'fetchRecommendedRepo'}),
    handlerCloseButton(){
      this.$router.push({
        'name':'home',
      })
    }
  },
  async created(){
    if(this.repos.length===0) {
      await this.fetchRecommendedRepo()}
  }

}
</script>

<style scoped>
.menu-logo{
  position: relative;
  margin-top: 44.5px;
  display: flex;
  color: #FFFFFF;
  display: flex;
  height: 40px;
  margin-left: 121px;
  margin-right: 121px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;


}

.row{
  display: flex;
  /*justify-content: center;*/
  flex-direction: row;
  align-items: flex-start;
  position: relative;
  top: 175px;
  /*margin-left: 1px;*/
}

.sliders{
  background: #101010;

  width: 1440px;
  height: 1024px;
  overflow: hidden;
}
</style>
