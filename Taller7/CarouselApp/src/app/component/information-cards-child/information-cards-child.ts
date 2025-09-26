import { Component, Input } from '@angular/core';
import { InformationInfo } from '../information-cards/information-cards';

@Component({
  selector: 'div[app-information-cards-child]',
  imports: [],
  templateUrl: './information-cards-child.html',
  styleUrl: './information-cards-child.css'
})
export class InformationCardsChild {
  @Input({required :true}) informationInfo !: InformationInfo;
}
