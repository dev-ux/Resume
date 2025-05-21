import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: any[] = [];
  projectTranslations: any = {};

  constructor(
    private translate: TranslateService,
    private http: HttpClient
  ) {
    // Set default language if not already set
    if (!this.translate.currentLang) {
      this.translate.setDefaultLang('en');
    }
  }

  ngOnInit() {
    // Load projects from JSON
    this.http.get('/assets/projects.json')
      .subscribe((data: any) => {
        this.projects = data.projects;
      });
  }
}
