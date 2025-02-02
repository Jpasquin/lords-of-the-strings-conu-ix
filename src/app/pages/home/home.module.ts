import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { RouterModule, Routes } from '@angular/router';
import { ChatbotComponent } from '../../components/chatbot/chatbot.component';
import { ChartComponent } from '../../components/chart/chart.component';
import { CryptoBarComponent } from '../../components/crypto-bar/crypto-bar.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  declarations: [HomePage],
  imports: [
    CryptoBarComponent,
    ChartComponent,
    ChatbotComponent,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomePageModule { }
