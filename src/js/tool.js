/**
 * Created by huangyexin on 2016/8/4.
 */
var layer=require("./layer.js")
function Tool() {}
//处理时间
Tool.prototype.getLayer = function(){
  console.log("getlayer")
  return layer
}
Tool.prototype.layer = layer
module.exports = Tool;
