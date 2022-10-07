<template>
<div class="progress" :style="{width: `${width}%`,height:`${height}px`,background: color}">

</div>
</template>

<script>
export default {
  name: "Progress",
  props:{
    timeProgress:{
      type:Number,
      default:5,
    },
    height:{
      type:Number,
      default: 10,
    },
    progressIncrement:{
      type:Number,
      default:0.2,
    },
    progressReset:{
      type:Boolean,
      default:false,
    },
    color:{
      type:String,
      default: 'Green',
    },
  },
  emits:['progress-finished'],
  data(){
    return {
      width:0,
      timerId:0,
    }
  },
  watch:{
    progressReset(){
     this.clearProgress()
      this.startProgress()
    }
  },
  computed:{
    interval:{
      get(){
        return this.timeProgress*1000*this.progressIncrement/100
      }
    }
  },
  methods:{
    clearProgress(){
      clearInterval(this.timerId)
      this.timerId=0
      this.width=0

    },
    stopProgress(){
      this.clearProgress()
      this.$emit('progress-finished')
    },
    addWidth(){

      this.width<100?this.width+=this.progressIncrement:this.stopProgress()
    },
    startProgress(){
      if(this.timerId!==0){
        this.clearProgress()
      }
      this.timerId=setInterval(this.addWidth,this.interval)
    }
  },
  mounted() {
    this.startProgress()
  }
}
</script>

<style scoped>
</style>
