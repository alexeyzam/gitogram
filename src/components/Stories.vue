<template>

    <div
        v-for="user in users"
        :key="user.username"
        class="user-item"
        @click="handlerUserSelected(user)"
    >
      <img :src="user.img" :alt="user.name" class="user-image">
    </div>


</template>

<script>

export default {
  name: "Stories",
  props:{
    users:{
      default:[],
    }
  },
  methods:{
    handlerUserSelected(user){
      this.$emit('user-selected',user)
      this.$router.push({
        name:'stories',
        query:{
          id:user.id
        }
      })
    }
  }
}
</script>

<style scoped>

.user-item{
  display: flex;
  flex-flow: wrap row;
  background-color: #FAFAFA;
  height: 100%;

}
img{
  background-color: #FAFAFA;
  border-radius: 50%;
  border: 2px solid #A6328D;
  padding: 6px;
  height: 80px;
}


</style>
