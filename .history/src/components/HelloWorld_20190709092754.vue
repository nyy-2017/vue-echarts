<template>
    <div id="all">
      <div class="contains">
        <div id="top">导航部分</div>
        <div id="content">
            <div class="left">
            </div>
            <div class="center">
              <myEcharts></myEcharts>
            </div>
            <div class="right"> 
              <div class="chart" id="myChart" :style="{width: '300px', height: '300px'}"></div>
                  <div id="but">
                    <div id="add" class="button" @click="add">放大</div>
                    <div id="reduce" class="button" @click="reduce">缩小</div>
                  </div>
            </div>
        </div>
        <div id="bottom">bottom</div>   
      </div>
    </div>
</template>


<script>
import myEcharts from "../demo/myEcharts.vue"
// 引入基本模板
let echarts = require('echarts/lib/echarts')
// 引入柱状图组件
require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  components: {   
    myEcharts  
  },
  computed: {
    style: function () {
      return "width:"+this.width+"px;height:"+this.height+"px"
    }
  },
  data () {
    return { 
      size:300,
    } 
  },
  methods:{
    add:function(){
      if(this.size<900){
          this.size=this.size+50;}
        else{
          this.size=900;
        }

      },
    reduce:function(){
      if(this.size>300){
        this.size=this.size-50;}
        else{
          this.size=300;
        }
      },
    drawLine(){
            // 基于准备好的dom，初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            // 绘制图表
            myChart.setOption({
                title: { text: '在Vue中使用echarts' },
                tooltip: {},
                xAxis: {
                    data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });
            myChart.setOption(option);
              // 基于准备好的dom，初始化echarts实例
            vm.$watch("size",function(newVal, oldVal){
              var dom=document.getElementById('panel')
              dom.innerHTML='<div class="chart" id="myChart" style="width:'+newVal+'px;height:'+newVal+'px"></div>';
              var myChart = echarts.init(document.getElementById('myChart'));
              myChart.setOption(option);
            })
    }
  },
  created(){
  },
  mounted(){
    this.drawLine();
  },
}
</script>


<style>
.button{
      float:left;
      width:150px;
      height:60px;
      color:#CC3333;
      border:2px solid #CC3333;
      background-color:#3399CC;
      line-height:60px;
      text-align:center;
      font-size:36px;
    }
    .button:hover{
      float:left;
      width:150px;
      height:60px;
      color:#3399CC;
      border:2px solid #3399CC;
      background-color:#CC3333;
      line-height:60px;
      text-align:center;
      font-size:36px;
    }
   
    .chart{
      margin:0 auto;
    }
    #but{
      width:310px;
      margin:0 auto;
    }




#chart{
 display:flex;
 }
#all{
   margin:0;
   padding:0;
   width: 100%;
   height: 100%;
 }
 .contains{
   width: 100%;
   min-width: 500px;
 }
#top{
    position:absolute;
    top:0;
    left:0;
    background-color:#ccc;
    height:60px;
    line-height: 60px;
    width:100%;
    z-index:100;
}
#bottom{
    position:absolute;
    bottom:0;
    left:0;
    background-color:#88D6E9;
    height:100px;
    width:100%;
    z-index:100;
}

#content{
    position:absolute;
    width:100%;
    overflow:auto;
    background-color:#F0E6A2;
    bottom:100px;
    top:60px;
    left: 0;
    right: 0;
    z-index:90;
    display: flex;
    flex-direction: row;
}
  .left{
    width: 30%;
    height: 100%;
  }
  .center{
    width: 40%;
    height: 100%;
    background-color: skyblue;

  }
  .right{
    width: 30%;
    height: 100%;
  }
</style>
