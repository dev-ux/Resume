import { Component, OnInit } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';
import { SkillsService } from '../services/skills.service';

interface Anecdote {
  title: string;
  description: string;
  result: string;
  valueAdd: string;
  projectId: string;
  projectName: string;
}

interface Project {
  id: string;
  name: string;
}

interface Skill {
  name: string;
  definition: string;
  anecdotes: Anecdote[];
  critique: string;
  masteryLevel: string;
  priority: string;
  acquisitionSpeed: string;
  evolution: string;
  currentLevel: string;
  targetLevel: string;
  formations: string;
  projects: Project[];
  advice?: string; // Optional advice property
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  categories = ['frontend', 'backend', 'tools', 'human'];
  categoryNames = {
    frontend: 'Frontend',
    backend: 'Backend',
    tools: 'Outils',
    human: 'Compétences Humaines'
  };

  skills: { [key: string]: Skill[] } = {
    frontend: [
      {
        name: 'Next.js',
        definition: 'Framework React moderne spécialisé dans le développement d\'applications web performantes et scalables, offrant des fonctionnalités avancées comme le rendu côté serveur et l\'optimisation des performances.',
        anecdotes: [
          {
            title: 'Refonte du site Wisetech-ENG',
            description: 'J\'ai mené la refonte complète du site principal de Wisetech-ENG en utilisant Next.js, implémentant les meilleures pratiques de SEO et de performance.',
            result: 'Amélioration significative des performances du site et augmentation du trafic organique de 30%',
            valueAdd: 'J\'ai optimisé l\'architecture technique pour une meilleure scalabilité et maintenabilité du code',
            projectId: 'wisetech-refonte',
            projectName: 'Wisetech-ENG Refonte'
          }
        ],
        critique: 'Maîtrise avancée du framework avec une vitesse d\'acquisition rapide grâce à mon expérience précédente avec React.',
        masteryLevel: 'Expert',
        priority: 'Haute',
        acquisitionSpeed: 'Rapide',
        evolution: 'Continuation de l\'optimisation des performances et exploration des nouvelles fonctionnalités de Next.js 14',
        currentLevel: 'Expert',
        targetLevel: 'Expert avancé',
        formations: 'Autoformation continue via la documentation officielle et les cas d\'usage',
        projects: [
          { id: 'wisetech-refonte', name: 'Wisetech-ENG Refonte' },
          { id: 'clowoo', name: 'Clowoo' }
        ],
        advice: 'Favoriser l\'utilisation des fonctionnalités de Next.js pour l\'optimisation des performances et la scalabilité des applications.'
      },
      {
        name: 'React',
        definition: 'Bibliothèque JavaScript pour la création d\'interfaces utilisateur réactives et performantes, utilisée pour développer des applications web modernes et interactives.',
        anecdotes: [
          {
            title: 'Développement de l\'application Kunto',
            description: 'J\'ai participé au développement de l\'interface mobile de l\'application Kunto, une application dédiée au sport adapté.',
            result: 'Création d\'une interface utilisateur accessible et intuitive pour les utilisateurs en situation de handicap',
            valueAdd: 'Amélioration de l\'accessibilité et de l\'expérience utilisateur grâce aux bonnes pratiques React',
            projectId: 'kunto',
            projectName: 'Kunto'
          }
        ],
        critique: 'Maîtrise solide de React acquise au cours de mon alternance EFREI/Kunto.',
        masteryLevel: 'Avancé',
        priority: 'Haute',
        acquisitionSpeed: 'Progressive',
        evolution: 'Continuation de l\'exploration des fonctionnalités avancées de React et des bonnes pratiques de développement.',
        currentLevel: 'Avancé',
        targetLevel: 'Expert',
        formations: 'Formation EFREI et expérience professionnelle',
        projects: [
          { id: 'kunto', name: 'Kunto' },
          { id: 'clowoo', name: 'Clowoo' }
        ]
      }
    ],
    backend: [
      {
        name: 'Symfony',
        definition: 'Framework PHP moderne et robuste qui offre une architecture MVC complète et des fonctionnalités avancées pour le développement web sécurisé et évolutif.',
        anecdotes: [
          {
            title: 'Développement de Clowoo',
            description: 'J\'ai conçu et développé l\'API backend de Clowoo avec Symfony, implémentant un système de gestion des utilisateurs, des transactions et des articles.',
            result: 'Création d\'une API REST sécurisée et performante gérant plus de 1000 utilisateurs actifs',
            valueAdd: 'Architecture modulaire et API RESTful permettant une intégration facile avec le frontend React Native',
            projectId: 'clowoo',
            projectName: 'Clowoo'
          }
        ],
        critique: 'Maîtrise solide du framework avec une vitesse d\'acquisition progressive grâce à l\'alternance EFREI/Kunto.',
        masteryLevel: 'Avancé',
        priority: 'Haute',
        acquisitionSpeed: 'Progressive',
        evolution: 'Continuation de l\'optimisation des performances et exploration des nouvelles fonctionnalités de Symfony 7',
        currentLevel: 'Avancé',
        targetLevel: 'Expert',
        formations: 'Formation ISCOD et expérience professionnelle',
        projects: [
          { id: 'clowoo', name: 'Clowoo' },
          { id: 'kunto', name: 'Kunto' }
        ]
      },
      {
        name: 'PHP',
        definition: 'Langage de programmation côté serveur utilisé pour développer des applications web dynamiques et interactives.',
        anecdotes: [
          {
            title: 'Développement e-commerce',
            description: 'J\'ai développé un site e-commerce complet avec PHP, intégrant les systèmes de paiement et de gestion des commandes.',
            result: 'Création d\'une plateforme de vente en ligne sécurisée et performante',
            valueAdd: 'Architecture modulaire permettant une évolution future facile',
            projectId: 'ecommerce',
            projectName: 'Site e-commerce'
          }
        ],
        critique: 'Maîtrise solide de PHP acquise au cours de mes différents projets.',
        masteryLevel: 'Avancé',
        priority: 'Haute',
        acquisitionSpeed: 'Progressive',
        evolution: 'Continuation de l\'exploration des bonnes pratiques de développement PHP et des frameworks modernes.',
        currentLevel: 'Avancé',
        targetLevel: 'Expert',
        formations: 'Formation ISCOD et expérience professionnelle',
        projects: [
          { id: 'access', name: 'Access Surveillance' },
          { id: 'ecommerce', name: 'Site e-commerce' }
        ]
      }
    ],
    tools: [
      {
        name: 'Git',
        definition: 'Git est un système de contrôle de version distribué qui permet de suivre les modifications des fichiers et de collaborer efficacement avec une équipe.',
        anecdotes: [
          {
            title: 'Gestion de projet Wisetech-ENG',
            description: 'J\'ai mis en place et maintenu un workflow Git efficace avec branches de développement et de production distinctes.',
            result: 'Amélioration significative de la qualité du code et réduction des conflits de version',
            valueAdd: 'Automatisation des déploiements avec Git Hooks et CI/CD',
            projectId: 'wisetech',
            projectName: 'Wisetech-ENG'
          }
        ],
        critique: 'Maîtrise avancée de Git acquise au cours de mes différents projets.',
        masteryLevel: 'Expert',
        priority: 'Moyenne',
        acquisitionSpeed: 'Rapide',
        evolution: 'Continuation de l\'exploration des fonctionnalités avancées de Git et des bonnes pratiques de versionnement.',
        currentLevel: 'Expert',
        targetLevel: 'Expert avancé',
        formations: 'Autoformation continue et expérience professionnelle',
        projects: [
          { id: 'wisetech', name: 'Wisetech-ENG' },
          { id: 'kunto', name: 'Kunto' }
        ],
        advice: 'Établir des conventions de commit claires et documentées pour faciliter la collaboration et la maintenance du code.'
      },
      {
        name: 'MySQL',
        definition: 'Système de gestion de base de données relationnelle utilisé pour stocker et gérer les données des applications web.',
        anecdotes: [
          {
            title: 'Développement Clowoo',
            description: 'J\'ai conçu et optimisé la base de données MySQL de Clowoo, implémentant des requêtes performantes et des index optimisés.',
            result: 'Base de données performante gérant efficacement les transactions et les données utilisateur',
            valueAdd: 'Architecture robuste permettant une évolution future facile',
            projectId: 'clowoo',
            projectName: 'Clowoo'
          }
        ],
        critique: 'Maîtrise solide de MySQL acquise au cours de mes différents projets.',
        masteryLevel: 'Avancé',
        priority: 'Haute',
        acquisitionSpeed: 'Progressive',
        evolution: 'Continuation de l\'exploration des bonnes pratiques de développement et d\'optimisation des bases de données.',
        currentLevel: 'Avancé',
        targetLevel: 'Expert',
        formations: 'Formation ISCOD et expérience professionnelle',
        projects: [
          { id: 'clowoo', name: 'Clowoo' },
          { id: 'access', name: 'Access Surveillance' }
        ]
      }
    ],
    human: [
      {
        name: 'Travail en équipe',
        definition: 'Capacité à collaborer efficacement avec une équipe, à communiquer clairement et à participer activement à la réalisation des objectifs communs.',
        anecdotes: [
          {
            title: 'Projet Kunto',
            description: 'J\'ai travaillé en étroite collaboration avec l\'équipe de développement pour implémenter les fonctionnalités backend de l\'application mobile.',
            result: 'Livraison réussie du projet dans les délais et en respectant les spécifications',
            valueAdd: 'Amélioration continue des processus de travail et contribution active aux discussions techniques',
            projectId: 'kunto',
            projectName: 'Kunto'
          }
        ],
        critique: 'Compétence essentielle pour mon profil de développeur, développée continuellement au fil des projets.',
        masteryLevel: 'Avancé',
        priority: 'Haute',
        acquisitionSpeed: 'Progressive',
        evolution: 'Continuation du développement des compétences en leadership et en gestion de projet.',
        currentLevel: 'Avancé',
        targetLevel: 'Expert',
        formations: 'Expérience professionnelle et formations complémentaires',
        projects: [
          { id: 'kunto', name: 'Kunto' },
          { id: 'wisetech', name: 'Wisetech-ENG' }
        ]
      },
      {
        name: 'Gestion de projet',
        definition: 'Capacité à planifier, organiser et suivre l\'avancement d\'un projet, en assurant la coordination des différentes parties prenantes.',
        anecdotes: [
          {
            title: 'Refonte Wisetech-ENG',
            description: 'J\'ai coordonné la refonte complète du site principal, en gérant les différentes phases du projet et en assurant la communication avec les parties prenantes.',
            result: 'Livraison réussie du projet dans les délais et en respectant les spécifications',
            valueAdd: 'Amélioration des processus de travail et optimisation des ressources',
            projectId: 'wisetech-refonte',
            projectName: 'Wisetech-ENG Refonte'
          }
        ],
        critique: 'Compétence développée au cours de mes différents projets.',
        masteryLevel: 'Avancé',
        priority: 'Haute',
        acquisitionSpeed: 'Progressive',
        evolution: 'Continuation du développement des compétences en gestion de projet agile.',
        currentLevel: 'Avancé',
        targetLevel: 'Expert',
        formations: 'Formation ISCOD et expérience professionnelle',
        projects: [
          { id: 'wisetech-refonte', name: 'Wisetech-ENG Refonte' },
          { id: 'clowoo', name: 'Clowoo' }
        ]
      },
      {
        name: 'Communication',
        definition: 'Capacité à communiquer efficacement, à l\'oral et à l\'écrit, avec différents publics et dans différents contextes professionnels.',
        anecdotes: [
          {
            title: 'Développement Clowoo',
            description: 'J\'ai communiqué efficacement avec l\'équipe et les parties prenantes pour définir les spécifications techniques et suivre l\'avancement du projet.',
            result: 'Amélioration de la compréhension mutuelle et optimisation de la collaboration',
            valueAdd: 'Réduction des malentendus et amélioration de la qualité du code',
            projectId: 'clowoo',
            projectName: 'Clowoo'
          }
        ],
        critique: 'Compétence essentielle pour mon profil de développeur.',
        masteryLevel: 'Avancé',
        priority: 'Haute',
        acquisitionSpeed: 'Progressive',
        evolution: 'Continuation du développement des compétences en communication technique et non-technique.',
        currentLevel: 'Avancé',
        targetLevel: 'Expert',
        formations: 'Formation EFREI et expérience professionnelle',
        projects: [
          { id: 'clowoo', name: 'Clowoo' },
          { id: 'kunto', name: 'Kunto' }
        ]
      }
    ]
  };

  currentCategory: string = 'frontend';

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private skillsService: SkillsService
  ) {
    this.route.params.subscribe(params => {
      const category = params['category'];
      if (this.categories.includes(category)) {
        this.currentCategory = category;
      }
    });
  }

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // Update translations if needed
    });
  }

  getSkillsByCategory(category: string): Skill[] {
    return this.skills[category] || [];
  }
}
