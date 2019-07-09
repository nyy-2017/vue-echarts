<template>
    <div class="pie">
        <div id="pie1">
            <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
            <div id="main1" style="float:left;width:100%;height: 400px"></div>
        </div>
        <!-- <div id="pie2">
            <div id="main2" style="float:left;width:100%;height: 400px"></div>
        </div> -->
    </div>
</template>
 
<script>
    var echarts = require('echarts');
 
    export default {
        data() {
            return {
                // 数据
                data1: [],
            }
        },
        mounted() {
            this.initData();
        },
        methods: {
            //初始化数据
            initData() {
                var myChart = echarts.init(document.getElementById('main1'));
                window.onresize = myChart.resize
                // 绘制图表
                myChart.setOption({
                    title : {
                        text: '某站点用户访问来源',
                        subtext: '纯属虚构',
                        x:'center'
                    },
                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        bottom: 'bottom',
                        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                    },
                    series : [
                        {
                            name: '访问来源',
                            type: 'pie',
                            radius : '55%',
                            center: ['50%', '60%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:234, name:'联盟广告'},
                                {value:135, name:'视频广告'},
                                {value:1548, name:'搜索引擎'}
                            ],
                            itemStyle: {
                                emphasis: {
                                    shadowBlur: 10,
                                    shadowOffsetX: 0,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            }
                        }
                    ]
                });
                // let _this = this;
                // window.addEventListener("resize",function(){
                //     _this.ChartLineGraph.resize();
                // })
            },
        }
    }
</script>
 
 