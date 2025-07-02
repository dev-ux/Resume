import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Project } from './project.model';

interface Skill {
  name: string;
  category: string;
}

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  @Input() project: Project | null = null;
  loading = false;

  private allSkills: Skill[] = [
    { name: 'Next.js', category: 'frontend' },
    { name: 'React', category: 'frontend' },
    { name: 'Angular', category: 'frontend' },
    { name: 'Spring Boot', category: 'backend' },
    { name: 'Node.js', category: 'backend' },
    { name: 'MongoDB', category: 'tools' },
    { name: 'MySQL', category: 'tools' },
    { name: 'Git', category: 'tools' },
    { name: 'Teamwork', category: 'human' },
    { name: 'Communication', category: 'human' },
    { name: 'Problem Solving', category: 'human' },
    { name: 'Project Management', category: 'management' },
    { name: 'Leadership', category: 'management' }
  ];

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  getRelatedSkills(): Skill[] {
    if (!this.project?.relatedSkills) return [];
    
    return this.allSkills.filter(skill =>
      this.project?.relatedSkills?.some(projectSkill =>
        projectSkill.toLowerCase() === skill.name.toLowerCase()
      ) ?? false
    );
  }
}
