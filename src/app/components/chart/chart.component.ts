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
          data: [],
          background: '#121212'
        }
      ],
      chart: {
        height: 350,
        type: 'candlestick',
      },
      title: {
        text: 'Cryptocurrencies'
      },
      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#FFFFFF'
          }
        }
      },
      yaxis: [
        {
          labels: {
            style: {
              colors: '#FFFFFF'
            }
          },
          opposite: true
        }
      ],
      theme: {
        mode: 'dark',
      }

    };
  }

  ngOnInit(): void {
    this.cryptoService
      .setSymbol('BTC')
      .setCurrency('USD')
      .setLimit(30)
      .build()
      .subscribe(response => {
          this.chartOptions.series[0].data = response.Data.map((item: { open: any; close: any; high: any; low: any; time: any }) => {
            // Convert Unix timestamp to Date (in milliseconds)
            const date = new Date(item.time * 1000);  // Ensure it's in milliseconds

            return {
              x: date.toLocaleDateString(),  // Format to display only the date (you can change this as needed)
              y: [item.open, item.high, item.low, item.close]
            };
          });
          console.log('Crypto Data:', response);
      });
  }

}


