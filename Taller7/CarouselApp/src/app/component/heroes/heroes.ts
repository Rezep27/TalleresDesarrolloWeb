import { Component } from '@angular/core';
import { HeroesChild } from '../heroes-child/heroes-child';

@Component({
  selector: 'app-heroes',
  imports: [HeroesChild],
  templateUrl: './heroes.html',
  styleUrl: './heroes.css'
})
export class Heroes {
  heroTexts : HeroText[]=[
    {title: "First featurette heading.", secondaryTitle: "It’ll blow your mind.", text: "Some great placeholder content for the first featurette here. Imagine some exciting prose here."},
    {title: "Oh yeah, it’s that good.", secondaryTitle: "See for yourself.", text: "Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place."},
    {title: "And lastly, this one.", secondaryTitle: "Checkmate.", text: "And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply  here to give you a better view of what this would look like with some actual content. Your content."}
  ]
}

export interface HeroText{
  title: string;
  secondaryTitle: string;
  text: string;
}
