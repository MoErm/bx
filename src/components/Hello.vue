<template>
  <div class="hello">
    <h1 v-on:click="letgo">{{ msg }}</h1>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!1111'
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
