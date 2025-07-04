import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HairgoComponent } from './hairgo.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('HairgoComponent', () => {
  let component: HairgoComponent;
  let fixture: ComponentFixture<HairgoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HairgoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HairgoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
