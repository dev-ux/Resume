import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  category: string;
  projects: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    // Frontend Skills
    {
      name: 'Angular',
      category: 'frontend',
      projects: []
    },
    {
      name: 'HTML5',
      category: 'frontend',
      projects: []
    },
    {
      name: 'CSS3',
      category: 'frontend',
      projects: []
    },
    {
      name: 'JavaScript',
      category: 'frontend',
      projects: []
    },
    {
      name: 'TypeScript',
      category: 'frontend',
      projects: []
    },
    // Backend Skills
    {
      name: 'Node.js',
      category: 'backend',
      projects: []
    },
    {
      name: 'Express.js',
      category: 'backend',
      projects: []
    },
    {
      name: 'REST APIs',
      category: 'backend',
      projects: []
    },
    {
      name: 'Database Management',
      category: 'backend',
      projects: []
    },
    // Tools & Technologies
    {
      name: 'Git',
      category: 'tools',
      projects: []
    },
    {
      name: 'GitHub',
      category: 'tools',
      projects: []
    },
    {
      name: 'Docker',
      category: 'tools',
      projects: []
    },
    {
      name: 'VS Code',
      category: 'tools',
      projects: []
    },
    {
      name: 'Postman',
      category: 'tools',
      projects: []
    }
  ];

  constructor() {}

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  updateProjectsForSkill(skillName: string, projects: string[]) {
    const skill = this.skills.find(s => s.name === skillName);
    if (skill) {
      skill.projects = projects;
    }
  }
}
