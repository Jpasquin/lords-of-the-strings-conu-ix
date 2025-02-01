import { Component } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';

@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent {
  public chartOptions: any;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Sales',
          data: [30, 40, 35, 50, 49, 60, 70]
        }
      ],
      chart: {
        height: 350,
        type: 'line'
      },
      title: {
        text: 'Product Sales Over Time'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
      }
    };
  }
}
