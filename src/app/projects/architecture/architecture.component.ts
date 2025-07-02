import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent implements OnInit {
  project: Project = {
    id: 'architecture',
    name: 'Architecture Logicielle - Système de Monitoring Usine de Vêtements',
    description: 'Conception d\'une architecture logicielle basée sur les microservices pour le monitoring en temps réel des machines d\'une usine textile réparties par catégorie (Préparation, Réalisation, Vérification).',
    technologies: ['Java', 'Spring Boot', 'Kafka', 'WebSocket', 'Docker', 'Kubernetes'],
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
          role: 'Responsable Qualité',
          department: 'Qualité',
          needs: [
            'Connaître en temps réel le rendement de chaque machine',
            'Faire du monitoring des performances'
          ]
        },
        {
          name: 'Marc',
          role: 'Responsable Préparation',
          department: 'Production',
          needs: [
            'Informations sur l\'état et les opérations des machines de Préparation',
            'Données en temps réel'
          ]
        },
        {
          name: 'Nicolas',
          role: 'Responsable Réalisation',
          department: 'Production',
          needs: [
            'Informations sur l\'état et les opérations des machines de Réalisation',
            'Données en temps réel'
          ]
        },
        {
          name: 'Chloé',
          role: 'Responsable Vérification',
          department: 'Production',
          needs: [
            'Informations sur l\'état et les opérations des machines de Vérification',
            'Données en temps réel'
          ]
        }
      ],
      interactions: [
        {
          actors: ['Léa', 'Marc', 'Nicolas', 'Chloé'],
          description: 'Interaction avec le système de monitoring en temps réel',
          frequency: 'Continu pendant les heures de production'
        }
      ]
    },
    results: {
      personal: [
        'Développement d\'une architecture robuste et évolutive',
        'Mise en place d\'un système de monitoring temps réel',
        'Optimisation des performances et de la fiabilité',
        'Documentation complète de l\'architecture'
      ],
      company: [
        'Amélioration de la qualité de production',
        'Optimisation des performances des machines',
        'Réduction des temps d\'arrêt',
        'Meilleure prise de décision en temps réel'
      ]
    },
    future: {
      immediate: [
        'Déploiement complet du système',
        'Formation des utilisateurs',
        'Mise en place du monitoring'
      ],
      longTerm: [
        'Ajout de fonctionnalités d\'analyse prédictive',
        'Évolution vers des alertes automatiques',
        'Optimisation continue des performances',
        'Évolution de l\'architecture'
      ],
      current: [
        'Maintenance et support',
        'Mises à jour régulières',
        'Amélioration continue',
        'Support aux utilisateurs'
      ]
    },
    criticalAnalysis: 'Cette architecture microservices offre une excellente scalabilité et maintenabilité, mais nécessite une attention particulière à la gestion des communications entre services et à la fiabilité du système. La complexité introduite par l\'architecture microservices doit être équilibrée avec les bénéfices en termes de performance et de flexibilité.',
    relatedSkills: [
      'Architecture Microservices',
      'Java/Spring Boot',
      'Kafka',
      'WebSocket',
      'Docker/Kubernetes',
      'Monitoring et Performance',
      'Conception Système',
      'Gestion de Projets'
    ]
  };

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.project = this.projectsService.getProject('architecture') || this.project;
  }
}
