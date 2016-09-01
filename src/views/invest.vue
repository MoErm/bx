<template>
  <invest-info time="600000000"  :rate="rate" :date="date"></invest-info>
  <div class="test"></div>
  <span v-text="message | reverse"></span>
  <div class="team">
    <div class="title">选择组团方式</div>
    <div class="team_flex">
      <div class="column">
        <span class="item" v-on:click="letgo" data-id="{{rate}}">{{rate}}</span>
        <span class="item" v-on:click="letgo" data-id="600">222222222</span>
      </div>
      <div class="column">
        <span class="item" v-on:click="letgo" data-id="400">333333</span>
        <span class="item" v-on:click="letgo" data-id="22">555555</span>
      </div>
      <div class="column">
        <span class="item" v-on:click="letgo" data-id="400">333333</span>
        <span class="item" v-on:click="letgo" data-id="22">555555</span>
      </div>
      <div class="column">
        <span class="item" v-on:click="letgo" data-id="400">333333</span>
        <span class="item" v-on:click="letgo" data-id="22">555555</span>
      </div>
      <div class="column">
        <span class="item" v-on:click="letgo" data-id="400">333333</span>
        <span class="item" v-on:click="letgo" data-id="22">555555</span>
      </div>
      <div class="column">
        <span class="item" v-on:click="letgo" data-id="400">333333</span>
        <span class="item" v-on:click="letgo" data-id="22">555555</span>
      </div>
      <div class="column">
        <span class="item" v-on:click="letgo" data-id="400">333333</span>
        <span class="item" v-on:click="letgo" data-id="22">555555</span>
      </div>

    </div>
  </div>
  <footer class="foot_fixed"></footer >
</template>

<script>
import tool from "../js/tool"
import Vue from "vue"
import InvestInfo from '../components/investInfo.vue'
let tools=new tool()
//      tools.layer.open({//layer控件
//        content: '通过style设置你想要的样式',
//        style: 'background-color:#09C1FF; color:#fff; border:none;',
//        time: 2
//      });

Vue.filter('reverse', function (value) {
  return value.split('').reverse().join('')
})

export default {
  components: {
    "invest-info":InvestInfo
  },
  data () {
    return {
        message:"qwerty",
        issue: '1',
        rate:'7.00',
        date:100,
        time:"01 22:33:44"
    }
  },
  methods:{
    letgo: function ($event) {
//      var tem=$event.currentTarget
//      console.log(tem.dataset.id)
      this.$route.router.go({ path: '/property' })
//      var lay=require("../js/layer")
//      console.log(tools.layer)

    }
  },
  created:function(){
    console.log("created Page： invest")
    console.log($(".title"))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import "invest"
</style>

