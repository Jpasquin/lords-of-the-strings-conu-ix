import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';  // ✅ Import the environment file

@Injectable({
  providedIn: 'root',
})
export class OpenAiService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey: string = environment.openAIApiKey;
  constructor(private http: HttpClient) {}

  sendMessage(message: string, cryptoData: any): Observable<any> {
    console.log(this.apiKey);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`,
    });

    const data = {
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a crypto trading assistant.' },
        { role: 'user', content: `Crypto Data: ${JSON.stringify(cryptoData)}\nUser Query: ${message}` }
      ],
      temperature: 0.7,
    };

    return this.http.post(this.apiUrl, data, { headers });
  }
}
