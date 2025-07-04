import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsecaseComponent } from './usecase.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('UsecaseComponent', () => {
  let component: UsecaseComponent;
  let fixture: ComponentFixture<UsecaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsecaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
