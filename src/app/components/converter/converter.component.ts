import { Component } from '@angular/core';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrl: './converter.component.css'
})
export class ConverterComponent {
  amount = 0;
  currency = 'USD';
  toCurrency = 'EUR';
  total = 0;

  coins: string[] = ['USD', 'EUR', 'GBP'];

  converter() {
    switch(this.currency) {
      case 'USD':
        if (this.toCurrency === 'USD') {
          this.total = this.amount;
        }
        if (this.toCurrency === 'EUR') {
          this.total = this.amount * 0.84;
        }
        if (this.toCurrency === 'GBP') {
          this.total = this.amount * .75;
        }
        break;
      case 'EUR':
        if (this.toCurrency === 'USD') {
          this.total = this.amount * 1.20;
        }
        if (this.toCurrency === 'EUR') {
          this.total = this.amount;
        }
        if (this.toCurrency === 'GBP') {
          this.total = this.amount * .9;
        }
        break;
      case 'GBP':
        if (this.toCurrency === 'USD') {
          this.total = this.amount * 1.33;
        }
        if (this.toCurrency === 'EUR') {
          this.total = this.amount * 1.11;
        }
        if (this.toCurrency === 'GBP') {
          this.total = this.amount;
        }
        break;
    }
  }
}
