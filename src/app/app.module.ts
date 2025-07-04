import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReactSkillComponent } from './skills/react/react-skill.component';
import { NodejsSkillComponent } from './skills/nodejs/nodejs-skill.component';
import { MongodbSkillComponent } from './skills/mongodb/mongodb-skill.component';
import { PhpSkillComponent } from './skills/php/php-skill.component';
import { JavaSkillComponent } from './skills/java/java-skill.component';
import { SqlSkillComponent } from './skills/sql/sql-skill.component';
import { ProjectManagementSkillComponent } from './skills/human/project-management-skill.component';
import { AgileSkillComponent } from './skills/human/agile-skill.component';
import { ClientRelationComponent } from './skills/human/client-relation.component';
import { CommunicationComponent } from './skills/human/communication.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';
import { ContactModule } from './contact/contact.module';

import { AppTranslateLoader } from './app.translate.loader';
import { AppRoutingModule } from './app-routing.module'; // Ensure correct module path

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent }
];

export function HttpLoaderFactory(http: HttpClient) {
  return new AppTranslateLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkillsComponent,
    ProjectsComponent,
    ReactSkillComponent,
    NodejsSkillComponent,
    MongodbSkillComponent,
    PhpSkillComponent,
    JavaSkillComponent,
    SqlSkillComponent,
    ProjectManagementSkillComponent,
    AgileSkillComponent,
    ClientRelationComponent,
    CommunicationComponent,
    TechnicalSkillComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: AppTranslateLoader
      }
    }),
    AppRoutingModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
