<template>
  <div class="sliders">
<div class="menu-logo"><Logo name="Gitogram"></Logo><CloseButton @click="handlerCloseButton"/></div>
  <div class="row">

    <Slider v-for="(user,index) in users" :data="user" :index="index" :key="user.id"/>


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
    ...mapGetters({'getUsers':'getUsers'}),
    users(){
        return this.getUsers
    }
  },
  methods:{
    ...mapActions({'fetchTrends':'fetchTrends'}),
    handlerCloseButton(){
      this.$router.push({
        'name':'home',
      })
    }
  },
  async created(){
    if(this.getUsers.length===0) {
      await this.fetchTrends()}
  }

}
</script>

<style scoped>
.menu-logo{
  top: 44.5px;
  display: flex;
  color: #FFFFFF;
  display: flex;
  height: 40px;
  left: 121px;
  right: 121px;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.row{
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  position: relative;
}

.sliders{
  background: #101010;

  width: 1440px;
  height: 1024px;
  overflow: hidden;
}
</style>
