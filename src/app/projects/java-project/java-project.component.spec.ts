import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JavaProjectComponent } from './java-project.component';

// Import des types de test
import { describe, it, beforeEach, expect } from '@jest/globals';

describe('JavaProjectComponent', () => {
  let component: JavaProjectComponent;
  let fixture: ComponentFixture<JavaProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
