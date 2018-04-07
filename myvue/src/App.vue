<template>
  <div id="app">
    <headers></headers>
    <router-view/>
  </div>
</template>

<script>
import headers from './components/Header.vue'
export default {
  name: 'App',
  components: {
    'headers': headers
  }
}
</script>

<style>
*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}
</style>
