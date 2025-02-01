import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crypto-bar',
  imports: [CommonModule, FormsModule],
  templateUrl: './crypto-bar.component.html',
  styleUrl: './crypto-bar.component.scss'
})
export class CryptoBarComponent {
  options = [
    { key: 'btc', label: 'Bitcoin' },
    { key: 'eth', label: 'Ethereum' },
    { key: 'ltc', label: 'Litecoin' }
  ];

  selectedValue = 'btc';
  get selectedLabel(): string {
    return this.options.find(opt => opt.key === this.selectedValue)?.label || '';
  }
}
