import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KuntoComponent } from './kunto.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('KuntoComponent', () => {
  let component: KuntoComponent;
  let fixture: ComponentFixture<KuntoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KuntoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KuntoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
