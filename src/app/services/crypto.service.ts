import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CryptoService {
  private baseUrl = 'https://min-api.cryptocompare.com/data/';
  private endpoint = 'histoday';
  private fsym = 'BTC';
  private tsym = 'USD';
  private limit = 6;

  constructor(private http: HttpClient) {}

  setEndpoint(endpoint: string): this {
    this.endpoint = endpoint;
    return this;
  }

  setSymbol(symbol: string): this {
    this.fsym = symbol.toUpperCase();
    return this;
  }

  setCurrency(currency: string): this {
    this.tsym = currency.toUpperCase();
    return this;
  }

  setLimit(limit: number): this {
    this.limit = limit;
    return this;
  }

  build(): Observable<any> {
    const url = `${this.baseUrl}${this.endpoint}?fsym=${this.fsym}&tsym=${this.tsym}&limit=${this.limit}`;
    return this.http.get(url);
  }
}
