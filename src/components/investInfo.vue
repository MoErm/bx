
<script>
  import tool from "../js/tool"
  import Vue from 'vue'
  let tools=new tool()


  export default {
    template:'  <div class="invest_info">\
                    <div class="title">本期理财团投资项目</div>\
                      <div class="info">\
                        <div class="info_a">理财团第1期</div>\
                        <div class="info_b">\
                          <span class="info_rate">{{rate}}<small>%</small></span>\
                          <span class="info_date">{{date}}<small>天</small></span>\
                          <span class="info_time">\
                             <em>{{second}}<br/>秒</em>\
                             <em>{{minute}}<br/>分</em>\
                             <em>{{hour}}<br/>时</em>\
                             <em>{{day}}<br/>天</em>\
                          </span>\
                      </div>\
                    </div>\
                </div>\
    ',
    data () {
      return {
        day:"00",
        hour:"00",
        minute:"00",
        second:"00",
        initTime:0,
        timeCold:null
      }
    },
    props: ['time','rate','date'],
    methods:{
      setColdTime:function(){
        var self=this
        self.initTime=this.time
        this.timeCold=setInterval(function(){
          self.initTime=self.initTime-1000;
          var d=Math.floor(self.initTime/1000/60/60/24);
          var h=Math.floor(self.initTime/1000/60/60%24);
          var m=Math.floor(self.initTime/1000/60%60);
          var s=Math.floor(self.initTime/1000%60);
          self.day=d
          self.hour=h
          self.minute=m
          self.second=s
        },1000)
      }
    },
    created:function(){
      this.setColdTime()
      console.log("created 时间组件")
    },
    destroyed:function(){
      console.log("移除 时间组件")
      clearInterval(this.timeCold)
    }
  }
</script>


