import { Injectable } from '@angular/core';
import { Project } from '../projects/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  projects: Project[] = [
    {
      id: 'architecture',
      name: 'Architecture Logicielle - Usine de Vêtements',
      description: 'Conception d\'une architecture logicielle basée sur les microservices pour le monitoring en temps réel des machines d\'une usine textile réparties par catégorie (Préparation, Réalisation, Vérification).',
      technologies: ['Java', 'Spring Boot', 'Kafka', 'WebSocket', 'Docker', 'Kubernetes'],
      github: 'https://github.com/dev-ux/Architecture_logicielle',
      image: 'assets/images/projects/architecture.png',
      presentation: {
        context: 'Fabrique, usine de vêtements, souhaite mettre en place un système de monitoring en temps réel des machines de production réparties en 3 catégories : Préparation, Réalisation et Vérification.',
        definition: 'Projet d\'architecture logicielle visant à développer une solution de monitoring temps réel pour optimiser la production et la qualité.',
        objectives: 'Fournir une solution de monitoring en temps réel permettant aux responsables de suivre les performances des machines et de prendre des décisions rapides.',
        challenges: [
          'Latence dans la prise de décision',
          'Segmentation des données par catégorie de machines',
          'Monitoring en temps réel',
          'Fiabilité et disponibilité du système'
        ]
      },
      steps: {
        analysis: [
          'Analyse des besoins métier et des enjeux',
          'Identification des contraintes techniques',
          'Évaluation des standards architecturaux',
          'Définition des exigences de performance'
        ],
        design: [
          'Choix de l\'architecture microservices',
          'Conception du schéma de communication',
          'Définition des services et leurs interactions',
          'Planification de la mise en production'
        ],
        implementation: [
          'Développement des services',
          'Mise en place de l\'infrastructure',
          'Tests de performance et fiabilité',
          'Déploiement en production'
        ]
      },
      actors: {
        main: [
          {
            name: 'Léa',
            role: 'Architecte Logiciel',
            department: 'IT',
            needs: ['Conception de l\'architecture', 'Définition des standards', 'Supervision technique']
          },
          {
            name: 'Thomas',
            role: 'Développeur Backend',
            department: 'IT',
            needs: ['Développement des services', 'Intégration des outils', 'Tests']
          }
        ],
        interactions: [
          {
            actors: ['Léa', 'Thomas'],
            description: 'Supervision technique et coordination',
            frequency: 'Continu'
          }
        ]
      },
      results: {
        personal: [
          'Conception d\'une architecture robuste',
          'Déploiement réussi du système',
          'Optimisation des performances'
        ],
        company: [
          'Amélioration de la production',
          'Réduction des temps d\'arrêt',
          'Meilleure prise de décision'
        ]
      },
      future: {
        immediate: [
          'Support et maintenance',
          'Formation des utilisateurs',
          'Optimisation continue'
        ],
        longTerm: [
          'Évolution vers l\'analyse prédictive',
          'Amélioration de la fiabilité',
          'Optimisation des ressources'
        ],
        current: [
          'Maintenance régulière',
          'Support technique',
          'Mises à jour de sécurité'
        ]
      },
      criticalAnalysis: 'Cette architecture microservices offre une excellente scalabilité et maintenabilité, mais nécessite une attention particulière à la gestion des communications entre services et à la fiabilité du système.',
      relatedSkills: [
        'Architecture Microservices',
        'Java/Spring Boot',
        'Kafka',
        'WebSocket',
        'Docker/Kubernetes',
        'Monitoring et Performance'
      ]
    },
    {
      id: 'java-project',
      name: 'Projet Java',
      description: 'Développement d\'une application Java avec Spring Boot',
      technologies: ['Java', 'Spring Boot', 'MySQL', 'Maven'],
      github: 'https://github.com/dev-ux/java-project',
      image: 'assets/images/projects/java-project.png',
      presentation: {
        context: 'Développement d\'une application métier',
        definition: 'Application Java avec Spring Boot pour la gestion de données',
        objectives: 'Créer une application robuste et scalable',
        challenges: [
          'Performance',
          'Sécurité',
          'Maintenabilité'
        ]
      },
      steps: {
        analysis: [
          'Analyse des besoins',
          'Conception de la base de données',
          'Architecture du backend'
        ],
        design: [
          'API REST',
          'Gestion des transactions',
          'Sécurité'
        ],
        implementation: [
          'Développement des endpoints',
          'Tests unitaires',
          'Déploiement'
        ]
      },
      actors: {
        main: [
          {
            name: 'John',
            role: 'Développeur Java',
            department: 'IT',
            needs: ['Développement', 'Tests', 'Documentation']
          }
        ],
        interactions: [
          {
            actors: ['John'],
            description: 'Développement et tests',
            frequency: 'Continu'
          }
        ]
      },
      results: {
        personal: [
          'Développement d\'une application robuste',
          'Tests unitaires complets',
          'Documentation technique'
        ],
        company: [
          'Solution fiable',
          'Performance optimale',
          'Maintenance facile'
        ]
      },
      future: {
        immediate: [
          'Support utilisateur',
          'Mises à jour régulières',
          'Maintenance'
        ],
        longTerm: [
          'Évolution des fonctionnalités',
          'Optimisation continue',
          'Support à long terme'
        ],
        current: [
          'Support technique',
          'Mises à jour de sécurité',
          'Maintenance régulière'
        ]
      },
      criticalAnalysis: 'L\'application Java avec Spring Boot offre une solution robuste et évolutive, mais nécessite une attention particulière à la maintenance et aux mises à jour.',
      relatedSkills: [
        'Java',
        'Spring Boot',
        'MySQL',
        'Développement Web',
        'Tests Automatisés'
      ]
    }
  ];

  getProject(id: string): Project | null {
    return this.projects.find(project => project.id === id) || null;
  }
}
