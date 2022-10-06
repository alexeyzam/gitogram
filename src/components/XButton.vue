<template>
  <div :style="{'align-self': align}">
<button
    :style="{color: color,backgroundColor: backgroundColor}"
    class="btn"
>{{text}}</button>
  </div>
</template>

<script>
export default {
  name: "XButton",
  props:{
    text:{
      type:String,
      default:'Submit'
    },
    color:{
      type:String,
      default: 'White',
    },
    backgroundColor:{
      type:String,
      default: 'Green',
    },
    align:{
      type:String,
      default:'end'
    }
  }
}
</script>

<style scoped>
.btn{
  border-radius: 5px;
  font-size: 16px;
}

</style>
