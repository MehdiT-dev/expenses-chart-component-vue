<template>
  <Expenses/>
</template>

<script>
import Expenses from '@/views/Expenses.vue'

export default {
  name: 'App',
  components: {
    Expenses
  }
}
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'DM Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: $cream;
  margin: 0 auto;
  padding: 15px;
  max-width: 1440px;
  min-height: 100vh;
  font-size: 1em;
}
</style>
