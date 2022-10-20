<template>
  <div class="container" >
    <router-view></router-view>
<!--   <router-view v-if="isLoggedIn"/>-->
<!--    <LoginPage v-if="isLoggedIn===false"/>-->
  </div>


</template>

<script>
import {mapState,mapActions} from 'vuex'
import LoginPage from "@/components/Login/LoginPage";

export default {
  name: 'App',
  components: {LoginPage},
}
</script>

<style scoped>
</style>
