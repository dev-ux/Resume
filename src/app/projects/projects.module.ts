import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './project-detail.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { WisetechComponent } from './wisetech/wisetech.component';
import { HairgoComponent } from './hairgo/hairgo.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { JavaProjectComponent } from './java-project/java-project.component';
import { UseCaseComponent } from './usecase/usecase.component';
import { PMTFrontendComponent } from './pmt-frontend/pmt-frontend.component';
import { KuntoComponent } from './kunto/kunto.component';
import { SymfonyComponent } from './symfony/symfony.component';
import { AstroEcommerceComponent } from './astro-ecommerce/astro-ecommerce.component';

// Add icons to the library
library.add(fas, fab);

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'wisetech', component: WisetechComponent },
  { path: 'hairgo', component: HairgoComponent },
  { path: 'architecture', component: ArchitectureComponent },
  { path: 'java-project', component: JavaProjectComponent },
  { path: 'usecase', component: UseCaseComponent },
  { path: 'pmt-frontend', component: PMTFrontendComponent },
  { path: 'kunto', component: KuntoComponent },
  { path: 'symfony', component: SymfonyComponent },
  { path: 'astro-ecommerce', component: AstroEcommerceComponent },
  { path: ':id', component: ProjectDetailComponent }
];

@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectDetailComponent,
    PortfolioComponent,
    WisetechComponent,
    HairgoComponent,
    ArchitectureComponent,
    JavaProjectComponent,
    UseCaseComponent,
    PMTFrontendComponent,
    KuntoComponent,
    SymfonyComponent,
    AstroEcommerceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    TranslateModule,
    FontAwesomeModule
  ],
  exports: [
    RouterModule
  ]
})
export class ProjectsModule { }
