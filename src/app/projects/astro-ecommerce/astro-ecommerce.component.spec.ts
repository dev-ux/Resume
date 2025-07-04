import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AstroEcommerceComponent } from './astro-ecommerce.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('AstroEcommerceComponent', () => {
  let component: AstroEcommerceComponent;
  let fixture: ComponentFixture<AstroEcommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AstroEcommerceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstroEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
