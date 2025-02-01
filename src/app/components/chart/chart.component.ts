import { Component } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})

export class ChartComponent {
  public chartOptions: any;

  constructor(private cryptoService: CryptoService) {
    this.chartOptions = {
      series: [
        {
          name: 'Crypto',
          data: [
            { x: new Date('2023-01-01').getTime(), y: [32, 34, 30, 33] },
            { x: new Date('2023-01-02').getTime(), y: [33, 35, 31, 32] },
            { x: new Date('2023-01-03').getTime(), y: [32, 33, 30, 31] },
            { x: new Date('2023-01-04').getTime(), y: [31, 34, 30, 33] },
            { x: new Date('2023-01-05').getTime(), y: [33, 35, 32, 34] }
          ]
        }
      ],
      chart: {
        height: 350,
        type: 'candlestick',
      },
      title: {
        text: 'Product Sales Over Time'
      },

      xaxis: {
        type: 'datetime'
      }
    };
  }

