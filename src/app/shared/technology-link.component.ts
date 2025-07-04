import { Component, Input } from '@angular/core';

interface TechnologyDescriptions {
  [key: string]: string;
}

@Component({
  selector: 'app-technology-link',
  template: `
    <div class="tags">
      <a *ngFor="let tag of tags" 
         class="tag"
         [routerLink]="getRoute(tag)"
         [attr.data-description]="getDescription(tag)">
        {{ tag }}
      </a>
    </div>
  `,
  styles: [`
    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 1rem;
    }

    .tag {
      background: #e9ecef;
      padding: 0.25rem 0.75rem;
      border-radius: 12px;
      font-size: 0.9rem;
      color: #333;
      text-decoration: none;
      transition: all 0.3s ease;
      position: relative;
    }

    .tag:hover {
      background: #007bff;
      color: white;
    }

    .tag::after {
      content: attr(data-description);
      position: absolute;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
      background: #333;
      color: white;
      padding: 0.5rem;
      border-radius: 4px;
      white-space: nowrap;
      z-index: 10;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .tag:hover::after {
      opacity: 1;
    }
  `]
})
export class TechnologyLinkComponent {
  @Input() tags: string[] = [];

  getDescription(tag: string): string {
    const descriptions: TechnologyDescriptions = {
      'Next.js': 'Framework React pour le développement web',
      'React Native': 'Framework pour applications mobiles',
      'PHP': 'Langage de programmation côté serveur',
      'Symfony': 'Framework PHP pour applications web',
      'JWT': 'JSON Web Tokens pour l\'authentification',
      'API': 'Interfaces de programmation',
      'MySQL': 'Système de gestion de base de données',
      'Bootstrap': 'Framework CSS pour le design responsive',
      'Angular': 'Framework JavaScript',
      'TypeScript': 'Langage de programmation',
      'HTML5': 'Langage de balisage web',
      'CSS3': 'Langage de style',
      'Spring Boot': 'Framework Java',
      'Java': 'Langage de programmation',
      'Node.js': 'Environnement JavaScript côté serveur',
      'MongoDB': 'Base de données NoSQL',
      'Développement': 'Compétences en développement',
      'Projet': 'Gestion de projet',
      'Alternance': 'Formation en alternance',
      'Stratégie Digitale': 'Stratégie marketing digitale',
      'Publicité': 'Publicité en ligne',
      'Photoshop': 'Logiciel de retouche photo',
      'Agilité': 'Méthodes agiles',
      'Cybersécurité': 'Sécurité informatique',
      'Marketing': 'Stratégie marketing',
      'EFREI': 'École d\'ingénieurs',
      'ITA': 'Institut des Technologies d\'Abidjan',
      'Systèmes d’Information': 'Gestion des systèmes d’information',
      'Licence': 'Diplôme universitaire',
      'Architecture': 'Architecture logicielle',
      'Programmation': 'Développement logiciel',
      'Base': 'Connaissances de base',
      'POO': 'Programmation Orientée Objet',
      'Accessibilité': 'Conception accessible',
      'Mobile': 'Développement mobile'
    };
    return descriptions[tag] || '';
  }

  getRoute(tag: string): string[] {
    // Liste des compétences techniques
    const technicalSkills = [
      'Next.js', 'React Native', 'PHP', 'Symfony', 'JWT', 'API', 'MySQL',
      'Bootstrap', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'Spring Boot',
      'Java', 'Node.js', 'MongoDB', 'Développement', 'Programmation',
      'Base', 'POO', 'Accessibilité', 'Mobile'
    ];

    // Liste des compétences humaines
    const humanSkills = [
      'Projet', 'Alternance', 'Stratégie Digitale', 'Publicité',
      'Photoshop', 'Agilité', 'Cybersécurité', 'Marketing', 'EFREI',
      'ITA', 'Systèmes d’Information', 'Licence', 'Architecture'
    ];

    // Normaliser le tag pour la route
    const routeTag = tag.toLowerCase().replace(/\s+/g, '-');

    if (technicalSkills.includes(tag)) {
      return ['/skills/technical', routeTag];
    } else if (humanSkills.includes(tag)) {
      return ['/skills/human', routeTag];
    } else {
      return ['/skills/technical', routeTag]; // Par défaut, on considère comme technique
    }
  }
}
