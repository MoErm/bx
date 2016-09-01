<template>
  <invest-info time="600000000"  :rate="rate" :date="date"></invest-info>
  <div class="property_info">
      <p class="info_a">当前余额(元)</p>
      <p class="info_b">{{amount}}</p>
      <p class="info_c">即将到账2.01元(1个组团)</p>
      <button class="info_btn">提现</button>
  </div>

    <div class="property_list">
      <span class="item span_1">组团名称</span>
      <span class="item span_2">状态</span>
      <span class="item span_3">组团时间</span>
    </div>
  <div class="property_bg">
    <div class="property_table">
      <span class="item span_1"><small>第二期</small><br/>3人团</span>
      <span class="item span_2">2016.12.11</span>
      <span class="item span_3">组团时间</span>
    </div>
    <div class="property_table">
      <span class="item span_1"><small>第二期</small><br/>3人团</span>
      <span class="item span_2">2016.12.11</span>
      <span class="item span_3">组团时间</span>
    </div><div class="property_table">
    <span class="item span_1"><small>第二期</small><br/>3人团</span>
    <span class="item span_2">2016.12.11</span>
    <span class="item span_3"><em>88.00</em>元到账</span>
  </div><div class="property_table">
    <span class="item span_1"><small>第二期</small><br/>3人团</span>
    <span class="item span_2">2016.12.11</span>
    <span class="item span_3">组团时间</span>
  </div>
  </div>
</template>

<script>
  import InvestInfo from '../components/investInfo.vue'
export default {
  components: {
    "invest-info":InvestInfo
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      amount: 1002.32,
      date:100
    }
  },
  methods:{
    letgo: function () {
      this.$route.router.go({ path: '/invest' })
    }
  },
  created:function(){
   console.log("created Page：property")
  }
}
</script>

<style lang="sass">
  @import "property"
  @import "invest"
</style>
