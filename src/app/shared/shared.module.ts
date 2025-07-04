import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TechnologyLinkComponent } from './technology-link.component';

@NgModule({
  declarations: [
    TechnologyLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TechnologyLinkComponent
  ]
})
export class SharedModule { }
