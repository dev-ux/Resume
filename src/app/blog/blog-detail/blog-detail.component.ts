import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss'],
  standalone: true,
  imports: [RouterLink, CommonModule]
})
export class BlogDetailComponent implements OnInit {
  post: any;
  posts = [
    {
      id: 'vivatech',
      title: 'VivaTech: Une expérience immersive',
      date: '20 mai 2025',
      category: 'Tech Conference',
      content: `
        <section class="post-section">
          <h2>Introduction</h2>
          <p>VivaTech 2025, le plus grand salon de l'innovation en Europe, a été une expérience incroyable pour moi. Au cours de ces trois jours, j'ai eu l'opportunité d'assister à des conférences sur les dernières tendances technologiques et de rencontrer des professionnels passionnés.</p>
        </section>

        <section class="post-section">
          <h2>Les conférences</h2>
          <p>J'ai assisté à plusieurs conférences majeures, notamment sur l'IA, la blockchain et la cybersécurité. Les experts du domaine ont partagé leurs visions sur l'avenir de ces technologies et leurs impacts sur notre société.</p>
        </section>

        <section class="post-section">
          <h2>Les démonstrations</h2>
          <p>Les stands des entreprises innovantes m'ont permis de voir en action les technologies de demain. J'ai notamment été impressionné par les démonstrations de réalité augmentée et de solutions de cybersécurité avancées.</p>
        </section>

        <section class="post-section">
          <h2>Mon retour</h2>
          <p>Cette expérience m'a confirmé que je suis sur la bonne voie dans ma carrière. Les technologies que j'étudie et développe sont au cœur des innovations actuelles et futures. Je suis impatient de continuer à apprendre et à contribuer à ces avancées technologiques.</p>
        </section>
      `,
      gallery: [
        {
          url: '/assets/images/blog/viva1.png',
          alt: 'Vue générale de VivaTech',
          caption: 'Vue générale du salon VivaTech 2025'
        },
        {
          url: '/assets/images/blog/viva2.png',
          alt: 'Conférence sur l\'IA',
          caption: 'Conférence sur l\'Intelligence Artificielle'
        },
        {
          url: '/assets/images/blog/viva3.png',
          alt: 'Stand de démonstration',
          caption: 'Démonstration de réalité augmentée'
        },
        {
          url: '/assets/images/blog/viva4.png',
          alt: 'Stand de démonstration',
          caption: 'Démonstration de réalité augmentée'
        },
        {
          url: '/assets/images/blog/viva5.png',
          alt: 'Stand de démonstration',
          caption: 'Démonstration de réalité augmentée'
        }
      ]
    },
    {
      id: 'cybernigh',
      title: 'CyberNight: La nuit de la cybersécurité',
      category: 'Cybersecurity',
      content: `
        <section class="post-section">
          <h2>Une soirée intense</h2>
          <p>L'événement CyberNight a été une expérience unique, mêlant conférences techniques et démonstrations pratiques de sécurité informatique.</p>
        </section>

        <section class="post-section">
          <h2>Les conférences</h2>
          <p>Les experts du domaine ont partagé leurs connaissances sur les dernières menaces et les techniques de défense les plus efficaces. J'ai notamment appris beaucoup sur les attaques zero-day et les techniques de détection.</p>
        </section>

        <section class="post-section">
          <h2>Les démonstrations</h2>
          <p>Les sessions pratiques ont été particulièrement enrichissantes. J'ai pu voir en action des outils de sécurité et comprendre comment ils fonctionnent réellement.</p>
        </section>

        <section class="post-section">
          <h2>Mon retour</h2>
          <p>Cette expérience m'a permis de renforcer mes connaissances en cybersécurité et de comprendre les enjeux actuels. Je suis maintenant plus à l'aise avec les concepts de sécurité informatique et les outils disponibles.</p>
        </section>
      `,
      gallery: [
        {
          url: '/assets/images/blog/cyber1.jpg',
          alt: 'Vue générale de VivaTech',
          caption: 'Vue générale du salon VivaTech 2025'
        },
        {
          url: '/assets/images/blog/cyber2.jpg',
          alt: 'Conférence sur l\'IA',
          caption: 'Conférence sur l\'Intelligence Artificielle'
        },
        {
          url: '/assets/images/blog/cyber3.jpg',
          alt: 'Stand de démonstration',
          caption: 'Démonstration de réalité augmentée'
        }
      ]
    },
    {
      id: 'hacking',
      title: 'Hacking Security Days: L\'art de la défense',
      date: '5 mars 2025',
      category: 'Security',
      content: `
        <section class="post-section">
          <h2>Les ateliers pratiques</h2>
          <p>L'événement Hacking Security Days m'a permis de participer à des ateliers pratiques sur le hacking éthique et la protection des systèmes. J'ai pu mettre en pratique mes connaissances et apprendre de nouveaux outils.</p>
        </section>

        <section class="post-section">
          <h2>Les conférences</h2>
          <p>Les experts du domaine ont partagé leurs expériences sur les attaques récentes et les techniques de défense les plus efficaces. J'ai notamment appris sur les nouvelles menaces et les tendances en matière de sécurité.</p>
        </section>

        <section class="post-section">
          <h2>Les démonstrations</h2>
          <p>Les démonstrations de hacking éthique ont été particulièrement instructives. J'ai pu voir en action des techniques de sécurité et comprendre comment les systèmes peuvent être protégés.</p>
        </section>

        <section class="post-section">
          <h2>Mon retour</h2>
          <p>Cette expérience m'a permis de renforcer mes compétences en sécurité informatique et de comprendre les enjeux actuels. Je suis maintenant plus à l'aise avec les concepts de sécurité et les outils disponibles.</p>
        </section>
      `,
      gallery: [
        {
          url: '/assets/images/blog/viva1.png',
          alt: 'Vue générale de VivaTech',
          caption: 'Vue générale du salon VivaTech 2025'
        },
        {
          url: '/assets/images/blog/viva2.png',
          alt: 'Conférence sur l\'IA',
          caption: 'Conférence sur l\'Intelligence Artificielle'
        },
        {
          url: '/assets/images/blog/viva3.png',
          alt: 'Stand de démonstration',
          caption: 'Démonstration de réalité augmentée'
        }
      ]
    },
    {
      id: 'devfest',
      title: 'DevFest: L\'esprit de la communauté',
      date: '1 février 2025',
      category: 'Development',
      content: `
        <section class="post-section">
          <h2>Une communauté inspirante</h2>
          <p>Le DevFest m'a permis de rencontrer des développeurs passionnés et de partager des expériences avec eux. J'ai découvert de nouvelles technologies et des approches innovantes en développement.</p>
        </section>

        <section class="post-section">
          <h2>Les conférences</h2>
          <p>Les experts du domaine ont partagé leurs connaissances sur les dernières tendances en développement et les meilleures pratiques. J'ai notamment appris sur les frameworks modernes et les outils de développement.</p>
        </section>

        <section class="post-section">
          <h2>Les ateliers</h2>
          <p>Les sessions pratiques ont été particulièrement enrichissantes. J'ai pu mettre en pratique mes connaissances et apprendre de nouveaux outils de développement.</p>
        </section>

        <section class="post-section">
          <h2>Mon retour</h2>
          <p>Cette expérience m'a permis de renforcer mes compétences en développement et de comprendre les tendances actuelles. Je suis maintenant plus à l'aise avec les technologies modernes et les approches de développement.</p>
        </section>
      `,
      gallery: [
        {
          url: '/assets/images/blog/viva1.png',
          alt: 'Vue générale de VivaTech',
          caption: 'Vue générale du salon VivaTech 2025'
        },
        {
          url: '/assets/images/blog/viva2.png',
          alt: 'Conférence sur l\'IA',
          caption: 'Conférence sur l\'Intelligence Artificielle'
        },
        {
          url: '/assets/images/blog/viva3.png',
          alt: 'Stand de démonstration',
          caption: 'Démonstration de réalité augmentée'
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.post = this.posts.find(p => p.id === id);
  }
}
