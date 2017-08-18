import React , {Component} from 'react';
import echarts from 'echarts';
import { Row, Col, Card } from 'antd';

export default class ChartComponent extends Component {
  renderChart = () => {
    this.chart1 = echarts.init(this.refs.chart1);
    this.options1 = {
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data:[
            {value:235, name:'视频广告'},
            {value:274, name:'联盟广告'},
            {value:310, name:'邮件营销'},
            {value:335, name:'直接访问'},
            {value:400, name:'搜索引擎'}
          ],
          roseType: 'angle',
          itemStyle: {
            normal: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.chart1.setOption(this.options1);

    this.chart2 = echarts.init(this.refs.chart2);
    this.options2 = {
      tooltip: {},
      xAxis: {
        data: ["管理员","杨慧娟","鹿晗1","鹿晗2","鹿晗3","鹿晗4"]
      },
      yAxis: {},
      series: [{
        name: '登录次数',
        type: 'bar',
        data: [15, 20, 36, 10, 10, 20]
      }]
    }
    this.chart2.setOption(this.options2);

    this.chart3 = echarts.init(this.refs.chart3);
    this.options3 = {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['最高气温','最低气温']
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data:['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          formatter: '{value} °C'
        }
      },
      series: [
        {
          name:'最高气温',
          type:'line',
          data:[30, 31, 34, 36, 40, 32, 31],
          markPoint: {
            data: [
              {type: 'max', name:'最大值'},
              {type: 'min', name:'最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name:'平均值'}
            ]
          }
        },
        {
          name:'最低气温',
          type:'line',
          data:[1, -2, 2, 5, 3, 2, 0],
          markPoint: {
            data: [
              {type: 'max', name:'最大值'},
              {type: 'min', name:'最小值'}
            ]
          },
          markLine: {
            data: [
              {type: 'average', name:'平均值'}
            ]
          }
        }
      ]
    };
    this.chart3.setOption(this.options3);
  }
  componentDidMount() {
    this.renderChart()
  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card title="专题访问统计" extra={<a>详情</a>}>
              <div ref="chart1" style={{width:"100%",height: '300px'}}></div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="登录统计" extra={<a>详情</a>}>
              <div ref="chart2" style={{width:"100%",height: '300px'}}></div>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="温度统计" extra={<a>详情</a>}>
              <div ref="chart3" style={{width:"100%",height: '300px'}}></div>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
