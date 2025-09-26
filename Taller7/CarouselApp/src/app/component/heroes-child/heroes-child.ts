import { Component, Input } from '@angular/core';
import { HeroText } from '../heroes/heroes';

@Component({
  selector: 'div[app-heroes-child]',
  imports: [],
  templateUrl: './heroes-child.html',
  styleUrl: './heroes-child.css'
})
export class HeroesChild {
  @Input({required:true}) heroText !: HeroText;
}
