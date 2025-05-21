import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

type Language = 'en' | 'fr';

interface BlogPost {
  id: string;
  title: { en: string; fr: string };
  date: string;
  category: { en: string; fr: string };
  excerpt: { en: string; fr: string };
  image: string;
  content: { en: string; fr: string };
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
  currentLang: Language = 'en';
  posts: BlogPost[] = [
    {
      "id": "vivatech",
      "title": {
        "en": "VivaTech 2024: An Immersive Experience",
        "fr": "VivaTech 2024: Une expérience immersive"
      },
      "date": "2024-05-22",
      "category": {
        "en": "Tech Conference",
        "fr": "Conférence Tech"
      },
      "excerpt": {
        "en": "My experience at VivaTech 2024, the largest innovation fair in Europe. Discovering the latest trends in AI, blockchain, and cybersecurity.",
        "fr": "Mon expérience à VivaTech 2024, le plus grand salon de l'innovation en Europe. Découverte des dernières tendances en IA, blockchain et cybersécurité."
      },
      "image": "/assets/images/blog/viva2.png",
      "content": {
        "en": "At VivaTech 2024, I had the opportunity to discover the latest technological innovations. The AI booths were particularly impressive, with demonstrations of advanced chatbots and facial recognition systems. I also attended conferences on blockchain and cybersecurity, where experts shared their visions of future trends. The atmosphere was electric, with thousands of professionals from all over Europe coming together to exchange and learn. This experience confirmed for me the importance of staying up to date with the latest technologies and participating in such events to develop professionally.",
        "fr": "Lors de VivaTech 2024, j'ai eu l'opportunité de découvrir les dernières innovations technologiques. Les stands d'IA étaient particulièrement impressionnants, avec des démonstrations de chatbots avancés et de systèmes de reconnaissance faciale. J'ai également assisté à des conférences sur la blockchain et la cybersécurité, où les experts ont partagé leurs visions sur les futures tendances. L'atmosphère était électrique, avec des milliers de professionnels venus de toute l'Europe pour échanger et apprendre. Cette expérience m'a confirmé l'importance de rester à jour sur les dernières technologies et de participer à ce type d'événements pour se développer professionnellement."
      },
      "tags": ["AI", "Blockchain", "Cybersecurity", "Innovation"]
    },
    {
      id: 'cybernigh',
      title: {
        en: 'CyberNight: The Cybersecurity Night',
        fr: 'CyberNight: La nuit de la cybersécurité'
      },
      date: '11-12-2021',
      category: {
        en: 'Cybersecurity',
        fr: 'Cybersécurité'
      },
      excerpt: {
        en: 'My experience at CyberNight, an event dedicated to cybersecurity with practical demonstrations and expert conferences.',
        fr: 'Mon expérience lors de l\'événement CyberNight, une soirée dédiée à la sécurité informatique avec des démonstrations pratiques et des conférences experts.'
      },
      image: '/assets/images/blog/cyber1.jpg',
      content: {
        en: `CyberNight was a unique experience. 
        The event began with a presentation on new cybersecurity threats, followed by practical demonstrations of ethical hacking.
        I learned how to identify common vulnerabilities and implement effective defense strategies.
        The most interesting part was the workshop on protecting sensitive data, where we simulated attacks and countermeasures.
        This evening gave me a more realistic perspective on the challenges faced by cybersecurity professionals today.`,
        fr: `CyberNight a été une expérience unique en son genre. 
        L\'événement a débuté par une présentation sur les nouvelles menaces en cybersécurité, suivie de démonstrations pratiques de hacking éthique.
        J\'ai appris à identifier les vulnérabilités courantes et à mettre en place des stratégies de défense efficaces.
        La partie la plus intéressante a été le workshop sur la protection des données sensibles, où nous avons simulé des attaques et des contre-mesures.
        Cette soirée m\'a donné une perspective plus réaliste des défis auxquels sont confrontés les professionnels de la cybersécurité aujourd\'hui.`
      },
      tags: ['Cybersecurity', 'Hacking', 'Data Protection', 'Security']
    },
    {
      id: 'hacking',
      title: {
        en: 'Hacking Security Days: The Art of Defense',
        fr: 'Hacking Security Days: L\'art de la défense'
      },
      date: '2025-03-05',
      category: {
        en: 'Security',
        fr: 'Sécurité'
      },
      excerpt: {
        en: 'My account of the Hacking Security Days event, where I attended workshops on ethical hacking techniques and system protection.',
        fr: 'Mon compte-rendu de l\'événement Hacking Security Days, où j\'ai assisté à des ateliers sur les techniques de hacking éthique et la protection des systèmes.'
      },
      image: '/assets/images/blog/hsd3.jpg',
      content: {
        en: `The Hacking Security Days were a true immersion into the world of ethical hacking.
        I participated in practical workshops on vulnerability detection and defense systems.
        The conferences on new security techniques were particularly enriching.
        I also learned to use advanced security tools and implement multi-layer defense strategies.
        This experience convinced me of the importance of security in modern development.`,
        fr: `Les Hacking Security Days ont été une véritable immersion dans le monde du hacking éthique. 
        J\'ai participé à des ateliers pratiques sur la détection des vulnérabilités et la mise en place de systèmes de défense.
        Les conférences sur les nouvelles techniques de sécurité ont été particulièrement enrichissantes.
        J\'ai également appris à utiliser des outils de sécurité avancés et à mettre en place des stratégies de défense multi-couches.
        Cette expérience m\'a convaincu de l\'importance de la sécurité dans le développement moderne.`
      },
      tags: ['Hacking', 'Security', 'Penetration Testing', 'Ethical Hacking']
    },
    {
      id: 'devfest',
      title: {
        en: 'DevFest: The Spirit of Community',
        fr: 'DevFest: L\'esprit de la communauté'
      },
      date: '2025-02-01',
      category: {
        en: 'Development',
        fr: 'Développement'
      },
      excerpt: {
        en: 'My experience at DevFest, a community event bringing together developers and tech enthusiasts to share and learn together.',
        fr: 'Mon expérience lors du DevFest, un événement communautaire rassemblant développeurs et passionnés de tech pour partager et apprendre ensemble.'
      },
      image: '/assets/images/blog/devfest.jpg',
      content: {
        en: `DevFest was an enriching community experience. 
        I had the opportunity to meet other tech enthusiasts and share my knowledge.
        The coding sessions and practical workshops were particularly instructive.
        This experience reminded me of the importance of collaboration and sharing in software development.`,
        fr: `Le DevFest a été une expérience enrichissante sur le plan communautaire. 
        J\'ai eu l\'opportunité de rencontrer d\'autres passionnés de tech et de partager mes connaissances.
        Les sessions de code et les ateliers pratiques ont été particulièrement instructifs.
        Cette expérience m\'a rappelé l\'importance de la collaboration et du partage dans le développement logiciel.`
      },
      tags: ['Community', 'Development', 'Open Source', 'Learning']
    }
  ];

  constructor(public translate: TranslateService) {
    // Initialize default language
    this.translate.use('en');
    this.currentLang = 'en';

    // Subscribe to language changes
    this.translate.onLangChange.subscribe((event) => {
      this.currentLang = event.lang as Language;
    });
  }

  ngOnInit(): void {
    // Initialize language on component load
    this.currentLang = this.translate.currentLang as Language;
  }
}
