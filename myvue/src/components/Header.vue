<template>
  <div class="headers">
 <nav class="navbar navbar-default">
  <div class="container-fluid" style="padding-top:6px;">
    <!-- Brand and toggle get grouped for better mobile display -->
        <div class="btn-group"  role="group" aria-label="...">
            <router-link to="/"><button type="button" class="btn btn-default">首页</button></router-link>
            <router-link to="/info"><button type="button" class="btn btn-default">INFO</button></router-link>
            <router-link to="/list"><button type="button" class="btn btn-default">LIST<span class="badge">{{getnub}}</span></button></router-link>
            
        </div>
        <button class="btn btn-primary pull-right" type="button">
                添加 +
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
      listNub: 0
    };
  },
  computed: {
    getnub(){
      this.getListDataLen()
      return this.$store.state.count > 0 ?   this.$store.state.count :  this.listNub
    }
  },
  methods: {
    getListDataLen(){
      this.$http.get("http://localhost:3000/users").then(response => {
        this.listNub = response.data.length;
      });
    }
  },
  created(){
    this.getListDataLen()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
