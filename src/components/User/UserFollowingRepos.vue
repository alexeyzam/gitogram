<template>

<UserFollowingRepo v-for="repo in repos" :repo="repo"/>

</template>

<script>
import {mapActions,mapGetters,useStore} from "vuex";
import UserFollowingRepo from "@/components/User/UserFollowingRepo";
import {computed} from "vue";

export default {
  name: "UserFollowing",
  components: {UserFollowingRepo},
  setup() {
    const {state, getters, dispatch} = useStore()
    dispatch('fetchLikedRepo')
    return {
      repos: computed(() => getters.getLikedRepoData),
    }
  },
}
</script>

<style scoped>
</style>
