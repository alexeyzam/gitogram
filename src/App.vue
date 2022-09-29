<template>
  <div class="container">
    <Header>
      <template v-slot:top>
        <div class="header">
          <AppBar></AppBar>
        </div>
      </template>

      <template v-slot:middle>
        <div class="stories">
          <Stories/>
        </div>
      </template>
    </Header>

    <Content>
      <template v-slot:postFrame>
        <div>
          <PostFrame/>
        </div>
      </template>
    </Content>


  </div>
</template>

<script>
import AppBar from "@/components/AppBar";
import Stories from "@/components/Stories";
import Content from "@/components/Content";
import Header from "@/components/Header";
import PostFrame from "@/components/PostFrame";

export default {
  name: 'App',
  components: {
    AppBar,
    Stories,
    Content,
    Header,
    PostFrame,
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-flow: wrap column;
}

.header {
  display: flex;
  margin: 20px;
  height: 40px;
  justify-content: space-between;
  background: #FAFAFA;
  flex-direction: row;
}

.stories {
  display: flex;
  justify-content: space-between;
  margin-top: 44px;
  background: #FAFAFA;
  flex-wrap: wrap;
}
</style>
