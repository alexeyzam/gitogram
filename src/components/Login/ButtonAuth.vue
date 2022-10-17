<template>
  <button class="btn">
    <div class="btn-content">
    <div>
      <span class="btn-text">Authorize with github</span>
    </div>
    <div class="github-icon">
      <GitHubIcon />
    </div>
    </div>
  </button>
</template>

<script>
import GitHubIcon from "@/components/Login/GitHubIcon";
export default {
  name: "ButtonAuth",
  components:{GitHubIcon},
}
</script>

<style scoped>
.btn-text{
  position: relative;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.15px;
  color: #FFFFFF;
  flex-grow: 1;
}
.btn-content{
  width: 204px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

}
.btn{
  /*!* Button *!*/

  /*!* Auto layout *!*/
  display: flex;
  flex-direction: row;
  align-items: center;
  /*align-items: flex-start;*/
  /*padding: 10px 24px;*/
  /*gap: 10px;*/
  justify-content: center;

  width: 252px;
  height: 44px;

  background: #31AE54;
  border-radius: 5px;
  border: none;
}
.github-icon{

  position: relative;
}

</style>
