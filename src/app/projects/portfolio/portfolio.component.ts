import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  objectives?: string;
  context?: string;
  stakes?: string;
  risks?: string;
  steps?: Array<{
    title: string;
    date: string;
    description: string;
  }>;
  actors?: Array<{
    role: string;
    description: string;
    interactions?: string[];
  }>;
  personalResults?: string[];
  companyResults?: string[];
  immediateFuture?: string;
  longTerm?: string;
  currentStatus?: string;
  strengths?: string[];
  weaknesses?: string[];
  improvements?: string[];
  github?: string;
  demo?: string;
  relatedSkills?: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  project: any;
  loading = true;

  constructor(
    private http: HttpClient,
    public translate: TranslateService
  ) { }

  ngOnInit() {
    this.loadProject();
  }

  async loadProject() {
    try {
      const response = await this.http.get<{ projects: any[] }>('/assets/projects.json').toPromise();
      const projects = response?.projects || [];
      this.project = projects.find(p => p?.id === 'resume');
      this.loading = false;
    } catch (error) {
      console.error('Error loading portfolio project:', error);
      this.loading = false;
    }
  }

  getRelatedSkills(): { name: string; category: string }[] {
    if (!this.project?.relatedSkills) return [];
    return this.project.relatedSkills.map((skillName: string) => ({
      name: skillName,
      category: skillName.toLowerCase()
    }));
  }
}
