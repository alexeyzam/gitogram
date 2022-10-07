<template>
  <div class="profile">
  <img :src=src style="height: 100%">
  <div class="items">{{username}}</div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  props:{
    username:{
      type:String,
      required:true,
    },
    src:{
      type:String,
      required: false,
      default:require.context('../assets/images', false, /\.jpg$/)('./Josh.jpg')
    }
  }
}
</script>

<style scoped>
.profile{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
}
</style>
