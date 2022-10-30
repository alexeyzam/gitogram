<template>
  <UserRepository v-for="repo in repos" :repo="repo"/>
</template>

<script>
import UserRepository from "@/components/User/UserRepository";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "UserRepositories",
  components:{UserRepository},
  computed: {
    ...mapGetters({
      repos: 'userRepos/getUserRepo',
    })
  },
  methods:{
    ...mapActions({
      dispatchLoadRepos:'userRepos/dispatchLoadRepos',
    })
  },
  async created() {
    console.log('UserRepositories')
    await this.dispatchLoadRepos()
  }
}
</script>

<style scoped>

</style>
