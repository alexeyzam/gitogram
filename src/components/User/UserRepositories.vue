<template>
  <UserRepository v-for="repo in repos" :repo="repo"/>
</template>

<script>
import UserRepository from "@/components/User/UserRepository";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: "UserRepositories",
  components:{UserRepository},
  setup(){
    const {getters,dispatch}= useStore()
    dispatch('userRepos/dispatchLoadRepos')
    return {
      repos: computed(()=>getters['userRepos/getUserRepo'])
    }
  },
}
</script>

<style scoped>

</style>
