import { Component } from '@angular/core';
import { InformationCardsChild } from '../information-cards-child/information-cards-child';

@Component({
  selector: 'app-information-cards',
  imports: [InformationCardsChild],
  templateUrl: './information-cards.html',
  styleUrl: './information-cards.css'
})
export class InformationCards {
  infoInfo : InformationInfo[] = [
    {title: "Heading", paragraph: "Some representative placeholder content for the three columns of text below the carousel. This is the first column."},
    {title: "Heading", paragraph: "Another exciting bit of representative placeholder content. This time, we've moved on to the second column."},
    {title: "Heading", paragraph: "And lastly this, the third column of representative placeholder content."}
  ]
}

export interface InformationInfo{
  title: string;
  paragraph: string;
}
