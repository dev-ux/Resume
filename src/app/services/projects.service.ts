import { Injectable } from '@angular/core';

export interface Project {
  name: string;
  description: string;
  short_description: string;
  source_file: string;
  picture: string;
  programingLangage: string;
  isImageLoading: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      name: 'Kunto',
      description: '',
      short_description: '',
      source_file: 'https://github.com/dev-ux/Kunto',
      picture: '/assets/images/projects/kunto.jpg',
      programingLangage: 'Angular;Node.js;TypeScript;HTML;CSS;JavaScript',
      isImageLoading: true
    },
    {
      name: 'LeTexto',
      description: '',
      short_description: '',
      source_file: 'https://github.com/dev-ux/leTexto',
      picture: '/assets/images/projects/texto-why.png',
      programingLangage: 'Angular;TypeScript;HTML;CSS;JavaScript',
      isImageLoading: true
    },
    {
      name: 'Snake',
      description: '',
      short_description: '',
      source_file: 'https://github.com/dev-ux/Snake',
      picture: '/assets/images/projects/snake.png',
      programingLangage: 'Python',
      isImageLoading: true
    },
    {
      name: 'Game Of Stools',
      description: '',
      short_description: '',
      source_file: 'https://github.com/dev-ux/GameOfStools',
      picture: '/assets/images/projects/GameOfStool.png',
      programingLangage: 'C',
      isImageLoading: true
    },
    {
      name: 'Shoot\'em Up',
      description: '',
      short_description: '',
      source_file: 'https://github.com/dev-ux/ShootemUp',
      picture: '/assets/images/projects/shot_emup.png',
      programingLangage: 'C',
      isImageLoading: true
    },
    {
      name: 'Hanabi',
      description: '',
      short_description: '',
      source_file: 'https://github.com/dev-ux/Hanabi',
      picture: '/assets/images/projects/Hanabi.png',
      programingLangage: 'Java',
      isImageLoading: true
    },
    {
      name: 'ChatOs',
      description: '',
      short_description: '',
      source_file: 'https://github.com/dev-ux/ChatOs',
      picture: '/assets/images/projects/chatos.png',
      programingLangage: 'Java',
      isImageLoading: true
    }
  ];

  constructor() {}

  getProjects(): Project[] {
    return this.projects;
  }

  getProjectsForSkill(skill: string): string[] {
    return this.projects
      .filter(project => project.programingLangage.split(';').includes(skill))
      .map(project => project.name);
  }
}
