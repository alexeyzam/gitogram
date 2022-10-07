<template>
  <div class="row">
  <div class="slider">

  <div>
    <Progress :progressReset="progressReset"/>
  </div>
    <Profile :src="userImage" :username="username"></Profile>
    <div class="text-elem" style="white-space: pre"><p>
      {{testText}}
    </p></div>

  <XButton @click="handlerClick" :align="'center'" :text="'Follow'"></XButton>
  </div>
  </div>

</template>

<script>
import Progress from "@/components/Progress";
import XButton from "@/components/XButton";
import Profile from "@/components/Profile";
export default {
  name: "Slider",
  components: {Profile, XButton, Progress},
  data(){
    return{
    progressReset:false,
      username:'Josh',
      testText:`
  Обратите внимание что необходимо реализовать только один компонент (данные могут быть тестовые).
Саму страницу пока верстать не нужно.
Компонент можно реализовать непосредственно в среде Storybook и мы используем его когда придет время.
Естественно этот компонент состоит из других, более мелких компонентов:
    - Сам компонент слайда
    - Компонент прогресса
    - Компонент пользователя (можно использовать из готового компонента)
    - Кнопка
        `
    }
  },
  computed:{
    userImage(){
      return require.context('../assets/images', false, /\.jpg$/)('./'+this.username+'.jpg')
    }
  },
  methods:{
    handlerClick(){
    }
  }
}
</script>

<style scoped>
.row{
  display: flex;
  justify-content: center;

}
.slider{
  display: flex;
  flex-direction: column;
  width: 800px;
  align-self: center;
  border: 1px solid black;

}
</style>
