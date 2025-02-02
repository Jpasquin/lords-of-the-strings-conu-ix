import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import { OpenAiService } from '../../services/openai.service';
import { CryptoService } from '../../services/crypto.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChatbotComponent implements OnInit {
  messages: { text: string; sender: string }[] = [];
  userMessage = '';
  cryptoData: any;
  loading = false

  @ViewChild('chatContainer', { static: false }) chatContainer!: ElementRef;
  constructor(private openAiService: OpenAiService, private cryptoService: CryptoService) {}

  ngOnInit() {
    this.fetchCryptoData();
  }

  fetchCryptoData() {
    this.cryptoService.build().subscribe(data => {
      this.cryptoData = data;
    });
  }

  sendMessage() {
    if (!this.userMessage.trim()) return;

    this.messages.push({ text: this.userMessage, sender: 'user' });
    this.loading = true;  // ✅ Show the waiting animation
    this.scrollToBottom(); // ✅ Scroll down when the bot responds
    this.openAiService.sendMessage(this.userMessage, this.cryptoData).subscribe(response => {
      const reply = response.choices[0].message.content;
      this.messages.push({ text: reply, sender: 'bot' });
      this.loading = false;
      this.scrollToBottom(); // ✅ Scroll down when the bot responds

    });

    this.userMessage = '';


  }

  scrollToBottom() {
    setTimeout(() => {
      if (this.chatContainer) {
        this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
      }
    }, 100); // Delay to ensure UI updates
  }

}
