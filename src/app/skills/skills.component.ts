import { Component, OnInit } from '@angular/core';
import { SkillsService, Skill } from '../services/skills.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  categories = ['frontend', 'backend', 'tools'];
  categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Tools & Technologies'
  };

  constructor(
    private skillsService: SkillsService,
    private projectsService: ProjectsService
  ) {}

  ngOnInit() {
    // Initialize projects for each skill
    this.skillsService.skills.forEach(skill => {
      this.skillsService.updateProjectsForSkill(
        skill.name,
        this.projectsService.getProjectsForSkill(skill.name)
      );
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skillsService.getSkillsByCategory(category);
  }
}
