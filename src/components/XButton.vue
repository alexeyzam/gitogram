<template>

<button
    class="btn"
>{{text}}</button>
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
  width: 270px;
  height: 44px;
  left: 53px;
  top: 591px;

  background: #31AE54;
  border-radius: 5px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #FFFFFF;
  border: none;
  /* identical to box height */
  text-align: center;
  letter-spacing: -0.15px;
}

</style>
