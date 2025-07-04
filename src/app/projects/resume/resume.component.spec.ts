import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumeComponent } from './resume.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResumeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
