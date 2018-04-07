<template>
  <div class="headers">
 <nav class="navbar navbar-default">
  <div class="container-fluid" style="padding-top:6px;">
    <!-- Brand and toggle get grouped for better mobile display -->
        <div class="btn-group"  role="group" aria-label="...">
            <router-link to="/"><button type="button" class="btn btn-default">首页</button></router-link>
            <router-link to="/info"><button type="button" class="btn btn-default">INFO</button></router-link>
            <router-link to="/list"><button type="button" class="btn btn-default">LIST</button></router-link>
            
        </div>
        <button class="btn btn-primary pull-right" type="button">
                BIG`LV <span class="badge">4</span>
        </button>
  </div><!-- /.container-fluid -->
</nav>
  </div>
</template>

<script>
export default {
  name: "headers",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
