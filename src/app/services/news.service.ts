import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class CryptoNewsService {
  private baseUrl = 'https://min-api.cryptocompare.com/data/v2/news/';
  private lang = 'EN';
  private sortOrder = 'latest'; // Fixed to 'latest'

  constructor(private http: HttpClient) {}

  setLanguage(language: string): this {
    this.lang = language.toUpperCase();
    return this;
  }

  build(): Observable<any> {
    const url = `${this.baseUrl}?lang=${this.lang}&sortOrder=${this.sortOrder}`;
    return this.http.get(url);
  }
}
