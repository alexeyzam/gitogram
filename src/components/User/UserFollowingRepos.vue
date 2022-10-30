<template>

<UserFollowingRepo v-for="repo in repos" :repo="repo"/>

</template>

<script>
import {mapActions,mapGetters} from "vuex";
import UserFollowingRepo from "@/components/User/UserFollowingRepo";

export default {
  name: "UserFollowing",
  components: {UserFollowingRepo},
  computed:{
    ...mapGetters({
      repos:'getLikedRepoData',
    }),
  },
  methods:{
    ...mapActions({
      'fetchLikedRepo':'fetchLikedRepo',
    }),
  },
  async created() {
    await this.fetchLikedRepo()
  }

}
</script>

<style scoped>
</style>
