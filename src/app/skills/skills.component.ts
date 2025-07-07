import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../services/skills.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  categories = [
    'Ingénierie Logicielle',
    'Langages/frameworks',
    'Soft skills',
    'Outils',
  ] as const;

  categoryClasses = {
    'Ingénierie Logicielle': 'logicielle',
    'Langages/frameworks': 'frameworks',
    'Soft skills': 'softskills',
    'Outils': 'outils',
    'Langues': 'langues'
  } as const;

  categoryNames = {
    'Ingénierie Logicielle': 'Ingénierie Logicielle',
    'Langages/frameworks': 'Langages et frameworks',
    'Soft skills': 'Compétences relationnelles',
    'Outils': 'Outils et technologies',
    'Langues': 'Langues'
  } as const;

  selectedSkill: Skill | null = null;
  isModalOpen = false;

  constructor(
    private skillsService: SkillsService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    // Met à jour les projets liés aux compétences
    this.skillsService.skills.forEach(skill => {
      const projects = this.projectsService.getProjectsForSkill(skill.name);
      this.skillsService.updateProjectsForSkill(skill.name, projects);
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skillsService.getSkillsByCategory(category);
  }

  getStars(level: number): string[] {
    const stars = [];
    const actualLevel = level || 0; // Handle undefined levels
    for (let i = 0; i < 5; i++) {
      stars.push(i < actualLevel ? 'filled' : 'empty');
    }
    return stars;
  }

  openModal(skill: Skill) {
    this.selectedSkill = skill;
    this.isModalOpen = true;
  }

  closeModal() {
    this.selectedSkill = null;
    this.isModalOpen = false;
  }

  getCategoryClass(category: keyof typeof this.categoryClasses): string {
    return this.categoryClasses[category];
  }


}
