import { Component } from '@angular/core';
import { CryptoNewsService } from '../../services/news.service';
import { CommonModule } from '@angular/common';
import { News } from '../../interfaces/news.model';


@Component({
  selector: 'app-news',
  standalone: true, // ✅ If using standalone components
  imports: [CommonModule], // ✅ Add CommonModule here
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss',
})
export class NewsComponent {
  public news: News[] = [];

  constructor(private cryptoNewsService: CryptoNewsService) {}

  ngOnInit(): void {
    this.cryptoNewsService.build().subscribe({
      next: (response) => {
        this.news = response.Data;
        console.log('Crypto News:', response);
      },
      error: (error) => console.error('Error fetching news:', error),
    });
  }

}
