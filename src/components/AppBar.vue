<template>
  <div class="header-appbar" :style="{height: `${height}px`}">
    <Logo name="Gitogram" class="menu-logo" @click="handlerHomeClick"></Logo>
    <div class="action-menu">
      <svg
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="menu-items"
          @click="handlerHomeClick"
      >
        <path
            d="M10.0692 1.06704C11.1853 0.128491 12.8147 0.128491 13.9308 1.06704L22.9308 8.63522C23.6087 9.20524 24 10.0456 24 10.9313V23.5C24 24.6046 23.1046 25.5 22 25.5H16.5C15.3954 25.5 14.5 24.6046 14.5 23.5V16.5H9.5V23.5C9.5 24.6046 8.60457 25.5 7.5 25.5H2C0.895431 25.5 0 24.6046 0 23.5V10.9313C0 10.0456 0.391346 9.20524 1.0692 8.63522L10.0692 1.06704Z"
            fill="#262626"/>
      </svg>
      <img :src="userImage" alt="UserImage" class="menu-items round-image" @click="handlerUserClicked">
      <svg width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg"
           @click="handlerLogout" class="menu-items">
        <path
            d="M13 0.942731V8.625L13.0007 9.25621L22.3025 9.255L20.1495 7.10032C19.8167 6.76743 19.7865 6.2466 20.0589 5.87963L20.1497 5.7745C20.4826 5.44172 21.0034 5.41155 21.3704 5.68393L21.4755 5.77472L25.2213 9.52178C25.5538 9.85436 25.5842 10.3746 25.3125 10.7416L25.2219 10.8467L21.4762 14.601C21.1105 14.9676 20.5169 14.9683 20.1503 14.6026C19.8171 14.2701 19.7863 13.7493 20.0582 13.382L20.1488 13.2767L22.29 11.13L13.0007 11.1312L13 19.5625C13 20.1455 12.4735 20.5871 11.8994 20.4857L1.27444 18.6091C0.826512 18.53 0.5 18.1408 0.5 17.6859V2.68752C0.5 2.22839 0.832518 1.83681 1.28558 1.76241L11.9106 0.0176215C12.4813 -0.0761076 13 0.364318 13 0.942731ZM8.62769 9.87502C7.93585 9.87502 7.375 10.4359 7.375 11.1277C7.375 11.8196 7.93585 12.3804 8.62769 12.3804C9.31953 12.3804 9.88037 11.8196 9.88037 11.1277C9.88037 10.4359 9.31953 9.87502 8.62769 9.87502ZM14.25 18.6266L15.2064 18.6268L15.3338 18.6183C15.7919 18.556 16.1447 18.163 16.1439 17.6878L16.135 12.375H14.25V18.6266ZM14.2525 8.00002L14.25 6.4067V1.75002L15.1816 1.75002C15.6556 1.75002 16.0476 2.10192 16.1103 2.55891L16.1191 2.68597L16.1275 8.00002H14.2525Z"
            fill="#262626"/>
      </svg>

    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo";
import {mapState} from "vuex";

export default {
  name: "AppBar",
  props: {
    height: {
      type: Number,
      default: 40,
    }
  },
  components: {Logo},
  data() {
    return {
      title: 'Gitogram/',
    }
  },
  computed: {
    ...mapState({
      // userImage: state=>state.user?.data?.avatar_url,
      userImage: state=>state.user?.userImage,
    })
  },
  methods: {
    handlerLogout() {
      this.$store.dispatch('user/dispatchUserLogout')
    },
    handlerUserClicked(){
      this.$router.push({name:'user-own-repos'})
    },
    handlerHomeClick(){
      this.$router.push({name:'home'})
    }
  }
}
</script>

<style scoped>
.header-appbar {
  display: flex;
  justify-content: space-between;
  background: #FAFAFA;
  flex-direction: row;
}
.action-menu {
  display: flex;
  height: 100%;
  align-items: center;
  background: #FAFAFA;
}

.menu-logo {
  display: flex;
  height: 100%;
  background: #FAFAFA;
}

.menu-items {
  display: inline-flex;
  height: 100%;
  cursor: pointer;
  background: #FAFAFA;
  margin: 4px;
}
.round-image{
  border-radius: 50%;

}

</style>
