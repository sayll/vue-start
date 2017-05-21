<template lang="pug">
  div#app
    img(src="~@assets/logo.png")
    router-view
</template>

<script>
  import '@lib'
  export default {
    name: 'app'
  }
</script>

<style lang="postcss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    margin-top: 60px;
    & .hello{
      color: red;
    }
  }
</style>
