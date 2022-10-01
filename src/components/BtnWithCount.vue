<template>
  <div class="block-wrapper">
    <div class="btn-with-count"

    >
      <div class="item btn" :style="borderRadius({btn:true})">

        <slot name="icon"/>
        {{ text }}

      </div>
      <div class="item text-box-small" :style="borderRadius({btn:false})">
        <span>
          {{ count }}
        </span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "BtnWithCount",

  methods: {
    borderRadius({btn}) {
      {
        if (this.position === 'first' && btn) {
          return {borderRadius: '6px 0px 0px 6px'}
        } else if (this.position === 'second' && !btn)
          return {borderRadius: '0px 6px 6px 0px'}
      }
    }
  },
  props: {
    count: String,
    text: String,
    position: {

      type: String,
      required: true,
      validator(v) {
        return v == 'first' || v == 'second'
      },
    }
  },

}
</script>

<style scoped>
.block-wrapper {
  display: inline-block;
}

.item {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: 'SF Pro Text';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 18px;
  color: #24292E;
  border: 1px solid rgba(27, 31, 35, 0.15);
  height: 28px;
}

.text-box-small {

  filter: drop-shadow(0px 1px 0px rgba(27, 31, 35, 0.04));
  width: 32px;
  background: #FFFFFF;
}

.btn {
  background: #FAFBFC;
  cursor: pointer;
  width: 72px;
}

.btn:hover {
  background: lightgrey;
}


.btn-with-count {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  background: #FAFBFC;
}

</style>
