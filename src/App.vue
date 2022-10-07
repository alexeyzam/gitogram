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
import {getTrendigs} from "@/api/rest/trendings";

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
  methods:{
    loadStories({items,links}){
      items.forEach(v=>{
        this.users.push(
            {
              username:v.owner.login,
              img:v.owner.avatar_url,
              name:v.name,
              description:v.description,
              issues_url:v.issues_url.replace('{/number}',''),
              stars:v.stargazers_count,
              forks:v.forks
            }
            )

      })

    }
  },
  async mounted() {
    const data= await getTrendigs({lang:'react'})
    this.loadStories({
      items:data.data.items,
      links:data.headers.link.split(',')})
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
