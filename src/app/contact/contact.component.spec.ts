import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';
import { EmailService, EmailFormData } from '../services/email.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

// Déclarer les types globaux de Jasmine
// @ts-ignore
declare const jasmine: any;

// @ts-ignore
const { describe, it, beforeEach, expect, spyOn } = global as any;

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let emailService: EmailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [ ContactComponent ],
      providers: [ EmailService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    emailService = TestBed.inject(EmailService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should submit form with valid data', () => {
    const formData: EmailFormData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message'
    };

    const spy = jasmine.spyOn(emailService, 'sendEmail');
    spy.and.returnValue(of({}));

    component.contactForm.setValue(formData);
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(formData);
    expect(component.isSubmitting).toBe(true);
  });

  it('should show error message when submission fails', () => {
    const error = { error: { message: 'Test error' } };
    const spy = jasmine.spyOn(emailService, 'sendEmail');
    spy.and.returnValue(of(error));

    component.contactForm.setValue({
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'Test Message'
    });
    component.onSubmit();

    expect(component.errorMessage).toBe('Test error');
    expect(component.isSubmitting).toBe(false);
  });
});
