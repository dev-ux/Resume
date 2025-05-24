import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { TestContactComponent } from './contact/test-contact.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { TechnicalSkillComponent } from './technical-skill/technical-skill.component';
import { ReactSkillComponent } from './skills/react/react-skill.component';
import { NodejsSkillComponent } from './skills/nodejs/nodejs-skill.component';
import { MongodbSkillComponent } from './skills/mongodb/mongodb-skill.component';
import { PhpSkillComponent } from './skills/php/php-skill.component';
import { JavaSkillComponent } from './skills/java/java-skill.component';
import { SqlSkillComponent } from './skills/sql/sql-skill.component';
import { ContactModule } from './contact/contact.module';
import { AppTranslateLoader } from './app.translate.loader';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'test-contact', component: TestContactComponent },
  { path: 'skills/technical/react', component: ReactSkillComponent },
  { path: 'skills/technical/nodejs', component: NodejsSkillComponent },
  { path: 'skills/technical/mongodb', component: MongodbSkillComponent },
  { path: 'skills/technical/php', component: PhpSkillComponent },
  { path: 'skills/technical/java', component: JavaSkillComponent },
  { path: 'skills/technical/sql', component: SqlSkillComponent },
  { path: 'skills/technical/:skill', component: TechnicalSkillComponent },
  { path: 'skills/human/:skill', component: TechnicalSkillComponent }
];

export function HttpLoaderFactory(http: HttpClient) {
  return new AppTranslateLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ReactSkillComponent,
    NodejsSkillComponent,
    MongodbSkillComponent,
    PhpSkillComponent,
    JavaSkillComponent,
    SqlSkillComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BlogComponent,
    BlogDetailComponent,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
