import { Component } from '@angular/core';
import { CryptoService } from '../../services/crypto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  standalone: false
})
export class HomePage {
  data: any[] = [];

  constructor(private cryptoService: CryptoService) {}
  
  ngOnInit(): void {
    this.cryptoService
      .setSymbol('BTC')
      .setCurrency('USD')
      .setLimit(90)
      .build()
      .subscribe(response => {
        this.data = response.Data.map((item: { close: any; }) => item.close);
        console.log('Crypto Data:', response);
      });
  }
}
