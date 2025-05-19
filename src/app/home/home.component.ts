import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
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
  public name: string = 'Kassi Marvin';
  public role: string = 'Full Stack Developer';
  public description: string | undefined;
  public projects: Project[] = [];
  public skills: Skill[] = [];

  constructor(
    private translate: TranslateService,
    private fileDownloadService: FileDownloadService
  ) {
    // Set default language
    translate.setDefaultLang('en');
    // Use browser language if available
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
    
    this.initializeData();
  }

  ngOnInit(): void {
    // Initialize translations
    this.translate.get('home.description').subscribe((res: string) => {
      this.description = res;
    });

    // Get all translations
    this.translate.get('home').subscribe((translations: any) => {
      this.description = translations.description;
      // You can add more translations here if needed
    });
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
    this.projects = [
      {
        name: 'Snake',
        description: 'snake_description',
        short_description: 'snake_shorte_description',
        source_file: '',
        picture: 'assets/img/projects/snake.jfif',
        programingLangage: 'Python;upemtk',
        category: 'Game Development',
        features: [
          'Smooth graphics implementation',
          'Intuitive controls',
          'Score tracking',
          'Responsive gameplay'
        ],
        technologies: [
          { name: 'Python', level: 'Advanced' },
          { name: 'upemtk', level: 'Intermediate' }
        ]
      },
      {
        name: 'Game Of Stools',
        description: 'GameOfStools_description',
        short_description: 'GameOfStools_short_description',
        source_file: '',
        picture: 'assets/img/projects/GameOfStool.png',
        programingLangage: 'Langace C;MLV-2.0.2',
        category: 'Game Development',
        features: [
          'Strategic gameplay',
          'MLV graphics integration',
          'Multiplayer support',
          'AI opponent'
        ],
        technologies: [
          { name: 'C', level: 'Advanced' },
          { name: 'MLV-2.0.2', level: 'Advanced' }
        ]
      },
      {
        name: 'Shoot\'em Up',
        description: 'ShootemUp_description',
        short_description: 'ShootemUp_Short_description',
        source_file: '',
        picture: 'assets/img/projects/shot_emup.png',
        programingLangage: 'Langace C;MLV-2.0.2',
        category: 'Game Development',
        features: [
          'Fast-paced action',
          'Multiple enemies',
          'Power-ups system',
          'Score system'
        ],
        technologies: [
          { name: 'C', level: 'Advanced' },
          { name: 'MLV-2.0.2', level: 'Advanced' }
        ]
      },
      {
        name: 'Hanabi',
        description: 'Hanabi_description',
        short_description: 'Hanabi_Short_description',
        source_file: '',
        picture: 'assets/img/projects/Hanabi.png',
        programingLangage: 'Java;Eclipse',
        category: 'Game Development',
        features: [
          'Cooperative gameplay',
          'Card management system',
          'Turn-based mechanics',
          'Score tracking'
        ],
        technologies: [
          { name: 'Java', level: 'Advanced' },
          { name: 'Eclipse', level: 'Advanced' }
        ]
      },
      {
        name: 'ChatOs',
        description: 'ChatOs_description',
        short_description: 'ChatOs_Short_description',
        source_file: '',
        picture: 'assets/img/projects/chatos.png',
        programingLangage: 'Java;Eclipse',
        category: 'Software Development',
        features: [
          'Real-time messaging',
          'User management',
          'Message history',
          'File sharing'
        ],
        technologies: [
          { name: 'Java', level: 'Advanced' },
          { name: 'Eclipse', level: 'Advanced' }
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
