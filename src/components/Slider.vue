<template>
  <div class="row-slider"
       :class="isSlideActive?'active-slide':'inactive-slide'"
       :style="{left: leftPosition}">
    <ButtonLeft v-if="isVisibleLeftButton" @click="handlerLeftButton"/>
    <div v-else style="width: 40px">

    </div>
    <div class="slider">


      <div class="wrapper-profile">
        <div class="progress">
          <Progress :progressReset="progressReset" :height="2" v-if="loading"/>
        </div>
        <div class="profile">
          <Profile :src="data.img" :username="data.username"></Profile>
        </div>
      </div>
      <div class="divider"/>
      <div class="text-elem"
           v-if="isRepoReadmeLoaded"
           v-html="getRepoReadme(data)"

      />
      <div v-else class="text-elem">
        <Skeletons/>
      </div>
      <div class="divider"></div>
      <div class="button-follow">
        <x-button text="Follow"></x-button>
      </div>

    </div>
    <ButtonRight v-if="isVisibleRightButton" @click="handlerRightButton"/>
  </div>

</template>

<script>
import Progress from "@/components/Progress";
import XButton from "@/components/XButton";
import Profile from "@/components/Profile";
import ButtonLeft from "@/components/ButtonLeft";
import ButtonRight from "@/components/ButtonRight";
import {mapGetters, mapActions} from "vuex";
import Skeletons from "@/components/Skeletons";

export default {
  name: "Slider",
  components: {ButtonRight, ButtonLeft, Profile, XButton, Progress, Skeletons},
  props: {
    data: {required: true},
    index: {type: Number, required: true}
  },
  data() {
    return {
      progressReset: false,
      username: 'Josh',
      loading: false,
    }
  },
      computed: {
        ...mapGetters({
          'users': 'getUsers',
          'getRepoReadme':'getRepoReadme',
        }),
        activeUserId() {
          return this.$route?.query?.id
        },
        activeUserIndex() {
          return this.users.findIndex(v => v.id.toString() === this.activeUserId)
        },
        isSlideActive() {
          return this.activeUserId === this.data.id.toString()
        },
        isVisibleLeftButton() {
          if (this.index === 0) return false
          return this.activeUserId === this.data.id.toString()
        },
        isVisibleRightButton() {
          if (this.index === 9) return false
          return this.activeUserId === this.data.id.toString()
        },
        leftPosition() {
          // const windowWidth=window.innerWidth
          const windowWidth = 1440
          if (this.isSlideActive) return `${windowWidth / 2 - 375 / 2}px`
          return `${(this.index - this.activeUserIndex) * 375 + windowWidth / 2 - 375 / 2}px`
        },
        isRepoReadmeLoaded(){
          if (!this.$store.state.repoReadmeData.find(v=>v.id===this.data.id)) return false
          return true
        }
      },
      methods: {
        ...mapActions({'fetchReadme': 'fetchReadme'}),
        handlerRightButton() {
          this.$router.push({
            name: this.$route.name,
            query: {
              id: this.users[this.index + 1].id
            }
          })
        },
        handlerLeftButton() {

          this.$router.push({
            name: this.$route.name,
            query: {
              id: this.users[this.index - 1].id
            }
          })
        },
        async loadReadme() {
          if (this.isSlideActive && this.getRepoReadme(this.data) === undefined) {
            this.loading = true
            await this.fetchReadme(this.data)
            this.loading = false
          }
        }
      },
  async mounted() {
    await this.loadReadme()
  },
  async updated() {
      await this.loadReadme()
  }

}
</script>

<style scoped>
.row-slider {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  overflow: visible;


}

.slider {
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 1px solid black;
  background: #FFFFFF;
  border-radius: 6.45277px;
  width: 302px;
  height: 538px;
}

.button-follow {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 11px;
  gap: 10px;
  /*position: absolute;*/
  left: 0%;
  right: 0%;
  top: 84.86%;
  bottom: 14.99%;
  height: 80px;
}

.profile {
  display: flex;
  flex-flow: wrap row;
  align-items: center;
  height: 26px;
  margin-left: 9.66px;
  margin-bottom: 10.49px;
  justify-content: flex-start;
}

.wrapper-profile {
  display: flex;
  height: 67px;
  flex-direction: column;
  justify-content: space-around;
}

.progress {
  display: flex;
  flex-direction: row;
  width: 286px;
  align-self: center;
}

.active-slide {
  transform: scale(1.25);
  top: 212px;
  position: absolute;
  /*left: 50%;*/
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.051) 100%);
  z-index: 10000;
}

.inactive-slide {
  top: 277px;
  position: absolute;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.051) 100%);
  opacity: 0.3;

}

.text-elem {
  padding-left: 22px;
  padding-right: 22px;
  /*position: absolute;*/
  top: 67px;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  flex-grow: 1;
  overflow: scroll;
  white-space: break-spaces;
  width: 250px;
  height: 200px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 160%;
}

.divider {
  height: 0.81px;
  background: #CACACA;
}
</style>
