import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact.component';
import { TestContactComponent } from './test-contact.component';

@NgModule({
  declarations: [
    ContactComponent,
    TestContactComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContactComponent,
    TestContactComponent
  ]
})
export class ContactModule { }
