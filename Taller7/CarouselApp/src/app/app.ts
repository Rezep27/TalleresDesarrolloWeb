import { Component, signal } from '@angular/core';
import { Header } from './component/header/header';
import { InformationCards } from './component/information-cards/information-cards';
import { Heroes } from './component/heroes/heroes';

@Component({
  selector: 'app-root',
  imports: [Header, InformationCards, Heroes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
