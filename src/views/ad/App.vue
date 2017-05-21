<template lang="pug">
  div#app
    img(src="../../assets/logo.png")
    <i class="icon iconfont icon-delete"></i>
    p 234
</template>

<script>
  import '../../assets/js/Lib';

  export default {
    name: 'app'
  }
</script>

<style lang="postcss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
    display: flex;
    & .hello{
      color: red;
    }
  }
</style>
