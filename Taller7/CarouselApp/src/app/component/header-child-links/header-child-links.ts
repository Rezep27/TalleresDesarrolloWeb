import { Component, Input } from '@angular/core';
import { HeaderLink } from '../header/header';
@Component({
  selector: 'li[app-header-child-links]',
  imports: [],
  templateUrl: './header-child-links.html',
  styleUrl: './header-child-links.css'
})
export class HeaderChildLinks {
  @Input ({required:true}) headerLink !: HeaderLink;
}
