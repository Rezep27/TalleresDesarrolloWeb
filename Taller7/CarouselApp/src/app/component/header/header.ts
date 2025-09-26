import { Component } from '@angular/core';
import { HeaderChildLinks } from '../header-child-links/header-child-links';

@Component({
  selector: 'app-header',
  imports: [HeaderChildLinks],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  headerLinks : HeaderLink[] = [
    {linkText: "Home"},
    {linkText: "Link"},
    {linkText: "Disabled"}
  ]
}

export interface HeaderLink{
  linkText:string;
}
