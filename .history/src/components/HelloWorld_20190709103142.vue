<template>
    <div id="all">
      <div class="contains">
        <div id="top">导航部分</div>
        <div id="content">
            <div class="left">
              <div id="myChart1" :style="{width: '100%', height: '400px'}"></div>
            </div>
            <div class="center">
              <!-- <myEcharts></myEcharts> -->
            </div>
            <div class="right"> 
              <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
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
  data () {
    return { 
    } 
  },
  methods:{

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
        },
        drawLine1() {
          // 基于准备好的dom，初始化echarts实例
          let myChart1 = this.$echarts.init(document.getElementById('myChart1'))
          // 绘制图表
          myChart1.setOption({
              title: {
                  text: '雨量流量关系图',
                  x: 'center'
              },
              xAxis: {
                  type: 'category',
                  data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
              },
              yAxis: {
                  type: 'value'
              },
              series: [{
                  data: [820, 932, 901, 934, 1290, 1330, 1320],
                  type: 'line'
              }]
          });
      }

  },
  created(){
  },
  mounted(){
    this.drawLine();
    this.drawLine1();
     //实现自适应部分
    window.addEventListener('resize',()=>{
        this.$echarts.init(document.getElementById('myChart')).resize()
    })
    //实现自适应部分
    window.addEventListener('resize',()=>{
        this.$echarts.init(document.getElementById('myChart1')).resize()
    })
  },
}
</script>


<style>
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
    /* overflow:auto; */
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
