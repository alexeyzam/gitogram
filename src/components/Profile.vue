<template>
  <div>
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
      required: true,
    }
  }
}
</script>

<style scoped>
</style>
