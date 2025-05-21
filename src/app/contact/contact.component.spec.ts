import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { EmailService } from '../services/email.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';

fdescribe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let emailService: EmailService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        TranslateModule.forRoot()
      ],
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
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message'
    };

    component.contactForm.patchValue(formData);
    expect(component.contactForm.valid).toBe(true);

    const spy = spyOn(emailService, 'sendEmail').and.returnValue(of({}));
    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(formData);
    expect(component.isSubmitting).toBe(true);
  });

  it('should show error message when submission fails', () => {
    const formData = {
      name: 'Test User',
      email: 'test@example.com',
      subject: 'Test Subject',
      message: 'This is a test message'
    };

    component.contactForm.patchValue(formData);
    const error = { error: { message: 'Test error' } };
    
    const spy = spyOn(emailService, 'sendEmail').and.returnValue(of(error));
    component.onSubmit();

    expect(component.errorMessage).toBe('Test error');
    expect(component.isSubmitting).toBe(false);
  });
});
