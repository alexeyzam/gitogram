<template>


    <div
        v-for="repo in repos"
        :key="repo.username"
        class="user-item"
        @click="handlerRepoSelected(repo)"
    >
      <div class="user-image">
      <img :src="repo.img" :alt="repo.name" >
      </div>

      <span class="story-username" >{{repo.name}}</span>

    </div>




</template>

<script>

export default {
  name: "Stories",
  props:{
    repos:{
      default:[],
    }
  },
  methods:{
    handlerRepoSelected(repo){
      this.$emit('repo-selected',repo)
      this.$router.push({
        name:'stories',
        query:{
          id:repo.id
        }
      })
    }
  }
}
</script>

<style scoped>

.user-item{
  background-color: #FAFAFA;

  align-items: center;
  height: 116px;
  width: 92px;
  flex: none;
}
.user-image{

}
.users-stories{
  display: flex;
  flex-flow: wrap row;
  background-color: #FAFAFA;
  height: 100%;
  gap: 31px;
}
img{
  background-color: #FAFAFA;
  border-radius: 50%;
  border: 2px solid #A6328D;
  padding: 6px;
  max-width: 100%;
  max-height: 100%;
  box-sizing: border-box
}
.story-username{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 10px;
  color: #000000;
  top:10px;
  position: relative;
}


</style>
