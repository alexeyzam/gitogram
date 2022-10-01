<template>
  <div class="content-wrapper">
    <div class="content-top">

      <img src="../assets/images/Josh.jpg" class="items">

      <div class="items">Josh</div>
    </div>

    <slot name="postFrame"></slot>
    <Toggler v-model="isViewIssue"/>


    <div class="issue-comment" v-if="isViewIssue">
      <div class="issue-autor">Joshua</div>
      <div class="issue-title"> Enable perfomance measuring</div>
    </div>
  </div>
</template>

<script>
import Toggler from "@/components/Toggler";

export default {
  name: "Content",
  components: {Toggler},
  data() {
    return {
      isViewIssue: false
    }
  }
}
</script>

<style scoped>
.content-wrapper {
  margin-top: 32px;
  padding: 0px;
  gap: 18px;
  flex-direction: column;
  display: flex;
  align-self: flex-start;
  flex-grow: 1;
  flex-shrink: 1;
}

.content-top {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  height: 44px;
  justify-content: flex-start;
  padding: 0px;
  gap: 14px;


}

.issue-comment {
  display: flex;
  flex-flow: wrap row;
}

.issue-autor {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #262626;
}

.issue-title {
  margin-left: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
}

.items {
  height: 100%;
  display: flex;
  margin: 2px;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;

}

</style>
