import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  content: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterLink]
})
export class BlogComponent implements OnInit {
  posts: BlogPost[] = [
    {
      id: 'hacking-security-days',
      title: 'Hacking Security Days: Une immersion dans le hacking éthique',
      date: '2025-02-01',
      category: 'Sécurité',
      excerpt: 'Mon expérience lors des Hacking Security Days, un événement axé sur le hacking éthique et les bonnes pratiques de sécurité.',
      image: '/assets/images/blog/hacking-security.jpg',
      content: `Les Hacking Security Days ont été une véritable immersion dans le monde du hacking éthique. 
      J'ai participé à des ateliers pratiques sur la détection des vulnérabilités et la mise en place de systèmes de défense.
      Les conférences sur les nouvelles techniques de sécurité ont été particulièrement enrichissantes.
      J'ai également appris à utiliser des outils de sécurité avancés et à mettre en place des stratégies de défense multi-couches.
      Cette expérience m'a convaincu de l'importance de la sécurité dans le développement moderne.`,
      tags: ['Hacking', 'Sécurité', 'Test d\'intrusion', 'Hacking Éthique']
    },
    {
      id: 'devfest',
      title: 'DevFest: L\'esprit de la communauté',
      date: '2025-02-01',
      category: 'Développement',
      excerpt: 'Mon expérience lors du DevFest, un événement communautaire rassemblant développeurs et passionnés de tech pour partager et apprendre ensemble.',
      image: '/assets/images/blog/devfest.jpg',
      content: `Le DevFest a été une expérience enrichissante sur le plan communautaire. 
      J'ai eu l'opportunité de rencontrer d'autres passionnés de tech et de partager mes connaissances.
      Les sessions de codage et les ateliers pratiques ont été particulièrement instructifs.
      Cette expérience m'a rappelé l'importance de la collaboration et du partage dans le développement logiciel.`,
      tags: ['Communauté', 'Développement', 'Ateliers']
    },
    {
      id: 'vivatech',
      title: 'VivaTech 2024: Une expérience immersive',
      date: '2024-05-22',
      category: 'Conférence Tech',
      excerpt: 'Mon expérience à VivaTech 2024, le plus grand salon de l\'innovation en Europe. Découverte des dernières tendances en IA, blockchain et cybersécurité.',
      image: '',
      content: '',
      tags: []
    }
  ];

  constructor(private translate: TranslateService) {
    // Initialize default language
    this.translate.use('fr');
  }

  ngOnInit(): void {
    // Initialize language on component load
  }
}
