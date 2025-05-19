import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EmailFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/api/email';

  constructor(private http: HttpClient) {}

  sendEmail(formData: EmailFormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
