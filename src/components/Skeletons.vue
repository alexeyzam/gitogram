<template>
  <div class="rectangle-main">
  </div>
  <div class="block-1">
    <Skeleton />
  </div>
  <div class="block-2">
    <Skeleton/>
  </div>
</template>

<script>
import Skeleton from "@/components/Skeleton";
export default {
  name: "Skeletons",
  components:{Skeleton}
}
</script>

<style scoped>
.rectangle-main{
  margin-top:17.96px;
  height: 136px;
  border-radius: 4px;
  background: #DEDEDE;

  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 60.81%;
}
.block-1{
  margin-top: 22px;
}

.block-2{
  margin-top: 18px;

  /*flex-grow: 1;*/
}



</style>
