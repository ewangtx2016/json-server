<template>
  <div id="app">
    <headers></headers>
    <article class="lv_box">
      <router-view/>
    </article>
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
.lv_box{
  width: 1020px;
  margin: 20px auto;
  background: #ededed;
  padding: 20px;
  
}
</style>
