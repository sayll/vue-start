<template lang="pug">
  div#app
    img(src="../../../assets/logo.png")
    .hello  2344
</template>

<script>
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
