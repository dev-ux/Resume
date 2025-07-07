import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  category: string;
  logo?: string;
  level?: number;
  certified?: boolean;
  projects: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
   // Ingénierie Logicielle
{ name: 'CI/CD', category: 'Ingénierie Logicielle', logo: 'assets/icons/cicd.png', level: 4, certified: false, projects: [] },
{ name: 'DevOps', category: 'Ingénierie Logicielle', logo: 'assets/icons/devops.png', level: 4, certified: false, projects: [] },
{ name: 'FinOps', category: 'Ingénierie Logicielle', logo: 'assets/icons/finops.png', level: 3, certified: false, projects: [] },
{ name: 'Gestion de projet', category: 'Ingénierie Logicielle', logo: 'assets/icons/manager.png', level: 4, certified: false, projects: [] },
{ name: 'ISO 27001', category: 'Ingénierie Logicielle', logo: 'assets/icons/iso.png', level: 3, certified: false, projects: [] },
{ name: 'Management', category: 'Ingénierie Logicielle', logo: 'assets/icons/project_management.png', level: 4, certified: false, projects: [] },
{ name: 'Management de tests logiciels', category: 'Ingénierie Logicielle', logo: 'assets/icons/test_manager.png', level: 3, certified: true, projects: [] },
{ name: "Membre d'équipe Agile", category: 'Ingénierie Logicielle', logo: 'assets/icons/agile_team_member.png', level: 4, certified: false, projects: [] },
{ name: 'Pratiques de tests logiciels', category: 'Ingénierie Logicielle', logo: 'assets/icons/test_automation.png', level: 4, certified: true, projects: [] },
{ name: 'Product Owner', category: 'Ingénierie Logicielle', logo: 'assets/icons/product_owner.png', level: 3, certified: false, projects: [] },
{ name: 'RGPD', category: 'Ingénierie Logicielle', logo: 'assets/icons/rgpd.png', level: 4, certified: false, projects: [] },
{ name: 'Scrum master', category: 'Ingénierie Logicielle', logo: 'assets/icons/scrum_master.png', level: 4, certified: true, projects: [] },

// Langages/frameworks
{ name: 'Alexa Skills', category: 'Langages/frameworks', logo: 'assets/icons/alexa.png', level: 4, certified: false, projects: [] },
{ name: 'Angular', category: 'Langages/frameworks', logo: 'assets/icons/angular.png', level: 5, certified: false, projects: [] },
{ name: 'Java Spring Boot', category: 'Langages/frameworks', logo: 'assets/icons/spring.png', level: 4, certified: false, projects: [] },
{ name: 'NodeJS', category: 'Langages/frameworks', logo: 'assets/icons/nodejs.png', level: 5, certified: false, projects: [] },
{ name: 'Python', category: 'Langages/frameworks', logo: 'assets/icons/python.png', level: 5, certified: false, projects: [] },
{ name: 'QuasarJS', category: 'Langages/frameworks', logo: 'assets/icons/quasar.png', level: 4, certified: false, projects: [] },
{ name: 'Shell', category: 'Langages/frameworks', logo: 'assets/icons/shell.png', level: 4, certified: false, projects: [] },

  // Soft skills
{ name: 'Adaptabilité', category: 'Soft skills', logo: 'assets/icons/adaptation.png', level: 4, certified: false, projects: [] },
{ name: 'Assertivité', category: 'Soft skills', logo: 'assets/icons/assertivite.png', level: 4, certified: false, projects: [] },
{ name: 'Autonomie', category: 'Soft skills', logo: 'assets/icons/autonomie.png', level: 4, certified: false, projects: [] },
{ name: "Esprit d'initiative", category: 'Soft skills', logo: 'assets/icons/initiative.png', level: 4, certified: false, projects: [] },
{ name: 'Polyvalence', category: 'Soft skills', logo: 'assets/icons/polyvalence.png', level: 4, certified: false, projects: [] },
{ name: 'Rigueur', category: 'Soft skills', logo: 'assets/icons/rigueur.png', level: 4, certified: false, projects: [] },
{ name: 'S.S.T.', category: 'Soft skills', logo: 'assets/icons/SST.png', level: 4, certified: true, projects: [] },
{ name: "Sens de l'organisation", category: 'Soft skills', logo: 'assets/icons/organisation.png', level: 4, certified: false, projects: [] },

// Outils
{ name: 'AWS', category: 'Outils', logo: 'assets/icons/aws.png', level: 4, certified: true, projects: [] },
{ name: 'Cypress', category: 'Outils', logo: 'assets/icons/cypress.png', level: 4, certified: true, projects: [] },
{ name: 'Datadog', category: 'Outils', logo: 'assets/icons/datadog.png', level: 4, certified: false, projects: [] },
{ name: 'Docker', category: 'Outils', logo: 'assets/icons/docker.png', level: 4, certified: false, projects: [] },
{ name: 'GitHub', category: 'Outils', logo: 'assets/icons/github.png', level: 4, certified: false, projects: [] },
{ name: 'Gitlab', category: 'Outils', logo: 'assets/icons/gitlab.png', level: 4, certified: true, projects: [] },
{ name: 'Jenkins', category: 'Outils', logo: 'assets/icons/jenkins.png', level: 4, certified: false, projects: [] },
{ name: 'JetBrains Suite', category: 'Outils', logo: 'assets/icons/jetbrains.png', level: 4, certified: false, projects: [] },
{ name: 'JIRA', category: 'Outils', logo: 'assets/icons/jira.png', level: 4, certified: false, projects: [] },
{ name: 'Kubernetes', category: 'Outils', logo: 'assets/icons/kubernetes.png', level: 4, certified: false, projects: [] },
{ name: 'OWASP Dependency Track', category: 'Outils', logo: 'assets/icons/dtrack.png', level: 4, certified: false, projects: [] },
{ name: 'Piano Analytics', category: 'Outils', logo: 'assets/icons/ATInternet.png', level: 4, certified: true, projects: [] },
{ name: 'PowerBI', category: 'Outils', logo: 'assets/icons/powerbi.png', level: 4, certified: false, projects: [] },
{ name: 'SOAP UI', category: 'Outils', logo: 'assets/icons/soap_ui.png', level: 4, certified: false, projects: [] },
{ name: 'Sonarqube', category: 'Outils', logo: 'assets/icons/sonarqube.png', level: 4, certified: false, projects: [] },
{ name: 'VSCode', category: 'Outils', logo: 'assets/icons/vscode.png', level: 4, certified: false, projects: [] },

// // Langues
// { name: 'Allemand', category: 'Langues', logo: 'assets/icons/allemand.png', level: 4, certified: false, projects: [] },
// { name: 'Anglais', category: 'Langues', logo: 'assets/icons/anglais.png', level: 4, certified: true, projects: [] },
// { name: 'Turc', category: 'Langues', logo: 'assets/icons/turc.png', level: 4, certified: false, projects: [] },

  ];

  constructor() {}

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  updateProjectsForSkill(skillName: string, projects: string[]): void {
    const skill = this.skills.find((s: Skill) => s.name === skillName);
    if (skill) {
      skill.projects = projects;
    }
  }

  getProjectsForSkill(skillName: string): string[] {
    const skill = this.skills.find((s: Skill) => s.name === skillName);
    return skill ? skill.projects : [];
  }
}
