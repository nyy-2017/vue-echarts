# layout

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
#vue echarts 图标自适应方法及案列：
案列：
1.正文配置
    npm 导入eachart，并在main.js配置。把echarts挂载在 prototype上方便页面调用
    import echarts from 'echarts'
    Vue.prototype.$echarts = echarts 

2.页面使用
    为了实现自适应，所以在行内样式的width设置为100%。
<template>
    <div>
        <div id="myChart" :style="{width: '100%', height: '400px'}"></div>
    </div>
</template>

js部分：
<script>
    export default {
        data() {
            return { }
        },
        mounted() {
            this.drawLine();
            //实现自适应部分
            window.addEventListener('resize',()=>{
                this.$echarts.init(document.getElementById('myChart')).resize()
            })
        },
        methods: {
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                // 绘制图表
                myChart.setOption({
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
        }
    }
</script>


3.实现自适应的主要代码：
    注意： Internet Explorer 8 及更早IE版本不支持 addEventListener() 方法，，Opera 7.0 及 Opera 更早版本也不支持。但是vue框架下不用考虑这些，因为vue ~ 本身也不支持ie8啊以下~~~
    window.addEventListener('resize',()=>{
            this.$echarts.init(document.getElementById('myChart')).resize()
    })
    兼容性写法一：
    //注意使用es6的箭头函数，不然this的指向会改变
    window.onresize = () => {
            this.$echarts.init(document.getElementById('myChart')).resize();
    }
    兼容性写法二：
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    window.onresize = function(){
            myChart .resize();
    }
