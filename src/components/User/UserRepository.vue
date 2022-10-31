<template>
<div class="user-repo">
  <PostFrame :repo="repo" :username="username"/>

</div>
</template>

<script>
import PostFrame from "@/components/PostFrame";
import {useStore} from "vuex";
import {computed} from "vue";
export default {
  name: "UserRepository",
  components:{PostFrame},
  setup(){
    const {state}=useStore()
    return {
      username: computed(()=>state.user?.data?.login)
    }
  },
  props:{
    repo:{
      default:{},
      required:true,
    }
  },

}
</script>

<style scoped>
.user-repo{
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 32px;
  gap: 10px;
  height: 242px;
  width: 740px;
  background: #FFFFFF;
  border: 1px solid #F1F1F1;
  box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}

</style>
