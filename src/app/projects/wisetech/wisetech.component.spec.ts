import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WisetechComponent } from './wisetech.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('WisetechComponent', () => {
  let component: WisetechComponent;
  let fixture: ComponentFixture<WisetechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WisetechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WisetechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
