<template>
  <div class="container" >
   <router-view v-if="isLoggedIn"/>
    <LoginPage v-else/>
  </div>


</template>

<script>
import {mapState,mapActions} from 'vuex'
import LoginPage from "@/components/Login/LoginPage";

export default {
  name: 'App',
  components: {LoginPage},
  computed: {
    ...mapState({
      isLoggedIn: state=>state.user.isLoggedIn
    })
  },

}
</script>

<style scoped>
</style>
