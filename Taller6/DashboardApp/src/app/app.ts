import { Component, signal } from '@angular/core';
import {ContactList} from './components/contact-list/contact-list'
import { GraphicChart } from './components/graphic-chart/graphic-chart';
import { SideMenu } from './components/side-menu/side-menu';

@Component({
  selector: 'app-root',
  imports: [ContactList, GraphicChart, SideMenu],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
