import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
@Component({
  selector: 'app-dashboard-super-admin',
  templateUrl: './dashboard-super-admin.component.html',
  styleUrls: ['./dashboard-super-admin.component.scss']
})
export class DashboardSuperAdminComponent implements OnInit {
  RegionPSPChartPie: EChartOption;
  RegionPOSChartPie: EChartOption;
  constructor() { }

  ngOnInit() {
    this.RegionPSPChartPie = {
      color: ['#DA1789', '#F1A5B1', '#D562B6', '#87099E', '#9181bd', '#9A43EC'],
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },

      xAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }

      ],
      yAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
      ],
      series: [{
        name: 'Region wise POS',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        data: [
          { value: 135, name: 'Rajkot' },
          { value: 62, name: 'Jamnagar' },
          { value: 30, name: 'Ranavav' },
          { value: 95, name: 'Junagath' },
          { value: 25, name: 'Okha' },
          { value: 45, name: 'Kalavad' }
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
    };
    this.RegionPOSChartPie = {
      color: ['#62549c', '#7566b5', '#7d6cbb', '#8877bd', '#9181bd', '#6957af'],
      tooltip: {
        show: true,
        backgroundColor: 'rgba(0, 0, 0, .8)'
      },

      xAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }

      ],
      yAxis: [{
        axisLine: {
          show: false
        },
        splitLine: {
          show: false
        }
      }
      ],
      series: [{
        name: 'Region wise POS',
        type: 'pie',
        radius: '75%',
        center: ['50%', '50%'],
        data: [
          { value: 535, name: 'Rajkot' },
          { value: 310, name: 'Baroda' },
          { value: 234, name: 'Jamnagar' },
          { value: 155, name: 'Porbandra' },
          { value: 130, name: 'Pune' },
          { value: 348, name: 'Mathura' }
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
    };
  }

}
