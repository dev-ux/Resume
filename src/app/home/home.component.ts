import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FileDownloadService } from '../services/file-download.service';
import { saveAs } from 'file-saver';

interface Technology {
  name: string;
  level: string;
}

interface Project {
  name: string;
  description: string;
  short_description: string;
  source_file: string;
  picture: string;
  programingLangage: string;
  category: string;
  features: string[];
  technologies: Technology[];
}

interface Skill {
  category: string;
  items: string[];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      state('void', style({ opacity: 0, transform: 'translateY(20px)' })),
      transition(':enter', [
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  name = 'Kassi Marvin';
  role = 'Ingénieur en développement logiciel';
  description = 'Spécialisé en Angular et en développement full-stack';
  loading = true;
  skills: Skill[] = [];
  projects: Project[] = [];

  constructor(
    private fileDownloadService: FileDownloadService
  ) { }

  ngOnInit(): void {
    this.initializeData();
  }

  downloadCV(): void {
    this.fileDownloadService.downloadFile('/assets/cv/CV_Marvin.pdf', 'CV_Marvin.pdf').subscribe(
      (data: Blob) => {
        saveAs(data, 'CV_Marvin.pdf');
      },
      (error) => {
        console.error('Error downloading CV:', error);
      }
    );
  }

  initializeData(): void {
    this.skills = [
      {
        category: 'Web Development',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'Express.js']
      },
      {
        category: 'Backend & APIs',
        items: ['Java', 'Spring Boot', 'Python', 'Flask', 'RESTful APIs', 'GraphQL']
      },
      {
        category: 'Mobile Development',
        items: ['Swift', 'Kotlin', 'React Native', 'Flutter']
      },
      {
        category: 'Database',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
      },
      {
        category: 'DevOps & Tools',
        items: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins']
      },
      {
        category: 'Cloud & Infrastructure',
        items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
      },
      {
        category: 'Testing & CI/CD',
        items: ['Jest', 'Mocha', 'Chai', 'Jenkins', 'GitHub Actions']
      },
      {
        category: 'Design & UX',
        items: ['Figma', 'Adobe XD', 'Material Design', 'Responsive Design']
      }
    ];

    this.projects = [
      {
        name: 'Snake',
        description: 'Jeu Snake implémenté en Python avec upemtk',
        short_description: 'Jeu Snake classique',
        source_file: '',
        picture: 'assets/img/projects/snake.jfif',
        programingLangage: 'Python;upemtk',
        category: 'Game Development',
        features: [
          'Graphismes fluides',
          'Contrôles intuitifs',
          'Système de score',
          'Jeu réactif'
        ],
        technologies: [
          { name: 'Python', level: 'Avancé' },
          { name: 'upemtk', level: 'Intermédiaire' }
        ]
      },
      {
        name: 'Game Of Stools',
        description: 'Jeu de stratégie en C avec MLV',
        short_description: 'Jeu de stratégie multijoueur',
        source_file: '',
        picture: 'assets/img/projects/GameOfStool.png',
        programingLangage: 'C;MLV-2.0.2',
        category: 'Game Development',
        features: [
          'Jeu stratégique',
          'Intégration graphique MLV',
          'Support multijoueur',
          'IA adverse'
        ],
        technologies: [
          { name: 'C', level: 'Avancé' },
          { name: 'MLV-2.0.2', level: 'Avancé' }
        ]
      },
      {
        name: 'Shoot\'em Up',
        description: 'Jeu d\'action en C avec MLV',
        short_description: 'Jeu d\'action rapide',
        source_file: '',
        picture: 'assets/img/projects/shot_emup.png',
        programingLangage: 'C;MLV-2.0.2',
        category: 'Game Development',
        features: [
          'Action rapide',
          'Multiples ennemis',
          'Système de power-ups',
          'Système de score'
        ],
        technologies: [
          { name: 'C', level: 'Avancé' },
          { name: 'MLV-2.0.2', level: 'Avancé' }
        ]
      },
      {
        name: 'Hanabi',
        description: 'Jeu de cartes Hanabi en Java',
        short_description: 'Jeu de cartes coopératif',
        source_file: '',
        picture: 'assets/img/projects/Hanabi.png',
        programingLangage: 'Java;Eclipse',
        category: 'Game Development',
        features: [
          'Action rapide',
          'Multiples ennemis',
          'Système de power-ups',
          'Système de score'
        ],
        technologies: [
          { name: 'Java', level: 'Avancé' },
          { name: 'Eclipse', level: 'Avancé' }
        ]
      },
      {
        name: 'Tésé et le Minotor',
        description: 'Tese_minotor_description',
        short_description: 'Tese_minotor_Short_description',
        source_file: '',
        picture: 'assets/img/projects/t_m.png',
        programingLangage: 'Python',
        category: 'Game Development',
        features: [
          'Maze generation',
          'Pathfinding algorithms',
          'Character movement',
          'Collision detection'
        ],
        technologies: [
          { name: 'Python', level: 'Advanced' }
        ]
      },
      {
        name: 'Site de vente de Vin',
        description: 'siteVenteVin_description',
        short_description: 'siteVenteVin_Short_description',
        source_file: '',
        picture: 'assets/img/projects/venteVin.png',
        programingLangage: 'PHP;HTML;CSS;JavaScript;PostgresQL',
        category: 'Web Development',
        features: [
          'E-commerce functionality',
          'User authentication',
          'Product catalog',
          'Shopping cart'
        ],
        technologies: [
          { name: 'PHP', level: 'Advanced' },
          { name: 'HTML5', level: 'Advanced' },
          { name: 'CSS3', level: 'Advanced' },
          { name: 'JavaScript', level: 'Advanced' },
          { name: 'PostgreSQL', level: 'Advanced' }
        ]
      },
      {
        name: 'Tower Control',
        description: 'TowerControl_description',
        short_description: 'TowerControl_Short_description',
        source_file: '',
        picture: 'assets/img/projects/towerControl.png',
        programingLangage: 'C++;OpenCV;VS Code',
        category: 'Game Development',
        features: [
          'Air traffic simulation',
          'Collision prevention',
          'Real-time updates',
          'Multiple aircraft management'
        ],
        technologies: [
          { name: 'C++', level: 'Advanced' },
          { name: 'OpenCV', level: 'Advanced' },
          { name: 'VS Code', level: 'Advanced' }
        ]
      },
      {
        name: 'Deep Puzzle Solving',
        description: 'DeepPuzzleSolving_description',
        short_description: 'DeepPuzzleSolving_Short_description',
        source_file: '',
        picture: 'assets/img/projects/puzle.png',
        programingLangage: 'Python;numpy;torch;Google Colaboratory',
        category: 'AI & Machine Learning',
        features: [
          'Neural network implementation',
          'Puzzle solving algorithms',
          'Training visualization',
          'Performance optimization'
        ],
        technologies: [
          { name: 'Python', level: 'Advanced' },
          { name: 'numpy', level: 'Advanced' },
          { name: 'torch', level: 'Advanced' },
          { name: 'Google Colaboratory', level: 'Advanced' }
        ]
      },
      {
        name: 'Ray Tracing',
        description: 'RayTracing_description',
        short_description: 'RayTracing_Short_description',
        source_file: '',
        picture: 'assets/img/projects/raytracing.png',
        programingLangage: 'C++;OpenCV;VS Code',
        category: 'Graphics & Visualization',
        features: [
          'Realistic lighting',
          '3D object rendering',
          'Ray tracing algorithms',
          'Performance optimization'
        ],
        technologies: [
          { name: 'C++', level: 'Advanced' },
          { name: 'OpenCV', level: 'Advanced' },
          { name: 'VS Code', level: 'Advanced' }
        ]
      }
    ];

    this.skills = [
      {
        category: 'Web Development',
        items: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Angular', 'React', 'Node.js', 'Express.js']
      },
      {
        category: 'Backend & APIs',
        items: ['Java', 'Spring Boot', 'Python', 'Flask', 'RESTful APIs', 'GraphQL']
      },
      {
        category: 'Mobile Development',
        items: ['Swift', 'Kotlin', 'React Native', 'Flutter']
      },
      {
        category: 'Database',
        items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase']
      },
      {
        category: 'DevOps & Tools',
        items: ['Docker', 'Kubernetes', 'AWS', 'Git', 'Jenkins']
      },
      {
        category: 'Cloud & Infrastructure',
        items: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
      },
      {
        category: 'Testing & CI/CD',
        items: ['Jest', 'Mocha', 'Chai', 'Jenkins', 'GitHub Actions']
      },
      {
        category: 'Design & UX',
        items: ['Figma', 'Adobe XD', 'Material Design', 'Responsive Design']
      }
    ];
  }

  getSkillsString(skills: string[]): string {
    return skills.join(', ');
  }
}
