<template>
  <div class="list">
     <table class="table table-group">
      <thead>
        <tr>
          <th class="text-center">ID</th>
          <th class="text-center">姓名</th>
          <th class="text-center">邮箱</th>
          <th class="text-center">电话</th>
          <th class="text-center">website</th>
          <th class="text-center">操作</th>
        </tr>
      </thead>
      <tbody>
          <tr class="active" v-for="(val,index) in listData" :key="index">
            <td>{{val.id}}</td>
            <td>{{val.name}}</td>
            <td>{{val.email}}</td>
            <td>{{val.phone}}</td>
            <td>{{val.website}}</td>
            <td><div class="btn-toolbar text-center"><button class="btn btn-default btn-sm">查看</button><button class="btn btn-default  btn-sm">修改</button><button @click="delthis(val.id)" class="btn btn-danger  btn-sm">删除</button></div></td>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "list",
  data() {
    return {
      listData: {},
      listLength: 0
    }
  },
  methods: {
    getData() {
      this.$http.get("http://localhost:3000/users").then(response => {
        this.listData = response.data
        this.listLength = response.data.length - 1
      });
    },
    delthis(thisnub){
      let _this = this
      this.$http.delete("http://localhost:3000/users/"+thisnub).then(response => {
        _this.getData()
        _this.$store.commit('setNub', _this.listLength)
      });
    }
  },
  created() {
    this.getData()
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
