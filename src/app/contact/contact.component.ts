import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService, EmailFormData } from '../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  isSubmitting = false;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private emailService: EmailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.isSubmitting = true;
      const formData: EmailFormData = this.contactForm.value;
      
      this.emailService.sendEmail(formData).subscribe({
        next: (response: any) => {
          this.successMessage = 'Message sent successfully!';
          this.errorMessage = '';
          this.contactForm.reset();
          this.isSubmitting = false;
        },
        error: (error: any) => {
          console.error('Contact Form Error:', error);
          this.errorMessage = error?.error?.message || error?.message || 'Error sending message. Please try again later.';
          this.successMessage = '';
          this.isSubmitting = false;
        }
      });
    }
  }

  resetForm() {
    this.contactForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  get formControls() {
    return this.contactForm.controls;
  }
}
