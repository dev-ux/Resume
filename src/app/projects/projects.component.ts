import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

interface Project {
  name: string;
  description: string;
  short_description: string;
  source_file: string;
  picture: string;
  programingLangage: string;
  isImageLoading: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  projectTranslations: any = {};

  constructor(private translate: TranslateService) {
    // Set default language if not already set
    if (!this.translate.currentLang) {
      this.translate.setDefaultLang('en');
    }
  }

  ngOnInit() {
    // Initialize projects with default values
    this.initializeProjects();

    // Get translations
    this.translate.get('projects').subscribe((translations: any) => {
      this.projectTranslations = translations;
      this.updateProjectTranslations();
    });
  }

  private initializeProjects() {
    this.projects = [
      {
        name: 'Kunto',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/Kunto',
        picture: '/assets/images/projects/kunto.jpg',
        programingLangage: 'Angular;Node.js;TypeScript;HTML;CSS;JavaScript',
        isImageLoading: true
      },
      {
        name: 'LeTexto',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/leTexto',
        picture: '/assets/images/projects/texto-why.png',
        programingLangage: 'Modern Web Technologies',
        isImageLoading: true
      },
      {
        name: 'Snake',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/Snake',
        picture: '/assets/images/projects/snake.png',
        programingLangage: 'Python;upemtk',
        isImageLoading: true
      },
      {
        name: 'Game Of Stools',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/GameOfStools',
        picture: '/assets/images/projects/GameOfStool.png',
        programingLangage: 'C;MLV-2.0.2',
        isImageLoading: true
      },
      {
        name: 'Shoot\'em Up',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/ShootemUp',
        picture: '/assets/images/projects/shot_emup.png',
        programingLangage: 'C;MLV-2.0.2',
        isImageLoading: true
      },
      {
        name: 'Hanabi',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/Hanabi',
        picture: '/assets/images/projects/Hanabi.png',
        programingLangage: 'Java;Eclipse',
        isImageLoading: true
      },
      {
        name: 'ChatOs',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/ChatOs',
        picture: '/assets/images/projects/chatos.png',
        programingLangage: 'Java;Eclipse',
        isImageLoading: true
      },
      {
        name: 'Tésé et le Minotor',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/TeseMinotor',
        picture: '/assets/images/projects/t_m.png',
        programingLangage: 'Python',
        isImageLoading: true
      },
      {
        name: 'Site de vente de Vin',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/SiteVenteVin',
        picture: '/assets/images/projects/venteVin.png',
        programingLangage: 'PHP;HTML;CSS;JavaScript;PostgresQL',
        isImageLoading: true
      },
      {
        name: 'Tower Control',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/TowerControl',
        picture: '/assets/images/projects/towerControl.png',
        programingLangage: 'C++;VS Code',
        isImageLoading: true
      },
      {
        name: 'Deep Puzzle Solving',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/DeepPuzzleSolving',
        picture: '/assets/images/projects/puzle.png',
        programingLangage: 'Python;numpy;torch;Google Colaboratory',
        isImageLoading: true
      },
      {
        name: 'Ray Tracing',
        description: '',
        short_description: '',
        source_file: 'https://github.com/dev-ux/RayTracing',
        picture: '/assets/images/projects/raytracing.png',
        programingLangage: 'C++;OpenCV;VS Code',
        isImageLoading: true
      }
    ];
  }

  private updateProjectTranslations() {
    this.projects.forEach(project => {
      const projectName = project.name.toLowerCase().replace(/[^a-z0-9]/g, '');
      const currentLang = this.translate.currentLang;
      
      // Get translations for the current language
      let description = this.projectTranslations[projectName]?.description?.[currentLang] || '';
      let shortDescription = this.projectTranslations[projectName]?.short_description?.[currentLang] || '';
      
      // Fallback to English if current language translation is not available
      if (!description) {
        description = this.projectTranslations[projectName]?.description?.['en'] || '';
      }
      if (!shortDescription) {
        shortDescription = this.projectTranslations[projectName]?.short_description?.['en'] || '';
      }
      
      project.description = description;
      project.short_description = shortDescription;
    });
  }
}
