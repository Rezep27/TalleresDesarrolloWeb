import { Component, Input } from '@angular/core';
import {Contact} from '../contact-list/contact-list';

@Component({
  selector: 'app-contact-row',
  imports: [],
  templateUrl: './contact-row.html',
  styleUrl: './contact-row.css'
})
export class ContactRow {
  @Input({required :true}) contact !: Contact;

}
