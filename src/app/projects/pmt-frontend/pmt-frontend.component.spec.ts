import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmtFrontendComponent } from './pmt-frontend.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('PmtFrontendComponent', () => {
  let component: PmtFrontendComponent;
  let fixture: ComponentFixture<PmtFrontendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmtFrontendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PmtFrontendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
