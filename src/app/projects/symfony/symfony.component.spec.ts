import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SymfonyComponent } from './symfony.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('SymfonyComponent', () => {
  let component: SymfonyComponent;
  let fixture: ComponentFixture<SymfonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymfonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SymfonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
