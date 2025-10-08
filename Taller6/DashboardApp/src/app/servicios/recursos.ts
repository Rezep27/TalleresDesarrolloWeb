import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../components/contact-list/contact-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Recursos {
  private apiUrl = "https://raw.githubusercontent.com/Rezep27/TalleresDesarrolloWeb/refs/heads/main/servicios/recursos.json"

  constructor(private http: HttpClient) {}
  obtenerInfo(): Observable<Contact[]> {
  return this.http.get<Contact[]>(this.apiUrl);
  }
}
