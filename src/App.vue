<template>
  <div class="container">
    <Header>
      <template v-slot:top>

          <AppBar></AppBar>

      </template>

      <template v-slot:middle>
        <div class="stories">
          <Stories :users="users"/>
        </div>
      </template>
    </Header>
    <div class="content-row">
      <div class="content-col">
      <div v-for="user in users" class="content">
        <Content :user="user">
          <template v-slot:postFrame>
              <PostFrame :user="user"/>
          </template>
        </Content>
      </div>
      </div>
    </div>

  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import Stories from "@/components/Stories";
import Content from "@/components/Content";
import Header from "@/components/Header";
import PostFrame from "@/components/PostFrame";
import {mapGetters,mapActions} from 'vuex'
export default {
  name: 'App',
  components: {
    AppBar,
    Stories,
    Content,
    Header,
    PostFrame,
  },
  data(){
    return {
      users:[],
    }
  },
  computed:{
    ...mapGetters({
                 'getUsers':'getUsers'
               })
  },
  methods:{
    ...mapActions({
      'fetchTrends':'fetchTrends'
    }),
    loadStories(){
        this.users=this.getUsers
    }
  },
  async mounted() {
    await this.$store.dispatch('fetchTrends')
    this.loadStories()
  },
}
</script>

<style scoped>
@import "@/styles/app.css";





.content-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.content {
  display: flex;
  flex-direction: row;
}
.content-col{
  flex-basis: 979px;
  justify-content: center;
}

</style>
