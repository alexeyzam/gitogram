<template>

    <div
        v-for="user in users"
        :key="user.name"
        class="user-item"
    >
      <img :src="user.img" :alt="user.name">
    </div>


</template>

<script>

export default {
  name: "Stories",
  data(){
    return {
      users:[
        {
          name:'Josh',
        img:'@src/assets/images/Josh.jpg',
        },
        {
          name:'Andrew',
          img:'@src/assets/images/Andrew.jpg',
        },
        {
          name:'Camille',
          img:'@src/assets/images/Camille.jpg',
        },
        {
          name:'Marselle',
          img:'@src/assets/images/Marselle.jpg',
        },
        {
          name:'Piter',
          img:'@src/assets/images/Piter.jpg',
        },
        {
          name:'Can',
          img:'@src/assets/images/Can.jpg',
        },
        {
          name:'Iloveanime',
          img:'@src/assets/images/Iloveanime.jpg',
        },
        {
          name:'Diself',
          img:'@src/assets/images/Diself.jpg',
        },
        {
          name:'Gaptor',
          img:'@src/assets/images/Gaptor.jpg',
        },
        {
          name:'Camilr',
          img:'@src/assets/images/Camilr.jpg'
        }

      ]
    }
  },
  mounted() {
    this.users.forEach(user=>user.img=require.context('../assets/images', false, /\.jpg$/)('./'+user.name+'.jpg'))
  }
}
</script>

<style scoped>

.user-item{
  display: flex;
  flex-flow: wrap row;
  background-color: #FAFAFA;
  height: 100%;

}
img{
  background-color: #FAFAFA;
}

</style>
