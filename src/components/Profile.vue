<template>
  <div class="profile">
  <img :src=src class="profile-image">
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
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 18px;
  letter-spacing: -0.1px;
}
.profile-image{
  border: 0.5px solid rgba(0, 0, 0, 0.1);
  height: 100%; border-radius: 50%
}
</style>
