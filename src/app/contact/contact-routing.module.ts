import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { TestContactComponent } from './test-contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'test-contact', component: TestContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
