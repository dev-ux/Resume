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
  selector: 'app-wisetech',
  templateUrl: './wisetech.component.html',
  styleUrls: ['./wisetech.component.css']
})
export class WisetechComponent implements OnInit {
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
      console.log('Starting to load Wisetech project...');
      const response = await this.http.get<{ projects: Project[] }>('/assets/projects.json').toPromise();
      console.log('Projects response:', response);
      
      if (!response || !response.projects) {
        throw new Error('Invalid projects data format');
      }
      
      const projects = response.projects;
      console.log('Projects array:', projects);
      
      const wisetechProject = projects.find(p => p?.id === 'wisetech');
      console.log('Wisetech project found:', wisetechProject);
      
      if (!wisetechProject) {
        throw new Error('Wisetech project not found in projects.json');
      }
      
      this.project = wisetechProject;
      // Convertir les technologies en relatedSkills si nécessaire
      if (wisetechProject.technologies && !wisetechProject.relatedSkills) {
        wisetechProject.relatedSkills = wisetechProject.technologies;
      }
      
      this.loading = false;
      console.log('Loading complete, project loaded:', this.project);
    } catch (error) {
      console.error('Error loading wisetech project:', error);
      this.project = null;
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
