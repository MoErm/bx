<template>
  <div class="hello">
    <h1 v-on:click="letgo">{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      msg: 'Hello World!111',
      list:[{
        issue: '1',
        rate:7,
        data:100,
        time:"01 22:33:44"
      }]

    }
  },
  methods:{
    letgo: function () {
      this.$route.router.go({ path: '/hello2' })
    }
  },
  created:function(){
    console.log("created hello1")
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
