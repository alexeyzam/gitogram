<template>
  <div class="slider">

  <div>
    <Progress :progressReset="progressReset"/>
  </div>
    <div style="width: 900px"></div>
  <XButton @click="handlerClick"></XButton>
  </div>

</template>

<script>
import Progress from "@/components/Progress";
import XButton from "@/components/XButton";
export default {
  name: "Slider",
  components: {XButton, Progress},
  data(){
    return{
    progressReset:false,
    }
  },
  methods:{
    handlerClick(){
      this.progressReset=!this.progressReset
    }
  }
}
</script>

<style scoped>
.slider{
  display: flex;
  flex-direction: column;
}
</style>
