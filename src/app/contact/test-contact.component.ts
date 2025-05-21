import { Component } from '@angular/core';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-test-contact',
  template: `
    <form #form="ngForm" (ngSubmit)="onSubmit()">
      <input name="name" [(ngModel)]="testData.name" required minlength="2">
      <input name="email" [(ngModel)]="testData.email" required email>
      <input name="subject" [(ngModel)]="testData.subject" required>
      <textarea name="message" [(ngModel)]="testData.message" required minlength="10"></textarea>
      <button type="submit">Send Test Email</button>
    </form>
  `
})
export class TestContactComponent {
  testData = {
    name: 'Test User',
    email: 'test@example.com',
    subject: 'Test Subject',
    message: 'This is a test message'
  };

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService.sendEmail(this.testData).subscribe({
      next: (response) => {
        console.log('Email sent successfully:', response);
      },
      error: (error) => {
        console.error('Error sending email:', error);
      }
    });
  }
}
