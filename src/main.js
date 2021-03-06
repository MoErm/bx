import Vue from 'vue'
import $ from 'zepto'
import Router from 'vue-router'


Vue.use(Router)

// register filters globally
//Vue.filter('fromNow', fromNow)
//Vue.filter('domain', domain)


// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({})
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new Router()

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/invest': {
    component: function (resolve) {
      console.log("路由invest")
      require(['./views/invest.vue'], resolve)
    }
  },
  '/property': {
    component: function (resolve) {
      require(['./views/property.vue'], resolve)
    }
  }
})

router.beforeEach(function () {
  window.scrollTo(0, 0)
})
//路由重定向
router.redirect({
  // 任意未匹配路径到 /home
  '*': '/invest',

  //'/financialPlanner': '/financialPlanner/customers',
  //// '/vip': '/vip/homepage',
  //'/vip': '/vip/expect',	//敬请期待
  //'/help':'/help/index',
  //'/youpin':'/youpin/index'

  // 重定向可以包含动态片段，而且重定向片段必须匹配
  //'/user/:userId': '/profile/:userId',

});

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(App, '#app')
