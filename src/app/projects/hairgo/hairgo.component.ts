import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-hairgo',
  templateUrl: './hairgo.component.html',
  styleUrls: ['./hairgo.component.css']
})
export class HairgoComponent implements OnInit {
  project: Project | null = null;
  loading = true;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.loadProject();
  }

  async loadProject() {
    try {
      console.log('Starting to load HairGo project...');
      const response = await this.http.get<{ projects: Project[] }>('/assets/projects.json').toPromise();
      console.log('Projects response:', response);
      
      if (!response || !response.projects) {
        throw new Error('Invalid projects data format');
      }
      
      const projects = response.projects;
      console.log('Projects array:', projects);
      
      const hairgoProject = projects.find(p => p?.id === 'hairgo');
      console.log('HairGo project found:', hairgoProject);
      
      if (!hairgoProject) {
        throw new Error('HairGo project not found in projects.json');
      }
      
      this.project = hairgoProject;
      // Convertir les technologies en relatedSkills si nécessaire
      if (hairgoProject.technologies && !hairgoProject.relatedSkills) {
        hairgoProject.relatedSkills = hairgoProject.technologies;
      }
      
      this.loading = false;
      console.log('Loading complete, project loaded:', this.project);
    } catch (error) {
      console.error('Error loading HairGo project:', error);
      this.project = null;
      this.loading = false;
    }
  }
}
