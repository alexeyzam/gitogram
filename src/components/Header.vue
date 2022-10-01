<template>
  <div class="header"></div>
    <slot name="top"></slot>
    <slot name="middle"></slot>
  <div></div>
</template>

<script>
export default {
  name: "Header",
}
</script>
<style scoped>
.header{
  background: #FAFAFA;
}
</style>


