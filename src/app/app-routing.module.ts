import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './projects/resume/resume.component';
import { WisetechComponent } from './projects/wisetech/wisetech.component';
import { HairgoComponent } from './projects/hairgo/hairgo.component';
import { ArchitectureComponent } from './projects/architecture/architecture.component';
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
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'skills/technical/react', component: ReactSkillComponent },
  { path: 'skills/technical/nodejs', component: NodejsSkillComponent },
  { path: 'skills/technical/mongodb', component: MongodbSkillComponent },
  { path: 'skills/technical/php', component: PhpSkillComponent },
  { path: 'skills/technical/java', component: JavaSkillComponent },
  { path: 'skills/technical/sql', component: SqlSkillComponent },
  { path: 'skills/human/project-management', component: ProjectManagementSkillComponent },
  { path: 'skills/human/agile', component: AgileSkillComponent },
  { path: 'skills/human/client-relation', component: ClientRelationComponent },
  { path: 'skills/human/communication', component: CommunicationComponent },
  { path: 'skills/technical/:skill', component: TechnicalSkillComponent },
  { path: 'skills/human/:skill', component: TechnicalSkillComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/resume', component: ResumeComponent },
  { path: 'projects/wisetech', component: WisetechComponent },
  { path: 'projects/hairgo', component: HairgoComponent },
  { path: 'projects/architecture', component: ArchitectureComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
