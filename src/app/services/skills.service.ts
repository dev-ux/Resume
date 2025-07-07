import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  category: string;
  logo: string;
  level: number;
  certified: boolean;
  projects: string[];
  description: string;
  introduction: string;
  experience: string;
  competenceLevel: string;
  projectLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    // Ingénierie Logicielle
{ name: 'CI/CD', category: 'Ingénierie Logicielle', logo: 'assets/icons/cicd.png', level: 5, certified: false, projects: [],
  description: 'Automatisation des processus de développement et de déploiement',
  introduction: 'Le CI/CD est essentiel pour une livraison continue de valeur aux utilisateurs',
  experience: 'J\'ai mis en place plusieurs pipelines CI/CD avec Jenkins et GitLab CI pour automatiser les tests et les déploiements',
  competenceLevel: 'Expert en automatisation continue',
  projectLink: 'https://github.com/juniormarvin/cicd-examples'
},
{ name: 'DevOps', category: 'Ingénierie Logicielle', logo: 'assets/icons/devops.png', level: 4, certified: false, projects: [],
  description: 'Pratiques collaboratives entre le développement et les opérations',
  introduction: 'DevOps est essentiel pour une collaboration efficace entre les équipes',
  experience: 'Plus de 4 ans d\'expérience en DevOps, ayant mis en place des pratiques collaboratives',
  competenceLevel: 'Expert en DevOps',
  projectLink: 'https://github.com/juniormarvin/devops-projects'
},
{ name: 'FinOps', category: 'Ingénierie Logicielle', logo: 'assets/icons/finops.png', level: 3, certified: false, projects: [],
  description: 'Optimisation des coûts et gestion financière des ressources cloud',
  introduction: 'FinOps est essentiel pour l\'optimisation des coûts cloud',
  experience: 'Plus de 3 ans d\'expérience en FinOps, ayant optimisé les coûts cloud',
  competenceLevel: 'Expert en FinOps',
  projectLink: 'https://github.com/juniormarvin/finops-projects'
},
{ name: 'Gestion de projet', category: 'Ingénierie Logicielle', logo: 'assets/icons/manager.png', level: 4, certified: false, projects: [],
  description: 'Méthodologies Agile et Scrum pour la gestion de projets',
  introduction: 'La gestion de projet est essentielle pour la livraison réussie des projets',
  experience: 'Plus de 5 ans d\'expérience en gestion de projet, ayant mené des projets à succès',
  competenceLevel: 'Expert en gestion de projet',
  projectLink: 'https://github.com/juniormarvin/project-management-projects'
},
{ name: 'ISO 27001', category: 'Ingénierie Logicielle', logo: 'assets/icons/iso.png', level: 3, certified: false, projects: [],
  description: 'Conformité aux normes internationales de sécurité de l\'information',
  introduction: 'ISO 27001 est essentiel pour la sécurité de l\'information',
  experience: 'Plus de 3 ans d\'expérience avec ISO 27001, ayant mis en place des systèmes de gestion de la sécurité',
  competenceLevel: 'Expert en sécurité ISO',
  projectLink: 'https://github.com/juniormarvin/iso-projects'
},
{ name: 'Management', category: 'Ingénierie Logicielle', logo: 'assets/icons/project_management.png', level: 4, certified: false, projects: [],
  description: 'Leadership et gestion d\'équipe',
  introduction: 'Le management est essentiel pour le leadership et la motivation des équipes',
  experience: 'Plus de 5 ans d\'expérience en management, ayant dirigé des équipes à succès',
  competenceLevel: 'Expert en management',
  projectLink: 'https://github.com/juniormarvin/management-projects'
},
{ name: 'Management de tests logiciels', category: 'Ingénierie Logicielle', logo: 'assets/icons/test_manager.png', level: 3, certified: true, projects: [],
  description: 'Planification et exécution des tests logiciels',
  introduction: 'Le management de tests est essentiel pour la qualité du logiciel',
  experience: 'Plus de 3 ans d\'expérience en management de tests, ayant mis en place des stratégies de test',
  competenceLevel: 'Expert en management de tests',
  projectLink: 'https://github.com/juniormarvin/test-management-projects'
},
{ name: "Membre d'équipe Agile", category: 'Ingénierie Logicielle', logo: 'assets/icons/agile_team_member.png', level: 4, certified: false, projects: [],
  description: 'Participation à des équipes Agile',
  introduction: 'L\'agilité est essentielle pour la collaboration et l\'adaptabilité',
  experience: 'Plus de 5 ans d\'expérience en Agile, ayant travaillé dans des équipes agiles',
  competenceLevel: 'Expert en Agile',
  projectLink: 'https://github.com/juniormarvin/agile-projects'
},
{ name: 'Pratiques de tests logiciels', category: 'Ingénierie Logicielle', logo: 'assets/icons/test_automation.png', level: 4, certified: true, projects: [],
  description: 'Automatisation des tests logiciels',
  introduction: 'Les pratiques de tests sont essentielles pour la qualité du logiciel',
  experience: 'Plus de 5 ans d\'expérience en tests, ayant automatisé des tests complexes',
  competenceLevel: 'Expert en tests logiciels',
  projectLink: 'https://github.com/juniormarvin/testing-projects'
},
{ name: 'Product Owner', category: 'Ingénierie Logicielle', logo: 'assets/icons/product_owner.png', level: 3, certified: false, projects: [],
  description: 'Responsable de produit',
  introduction: 'Le Product Owner est essentiel pour la réussite du produit',
  experience: 'Plus de 3 ans d\'expérience en Product Ownership, ayant mené des produits à succès',
  competenceLevel: 'Expert en Product Ownership',
  projectLink: 'https://github.com/juniormarvin/product-owner-projects'
},
{ name: 'RGPD', category: 'Ingénierie Logicielle', logo: 'assets/icons/rgpd.png', level: 4, certified: false, projects: [],
  description: 'Conformité au Règlement Général sur la Protection des Données',
  introduction: 'Le RGPD est essentiel pour la protection des données personnelles',
  experience: 'Plus de 4 ans d\'expérience avec RGPD, ayant mis en place des systèmes de conformité',
  competenceLevel: 'Expert en RGPD',
  projectLink: 'https://github.com/juniormarvin/rgpd-projects'
},
{ name: 'Scrum master', category: 'Ingénierie Logicielle', logo: 'assets/icons/scrum_master.png', level: 4, certified: true, projects: [],
  description: 'Maître de cérémonie Scrum',
  introduction: 'Le Scrum Master est essentiel pour la facilitation des équipes Agile',
  experience: 'Plus de 4 ans d\'expérience en Scrum Master, ayant facilité des équipes agiles',
  competenceLevel: 'Expert en Scrum',
  projectLink: 'https://github.com/juniormarvin/scrum-master-projects'
},

// Langages/frameworks
{ name: 'Alexa Skills', category: 'Langages/frameworks', logo: 'assets/icons/alexa.png', level: 4, certified: false, projects: [],
  description: 'Développement d\'applications Alexa',
  introduction: 'Alexa Skills est essentiel pour le développement d\'applications vocales',
  experience: 'Plus de 2 ans d\'expérience avec Alexa Skills, ayant développé des applications vocales complexes',
  competenceLevel: 'Expert en développement Alexa',
  projectLink: 'https://github.com/juniormarvin/alexa-skills-projects'
},
{ name: 'Angular', category: 'Langages/frameworks', logo: 'assets/icons/angular.png', level: 5, certified: false, projects: [],
  description: 'Développement d\'applications web avec Angular',
  introduction: 'Angular est mon framework de choix pour le développement frontend',
  experience: 'Plus de 3 ans d\'expérience avec Angular, ayant travaillé sur plusieurs projets d\'envergure',
  competenceLevel: 'Expert en développement Angular',
  projectLink: 'https://github.com/juniormarvin/angular-projects'
},
{ name: 'Java Spring Boot', category: 'Langages/frameworks', logo: 'assets/icons/spring.png', level: 4, certified: false, projects: [],
  description: 'Développement d\'applications web avec Java Spring Boot',
  introduction: 'Spring Boot est mon framework Java préféré pour le développement backend',
  experience: 'Plus de 4 ans d\'expérience avec Spring Boot, ayant développé plusieurs applications d\'entreprise',
  competenceLevel: 'Expert en développement Spring Boot',
  projectLink: 'https://github.com/juniormarvin/spring-boot-projects'
},
{ name: 'NodeJS', category: 'Langages/frameworks', logo: 'assets/icons/nodejs.png', level: 5, certified: false, projects: [],
  description: 'Développement d\'applications web avec NodeJS',
  introduction: 'NodeJS est mon choix principal pour le développement backend',
  experience: 'Plus de 4 ans d\'expérience avec NodeJS, ayant travaillé sur des projets d\'envergure',
  competenceLevel: 'Expert en développement NodeJS',
  projectLink: 'https://github.com/juniormarvin/nodejs-projects'
},
{ name: 'Python', category: 'Langages/frameworks', logo: 'assets/icons/python.png', level: 5, certified: false, projects: [],
  description: 'Développement d\'applications avec Python',
  introduction: 'Python est mon langage principal pour le développement backend et l\'analyse de données',
  experience: 'Plus de 5 ans d\'expérience avec Python, ayant développé des applications complexes',
  competenceLevel: 'Expert en développement Python',
  projectLink: 'https://github.com/juniormarvin/python-projects'
},
{ name: 'QuasarJS', category: 'Langages/frameworks', logo: 'assets/icons/quasar.png', level: 4, certified: false, projects: [],
  description: 'Développement d\'applications web avec QuasarJS',
  introduction: 'QuasarJS est mon framework de choix pour le développement de PWA et d\'applications mobiles',
  experience: 'Plus de 3 ans d\'expérience avec QuasarJS, ayant développé des applications multiplateformes',
  competenceLevel: 'Expert en développement QuasarJS',
  projectLink: 'https://github.com/juniormarvin/quasarjs-projects'
},
{ name: 'Shell', category: 'Langages/frameworks', logo: 'assets/icons/shell.png', level: 4, certified: false, projects: [],
  description: 'Scripting shell',
  introduction: 'Le scripting shell est essentiel pour l\'automatisation des tâches système',
  experience: 'Plus de 5 ans d\'expérience avec le scripting shell, ayant automatisé des processus complexes',
  competenceLevel: 'Expert en automatisation système',
  projectLink: 'https://github.com/juniormarvin/shell-projects'
},
{ name: 'Python', category: 'Langages/frameworks', logo: 'assets/icons/python.png', level: 5, certified: false, projects: [],
  description: 'Développement d\'applications avec Python',
  introduction: 'Python est mon langage principal pour le développement backend et l\'analyse de données',
  experience: 'Plus de 5 ans d\'expérience avec Python, ayant développé des applications complexes',
  competenceLevel: 'Expert en développement Python',
  projectLink: 'https://github.com/juniormarvin/python-projects'
},
{ name: 'QuasarJS', category: 'Langages/frameworks', logo: 'assets/icons/quasar.png', level: 4, certified: false, projects: [],
  description: 'Développement d\'applications web avec QuasarJS',
  introduction: 'QuasarJS est mon framework de choix pour le développement de PWA et d\'applications mobiles',
  experience: 'Plus de 3 ans d\'expérience avec QuasarJS, ayant développé des applications multiplateformes',
  competenceLevel: 'Expert en développement QuasarJS',
  projectLink: 'https://github.com/juniormarvin/quasarjs-projects'
},
{ name: 'Shell', category: 'Langages/frameworks', logo: 'assets/icons/shell.png', level: 4, certified: false, projects: [],
  description: 'Scripting shell',
  introduction: 'Le scripting shell est essentiel pour l\'automatisation des tâches système',
  experience: 'Plus de 5 ans d\'expérience avec le scripting shell, ayant automatisé des processus complexes',
  competenceLevel: 'Expert en automatisation système',
  projectLink: 'https://github.com/juniormarvin/shell-projects'
},

  // Soft skills
{ name: 'Adaptabilité', category: 'Soft skills', logo: 'assets/icons/adaptation.png', level: 4, certified: false, projects: [],
  description: 'Capacité à s\'adapter à de nouvelles situations',
  introduction: 'L\'adaptabilité est essentielle pour réussir dans un environnement en constante évolution',
  experience: 'Plus de 5 ans d\'expérience à s\'adapter à de nouveaux environnements et technologies',
  competenceLevel: 'Expert en adaptation aux changements',
  projectLink: 'https://github.com/juniormarvin/adaptability-projects'
},
{ name: 'Assertivité', category: 'Soft skills', logo: 'assets/icons/assertivite.png', level: 4, certified: false, projects: [],
  description: 'Communication claire et directe',
  introduction: 'L\'assertivité est essentielle pour une communication efficace et respectueuse',
  experience: 'Plus de 5 ans d\'expérience en communication assertive avec des équipes multiculturelles',
  competenceLevel: 'Expert en communication assertive',
  projectLink: 'https://github.com/juniormarvin/assertiveness-projects'
},
{ name: 'Autonomie', category: 'Soft skills', logo: 'assets/icons/autonomie.png', level: 4, certified: false, projects: [],
  description: 'Capacité à travailler de manière autonome',
  introduction: 'L\'autonomie est essentielle pour la prise de responsabilités et l\'efficacité',
  experience: 'Plus de 5 ans d\'expérience à travailler de manière autonome sur des projets',
  competenceLevel: 'Expert en autonomie professionnelle',
  projectLink: 'https://github.com/juniormarvin/autonomy-projects'
},
{ name: "Esprit d'initiative", category: 'Soft skills', logo: 'assets/icons/initiative.png', level: 4, certified: false, projects: [],
  description: 'Capacité à prendre des initiatives',
  introduction: "L'esprit d'initiative est essentiel pour la résolution de problèmes et l'innovation",
  experience: 'Plus de 5 ans d\'expérience à proposer et mettre en œuvre des solutions innovantes',
  competenceLevel: 'Expert en innovation et initiative',
  projectLink: 'https://github.com/juniormarvin/initiative-projects'
},
{ name: 'Polyvalence', category: 'Soft skills', logo: 'assets/icons/polyvalence.png', level: 4, certified: false, projects: [],
  description: 'Capacité à effectuer plusieurs tâches',
  introduction: 'La polyvalence est essentielle pour optimiser les ressources et la productivité',
  experience: 'Plus de 5 ans d\'expérience à gérer plusieurs projets simultanément',
  competenceLevel: 'Expert en multitâche et polyvalence',
  projectLink: 'https://github.com/juniormarvin/multitasking-projects'
},
{ name: 'Rigueur', category: 'Soft skills', logo: 'assets/icons/rigueur.png', level: 4, certified: false, projects: [],
  description: 'Capacité à respecter les règles et les procédures',
  introduction: 'La rigueur est essentielle pour la qualité et la fiabilité du travail',
  experience: 'Plus de 5 ans d\'expérience à maintenir des standards élevés de qualité',
  competenceLevel: 'Expert en qualité et conformité',
  projectLink: 'https://github.com/juniormarvin/quality-projects'
},
{ name: 'S.S.T.', category: 'Soft skills', logo: 'assets/icons/SST.png', level: 4, certified: true, projects: [],
  description: 'Sécurité et santé au travail',
  introduction: 'La SST est essentielle pour un environnement de travail sain et sécurisé',
  experience: 'Certifié en SST, ayant mis en place des procédures de sécurité efficaces',
  competenceLevel: 'Expert en sécurité et prévention',
  projectLink: 'https://github.com/juniormarvin/sst-projects'
},
{ name: "Sens de l'organisation", category: 'Soft skills', logo: 'assets/icons/organisation.png', level: 4, certified: false, projects: [],
  description: 'Capacité à organiser son travail',
  introduction: "Le sens de l'organisation est essentiel pour la planification et l'efficacité",
  experience: 'Plus de 5 ans d\'expérience à gérer des projets complexes avec succès',
  competenceLevel: 'Expert en gestion de projet',
  projectLink: 'https://github.com/juniormarvin/organization-projects'
},
{ name: 'Communication', category: 'Soft skills', logo: 'assets/icons/communication.png', level: 4, certified: false, projects: [],
  description: 'Communication efficace et claire',
  introduction: 'La communication est essentielle pour la collaboration et la résolution de problèmes',
  experience: 'Plus de 5 ans d\'expérience en communication professionnelle avec des équipes multiculturelles',
  competenceLevel: 'Expert en communication d\'équipe',
  projectLink: 'https://github.com/juniormarvin/communication-projects'
},
{ name: 'Créativité', category: 'Soft skills', logo: 'assets/icons/creativity.png', level: 4, certified: false, projects: [],
  description: 'Pensée créative et innovation',
  introduction: 'La créativité est essentielle pour l\'innovation et la résolution de problèmes',
  experience: 'Plus de 5 ans d\'expérience à proposer des solutions innovantes',
  competenceLevel: 'Expert en innovation et créativité',
  projectLink: 'https://github.com/juniormarvin/creativity-projects'
},
{ name: 'Flexibilité', category: 'Soft skills', logo: 'assets/icons/flexibility.png', level: 4, certified: false, projects: [],
  description: 'Adaptabilité et flexibilité',
  introduction: 'La flexibilité est essentielle pour s\'adapter aux changements et aux contraintes',
  experience: 'Plus de 5 ans d\'expérience à gérer des situations imprévues',
  competenceLevel: 'Expert en adaptabilité',
  projectLink: 'https://github.com/juniormarvin/flexibility-projects'
},
{ name: 'Gestion du temps', category: 'Soft skills', logo: 'assets/icons/time_management.png', level: 4, certified: false, projects: [],
  description: 'Organisation et gestion du temps',
  introduction: 'La gestion du temps est essentielle pour la productivité et l\'efficacité',
  experience: 'Plus de 5 ans d\'expérience à optimiser le temps et les ressources',
  competenceLevel: 'Expert en gestion du temps',
  projectLink: 'https://github.com/juniormarvin/time-management-projects'
},
{ name: 'Intelligence émotionnelle', category: 'Soft skills', logo: 'assets/icons/emotional_intelligence.png', level: 4, certified: false, projects: [],
  description: 'Compréhension et gestion des émotions',
  introduction: 'L\'intelligence émotionnelle est essentielle pour la communication et le leadership',
  experience: 'Plus de 5 ans d\'expérience à gérer les relations interpersonnelles',
  competenceLevel: 'Expert en intelligence émotionnelle',
  projectLink: 'https://github.com/juniormarvin/emotional-intelligence-projects'
},
{ name: 'Leadership', category: 'Soft skills', logo: 'assets/icons/leadership.png', level: 4, certified: false, projects: [],
  description: 'Capacité à diriger et inspirer',
  introduction: 'Le leadership est essentiel pour guider les équipes vers la réussite',
  experience: 'Plus de 5 ans d\'expérience en leadership et management d\'équipe',
  competenceLevel: 'Expert en leadership',
  projectLink: 'https://github.com/juniormarvin/leadership-projects'
},
{ name: 'Motivation', category: 'Soft skills', logo: 'assets/icons/motivation.png', level: 4, certified: false, projects: [],
  description: 'Auto-motivation et motivation des équipes',
  introduction: 'La motivation est essentielle pour maintenir l\'engagement et la performance',
  experience: 'Plus de 5 ans d\'expérience à maintenir la motivation des équipes',
  competenceLevel: 'Expert en motivation et engagement',
  projectLink: 'https://github.com/juniormarvin/motivation-projects'
},
{ name: 'Organisation', category: 'Soft skills', logo: 'assets/icons/organization.png', level: 4, certified: false, projects: [],
  description: 'Organisation et planification',
  introduction: 'L\'organisation est essentielle pour la planification et l\'exécution réussie',
  experience: 'Plus de 5 ans d\'expérience à organiser des projets complexes',
  competenceLevel: 'Expert en organisation',
  projectLink: 'https://github.com/juniormarvin/organization-projects'
},
{ name: 'Présentation', category: 'Soft skills', logo: 'assets/icons/presentation.png', level: 4, certified: false, projects: [],
  description: 'Présentation et démonstration',
  introduction: 'La présentation est essentielle pour communiquer efficacement',
  experience: 'Plus de 5 ans d\'expérience à présenter des concepts techniques',
  competenceLevel: 'Expert en présentation',
  projectLink: 'https://github.com/juniormarvin/presentation-projects'
},
{ name: 'Résolution de problèmes', category: 'Soft skills', logo: 'assets/icons/problem_solving.png', level: 4, certified: false, projects: [],
  description: 'Analyse et résolution de problèmes',
  introduction: 'La résolution de problèmes est essentielle pour l\'innovation et l\'efficacité',
  experience: 'Plus de 5 ans d\'expérience à résoudre des problèmes complexes',
  competenceLevel: 'Expert en résolution de problèmes',
  projectLink: 'https://github.com/juniormarvin/problem-solving-projects'
},
{ name: 'Travail d\'équipe', category: 'Soft skills', logo: 'assets/icons/teamwork.png', level: 4, certified: false, projects: [],
  description: 'Collaboration et travail en équipe',
  introduction: 'Le travail d\'équipe est essentiel pour la réussite des projets',
  experience: 'Plus de 5 ans d\'expérience à travailler en équipe multiculturelle',
  competenceLevel: 'Expert en collaboration',
  projectLink: 'https://github.com/juniormarvin/teamwork-projects'
},

// Outils
{ name: 'AWS', category: 'Cloud', logo: 'assets/icons/aws.png', level: 4, certified: true, projects: [],
  description: 'Cloud computing avec AWS',
  introduction: 'AWS est ma plateforme cloud de choix pour le déploiement d\'applications scalables',
  experience: 'Plus de 4 ans d\'expérience avec AWS, ayant déployé des applications à grande échelle',
  competenceLevel: 'Expert en AWS et cloud computing',
  projectLink: 'https://github.com/juniormarvin/aws-projects'
},
{ name: 'Docker', category: 'Outils', logo: 'assets/icons/docker.png', level: 4, certified: false, projects: [],
  description: 'Conteneurisation d\'applications',
  introduction: 'Docker est essentiel pour la conteneurisation et le déploiement d\'applications',
  experience: 'Plus de 4 ans d\'expérience avec Docker, ayant conteneurisé des applications complexes',
  competenceLevel: 'Expert en Docker et conteneurisation',
  projectLink: 'https://github.com/juniormarvin/docker-projects'
},
{ name: 'Ansible', category: 'Cloud', logo: 'assets/icons/ansible.png', level: 4, certified: false, projects: [],
  description: 'Automatisation avec Ansible',
  introduction: 'Ansible est essentiel pour l\'automatisation des tâches système',
  experience: 'Plus de 4 ans d\'expérience avec Ansible, ayant automatisé des processus complexes',
  competenceLevel: 'Expert en automatisation système',
  projectLink: 'https://github.com/juniormarvin/ansible-projects'
},
{ name: 'Azure', category: 'Cloud', logo: 'assets/icons/azure.png', level: 3, certified: false, projects: [],
  description: 'Cloud computing avec Azure',
  introduction: 'Azure est une plateforme cloud polyvalente pour le déploiement d\'applications',
  experience: 'Plus de 2 ans d\'expérience avec Azure, ayant déployé des applications d\'entreprise',
  competenceLevel: 'Avancé en Azure et cloud computing',
  projectLink: 'https://github.com/juniormarvin/azure-projects'
},
{ name: 'Kubernetes', category: 'Cloud', logo: 'assets/icons/kubernetes.png', level: 4, certified: false, projects: [],
  description: 'Orchestration avec Kubernetes',
  introduction: 'Kubernetes est essentiel pour l\'orchestration de conteneurs à grande échelle',
  experience: 'Plus de 3 ans d\'expérience avec Kubernetes, ayant orchestré des clusters à grande échelle',
  competenceLevel: 'Expert en Kubernetes et orchestration',
  projectLink: 'https://github.com/juniormarvin/kubernetes-projects'
},
{ name: 'Google Cloud', category: 'Cloud', logo: 'assets/icons/google-cloud.png', level: 3, certified: false, projects: [],
  description: 'Cloud computing avec Google Cloud',
  introduction: 'Google Cloud est une plateforme cloud performante pour le déploiement d\'applications',
  experience: 'Plus de 2 ans d\'expérience avec Google Cloud, ayant déployé des applications à haute disponibilité',
  competenceLevel: 'Avancé en Google Cloud',
  projectLink: 'https://github.com/juniormarvin/gcp-projects'
},
{ name: 'Azure DevOps', category: 'Outils', logo: 'assets/icons/azure_devops.png', level: 4, certified: false, projects: [],
  description: 'Gestion de projets et déploiements Azure',
  introduction: 'Azure DevOps est essentiel pour la gestion de projets et le CI/CD',
  experience: 'Plus de 3 ans d\'expérience avec Azure DevOps, ayant automatisé des processus de déploiement',
  competenceLevel: 'Expert en DevOps et CI/CD',
  projectLink: 'https://github.com/juniormarvin/azure-devops-projects'
},
{ name: 'Cypress', category: 'Outils', logo: 'assets/icons/cypress.png', level: 4, certified: true, projects: [],
  description: 'Tests end-to-end pour les applications web',
  introduction: 'Cypress est essentiel pour les tests automatisés et la qualité du code',
  experience: 'Plus de 3 ans d\'expérience avec Cypress, ayant automatisé des tests complexes',
  competenceLevel: 'Expert en tests automatisés',
  projectLink: 'https://github.com/juniormarvin/cypress-projects'
},
{ name: 'GitLab', category: 'Outils', logo: 'assets/icons/gitlab.png', level: 4, certified: false, projects: [],
  description: 'Gestion de projets et CI/CD',
  introduction: 'GitLab est essentiel pour la gestion de projets et le CI/CD',
  experience: 'Plus de 3 ans d\'expérience avec GitLab, ayant automatisé des pipelines CI/CD',
  competenceLevel: 'Expert en GitLab et CI/CD',
  projectLink: 'https://github.com/juniormarvin/gitlab-projects'
},
{ name: 'Git', category: 'Outils', logo: 'assets/icons/git.png', level: 5, certified: false, projects: [],
  description: 'Contrôle de version avec Git',
  introduction: 'Git est mon outil de contrôle de version préféré pour le développement collaboratif',
  experience: 'Plus de 7 ans d\'expérience avec Git, ayant géré des dépôts complexes',
  competenceLevel: 'Expert en gestion de dépôts Git',
  projectLink: 'https://github.com/juniormarvin/git-projects'
},
{ name: 'Jenkins', category: 'Outils', logo: 'assets/icons/jenkins.png', level: 4, certified: false, projects: [],
  description: 'Automatisation de déploiements',
  introduction: 'Jenkins est essentiel pour l\'automatisation des déploiements',
  experience: 'Plus de 4 ans d\'expérience avec Jenkins, ayant automatisé des déploiements complexes',
  competenceLevel: 'Expert en automatisation Jenkins',
  projectLink: 'https://github.com/juniormarvin/jenkins-projects'
},
{ name: 'Jira', category: 'Outils', logo: 'assets/icons/jira.png', level: 4, certified: false, projects: [],
  description: 'Gestion de projets Agile',
  introduction: 'Jira est essentiel pour la gestion de projets Agile',
  experience: 'Plus de 5 ans d\'expérience avec Jira, ayant géré des projets Agile',
  competenceLevel: 'Expert en gestion de projet Agile',
  projectLink: 'https://github.com/juniormarvin/jira-projects'
},
{ name: 'OWASP Dependency Track', category: 'Sécurité', logo: 'assets/icons/dtrack.png', level: 4, certified: false, projects: [],
  description: 'Analyse de dépendances et sécurité',
  introduction: 'OWASP Dependency Track est mon outil de choix pour la gestion des vulnérabilités',
  experience: 'Plus de 3 ans d\'expérience avec OWASP Dependency Track, ayant analysé des milliers de dépendances',
  competenceLevel: 'Expert en analyse de vulnérabilités',
  projectLink: 'https://github.com/juniormarvin/dtrack-projects'
},
{ name: 'Piano Analytics', category: 'Outils', logo: 'assets/icons/ATInternet.png', level: 4, certified: true, projects: [],
  description: 'Analyse de données et intelligence artificielle',
  introduction: 'Piano Analytics est mon outil de choix pour l\'analyse de données',
  experience: 'Plus de 3 ans d\'expérience avec Piano Analytics, ayant analysé des données complexes',
  competenceLevel: 'Expert en analyse de données',
  projectLink: 'https://github.com/juniormarvin/piano-analytics-projects'
},
{ name: 'Postman', category: 'Outils', logo: 'assets/icons/postman.png', level: 4, certified: false, projects: [],
  description: 'Test d\'APIs REST',
  introduction: 'Postman est mon outil de choix pour le test d\'APIs',
  experience: 'Plus de 3 ans d\'expérience avec Postman, ayant automatisé des tests d\'APIs',
  competenceLevel: 'Expert en test d\'APIs',
  projectLink: 'https://github.com/juniormarvin/postman-projects'
},
{ name: 'PowerBI', category: 'Analyse de données', logo: 'assets/icons/powerbi.png', level: 4, certified: false, projects: [],
  description: 'Analyse de données et visualisation',
  introduction: 'PowerBI est mon outil de choix pour la création de tableaux de bord interactifs',
  experience: 'Plus de 3 ans d\'expérience avec PowerBI, ayant créé des dashboards complexes',
  competenceLevel: 'Expert en visualisation de données',
  projectLink: 'https://github.com/juniormarvin/powerbi-projects'
},
{ name: 'Sentry', category: 'Outils', logo: 'assets/icons/sentry.png', level: 4, certified: false, projects: [],
  description: 'Monitoring et débogage',
  introduction: 'Sentry est mon outil de choix pour le monitoring et le débogage',
  experience: 'Plus de 3 ans d\'expérience avec Sentry, ayant mis en place des systèmes de monitoring',
  competenceLevel: 'Expert en monitoring',
  projectLink: 'https://github.com/juniormarvin/sentry-projects'
},
{ name: 'Snyk', category: 'Sécurité', logo: 'assets/icons/snyk.png', level: 4, certified: false, projects: [],
  description: 'Sécurité des dépendances',
  introduction: 'Snyk est mon outil de choix pour la détection de vulnérabilités dans les dépendances',
  experience: 'Plus de 3 ans d\'expérience avec Snyk, ayant sécurisé des milliers de projets',
  competenceLevel: 'Expert en sécurité des dépendances',
  projectLink: 'https://github.com/juniormarvin/snyk-projects'
},
{ name: 'SonarQube', category: 'Sécurité', logo: 'assets/icons/sonarqube.png', level: 4, certified: false, projects: [],
  description: 'Analyse de code et qualité',
  introduction: 'SonarQube est mon outil de choix pour l\'analyse statique du code',
  experience: 'Plus de 4 ans d\'expérience avec SonarQube, ayant automatisé l\'analyse du code',
  competenceLevel: 'Expert en qualité du code',
  projectLink: 'https://github.com/juniormarvin/sonarqube-projects'
},
{ name: 'Swagger', category: 'Outils', logo: 'assets/icons/swagger.png', level: 4, certified: false, projects: [],
  description: 'Documentation d\'APIs',
  introduction: 'Swagger est mon outil de choix pour la documentation d\'APIs',
  experience: 'Plus de 3 ans d\'expérience avec Swagger, ayant documenté des APIs complexes',
  competenceLevel: 'Expert en documentation d\'APIs',
  projectLink: 'https://github.com/juniormarvin/swagger-projects'
},
{ name: 'PostgreSQL', category: 'Bases de données', logo: 'assets/icons/postgresql.png', level: 4, certified: false, projects: [],
  description: 'Base de données relationnelle PostgreSQL',
  introduction: 'PostgreSQL est ma base de données relationnelle préférée pour les applications d\'entreprise',
  experience: 'Plus de 5 ans d\'expérience avec PostgreSQL, ayant conçu et optimisé des schémas complexes',
  competenceLevel: 'Expert en conception et optimisation PostgreSQL',
  projectLink: 'https://github.com/juniormarvin/postgresql-projects'
},
{ name: 'Trello', category: 'Outils', logo: 'assets/icons/trello.png', level: 4, certified: false, projects: [],
  description: 'Gestion de tâches Agile',
  introduction: 'Trello est mon outil de choix pour la gestion de tâches Agile',
  experience: 'Plus de 3 ans d\'expérience avec Trello, ayant géré des projets Agile',
  competenceLevel: 'Expert en gestion de tâches',
  projectLink: 'https://github.com/juniormarvin/trello-projects'
},
{ name: 'VS Code', category: 'Outils de développement', logo: 'assets/icons/vscode.png', level: 5, certified: false, projects: [],
  description: 'Éditeur de code source',
  introduction: 'VS Code est mon éditeur de code principal pour le développement',
  experience: 'Plus de 6 ans d\'expérience avec VS Code, ayant personnalisé mon environnement de développement',
  competenceLevel: 'Expert en configuration et extensions VS Code',
  projectLink: 'https://github.com/juniormarvin/vscode-projects'
},
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
