<template>

    <div class="c-following-repo">
      <div class="c-repo-user-image">
        <img :src="repo.img" class="c-repo-user-image">
      </div>
      <div class="c-user-name">
        <span>{{repo.fullUsername}}</span>
      </div>
      <div class="c-type-user">
        <span>{{repo.ownerUserType}}</span>
      </div>
      <div class="c-btn">

        <button class="btn-following">following</button>
      </div>

    </div>


</template>

<script>

export default {
  name: "UserFollowingRepo",
  props:{
    repo:{
      default:{},
      required:true,
    }
  },

}
</script>

<style scoped>
.c-user-name{
  position: absolute;
  float: left;
  height: 22px;
  left: 12.16%;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.1px;
  margin-top: 14px;
  color: #262626;
}
.c-type-user{
  float: left;
  position: absolute;
  left: 12.16%;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 42px;
  color: #9E9E9E;
}
.c-following-repo{
  display: inline-block;
  width: 740px;
  height: 72px;
}
.c-repo-user-image{
  height: 100%;
  border-radius: 50%;
  float: left;
}
.c-btn{
}

.btn-following{
  border: none;
  float: right;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translateY(+50%);
  width: 115px;
  height: 42px;
  right: 14px;

  background: #31AE54;
  border-radius: 5px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  letter-spacing: -0.15px;
  color: #FFFFFF;
}
</style>
