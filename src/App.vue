<template>
  <div class="container" >
   <router-view v-if="isUserLogged"/>
    <LoginPage v-else/>
  </div>


</template>

<script>
import {mapState} from 'vuex'
import LoginPage from "@/components/Login/LoginPage";

export default {
  name: 'App',
  components: {LoginPage},
  computed: {
    ...mapState({
      'isUserLogged': 'isUserLogged'
    })
  }
}
</script>

<style scoped>
</style>
