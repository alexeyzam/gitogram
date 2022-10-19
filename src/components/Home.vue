<template>
  <div class="container">
    <div class="header">
    <Header>
      <template v-slot:top>
      <div class="appbar">
          <AppBar></AppBar>
      </div>
      </template>

      <template v-slot:middle>
        <div class="stories">
          <Stories :users="users"/>
        </div>
      </template>
    </Header>
    </div>
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
  name: 'Home',
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
    // await this.$store.dispatch('fetchTrends')
    await this.$store.dispatch('fetchStarredRepo')
    this.loadStories()
  },
}
</script>

<style scoped>
@import "@/styles/app.css";


.header{
  background: #FAFAFA;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.appbar{
  margin-top: 43.5px;
  /*margin-left: 121px;*/
  /*margin-right: 121px;*/
}

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
