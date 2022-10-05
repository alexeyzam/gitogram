<template>
  <div class="logo" :style="{'font-size': `${fontSize}px`}" ref="logoDiv">
    <span>{{ name }} /</span>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ['name'],
  data() {
    return {
      fontSize: 35
    }
  },
  mounted(){
    const height=this.$refs.logoDiv.clientHeight
    if(height!=40){
    this.fontSize=height*0.73
    }
  },
}
</script>

<style scoped>
.logo {
  display: flex;
  font-size: 35px;
  font-family: 'Inter';
  font-weight: bold;
  white-space: nowrap;
  align-items: center;
}
</style>
