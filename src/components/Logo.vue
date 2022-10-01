<template>
  <div class="logo">
    <span>{{ name }} /</span>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: ['name']
}
</script>

<style scoped>
.logo {
  font-size: 35px;
  font-family: 'Inter';
  font-weight: bold;
  white-space: nowrap;
}
</style>
