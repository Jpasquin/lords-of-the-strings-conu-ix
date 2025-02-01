import { Component } from '@angular/core';
import { NgApexchartsModule } from "ng-apexcharts";
import { ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle } from 'ng-apexcharts';
import { CryptoService } from '../../services/crypto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart',
  imports: [NgApexchartsModule, CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})

export class ChartComponent {
  public chartOptions: any;

  public timeframes = [
    { label: '24h', value: 23, endpoint: 'histohour'},
    { label: '7d', value: 7, endpoint: 'histoday'},
    { label: '30d', value: 30, endpoint: 'histoday'},
    { label: '90d', value: 90, endpoint: 'histoday'},
  ];
  public selectedTimeframe: number = 7; // Default to 7 days
  public selectedEndpoint: string = 'histoday';

  constructor(private cryptoService: CryptoService) {

    this.chartOptions = {
      series: [
        {
          name: 'Crypto',
          data: [],
          background:{
            color: '#181a1f'
          }

        }
      ],
      chart: {
        height: 350,
        type: 'candlestick',
        toolbar: { show: false }
      },



      xaxis: {
        type: 'datetime',
        labels: {
          style: {
            colors: '#848E9C'  // White color for x-axis labels
          }
        }
      },

      yaxis: {
        opposite: true,
        labels: {
          style: {
            colors: '#848E9C'  // White color for y-axis labels
          }
        }
      },

      grid: {
        borderColor: '#1f242b',  // Lighter grid line color
        xaxis: {
          lines: {
            show: true  // Show grid lines on the x-axis
          }
        },
        yaxis: {
          lines: {
            show: true  // Show grid lines on the y-axis
          }
        },
      },

      tooltip: {
        theme: 'dark'
      },
      theme: {
        mode: 'dark'
      }

    };
  }

  ngOnInit(): void {
    this.fetchCryptoData(this.selectedTimeframe, this.selectedEndpoint);

  }

  fetchCryptoData(timeframe: number, endpoint: string): void{
    this.selectedTimeframe = timeframe; // Update selected timeframe
    this.selectedEndpoint =  endpoint;


    this.cryptoService
      .setSymbol('BTC')
      .setCurrency('USD')
      .setLimit(timeframe)
      .setEndpoint(endpoint)
      .build()
      .subscribe(response => {
        const newData = response.Data.map((item: { open: any; close: any; high: any; low: any; time: any }) => ({
          x: new Date(item.time * 1000), // Convert UNIX timestamp
          y: [item.open, item.high, item.low, item.close]
        }));
          console.log('Crypto Data:', response);
          this.chartOptions = { ...this.chartOptions, series: [{ name: 'Crypto', data: newData }] };
      });

  }
}


