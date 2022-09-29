<template>
  <div class="content">
    <div class="content-top">

      <img src="../assets/images/Josh.jpg" class="items">

      <div class="items">Josh</div>
    </div>
    <slot name="postFrame"></slot>
    <div>
    <button @click="isViewIssue=!isViewIssue">{{isViewIssue?'Hide Issue':'Show issue'}}
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" :class="isViewIssue?'':'rotate'" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.7996 10.2603C12.5177 10.5639 12.0432 10.5814 11.7397 10.2996L8 6.77348L4.26033
      10.2996C3.9568 10.5814 3.48225 10.5639 3.2004 10.2603C2.91855 9.9568 2.93612 9.48225 3.23966
       9.2004L7.48966 5.2004C7.77742 4.9332 8.22257 4.9332 8.51033 5.2004L12.7603 9.2004C13.0639 9.48225 13.0814
       9.9568 12.7996 10.2603Z" fill="#212121"
      />
    </svg>
    </button>
    </div>
    <div class="issue-comment" v-if="isViewIssue">
      <div class="issue-autor">Joshua</div><div class="issue-title"> Enable perfomance measuring</div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Content",
  components: {},
  data(){
    return {
      isViewIssue:false
    }
  }
}
</script>

<style scoped>
.content {
  margin-top: 32px;
  padding: 0px;
  gap: 18px;
  flex-direction: column;
  display: flex;
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
.issue-comment{
  display: flex;
  flex-flow: wrap row;
}
.issue-autor{
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 22px;
  color: #262626;
}
.issue-title{
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
.rotate{
  rotate: 180deg;
}

</style>
