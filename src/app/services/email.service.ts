import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
  private emailjsTemplateId = 'template_8v1yl84';
  private emailjsUserId = 'IJhbISOECJU4UDPBu';
  private emailjsServiceId = 'service_7n6j6fl';
  private emailjsApiUrl = 'https://api.emailjs.com/api/v1.0/email/send';

  constructor(private http: HttpClient) {}

  sendEmail(formData: EmailFormData): Observable<any> {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'marvinjunior0958@gmail.com' // Ajout de l'email de destination
    };

    return this.http.post(this.emailjsApiUrl, {
      service_id: this.emailjsServiceId,
      template_id: this.emailjsTemplateId,
      user_id: this.emailjsUserId,
      template_params: templateParams
    }).pipe(
      catchError((error) => {
        console.error('EmailJS Error:', error);
        return throwError(() => error);
      })
    );
  }
}
