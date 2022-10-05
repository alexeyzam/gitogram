<template>
  <div class="container">
    <Header>
      <template v-slot:top>

          <AppBar></AppBar>

      </template>

      <template v-slot:middle>
        <div class="stories">
          <Stories/>
        </div>
      </template>
    </Header>
    <div class="content-row">
      <div class="content">

        <Content>
          <template v-slot:postFrame>

            <PostFrame/>

          </template>
        </Content>
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



.stories {
  display: flex;
  justify-content: space-between;
  padding-top: 44px;
  background: #FAFAFA;
  flex-wrap: wrap;
}

.content-row {
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.content {
  display: flex;
  flex-direction: row;
  flex-basis: 979px;
  justify-content: center;
}


</style>
