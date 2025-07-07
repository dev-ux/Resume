import { Injectable } from '@angular/core';

export interface Skill {
  name: string;
  category: string;
  logo: string;
  level: number;
  certified: boolean;
  projects: string[];
  description: string;
  introduction: string;
  experience: string;
  competenceLevel: string;
  projectLink?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SkillsService {
  skills: Skill[] = [
    // Ingénierie Logicielle
{ name: 'CI/CD', category: 'Ingénierie Logicielle', logo: 'assets/icons/cicd.png', level: 5, certified: false, projects: [],
  description: 'Automatisation des processus de développement et de déploiement',
  introduction: "L'intégration continue (CI) est constituée d'un ensemble de pratiques utilisées en développement logiciel consistant à vérifier à chaque modification de code source que le résultat des modifications ne produit pas de régression dans l'application développée. Parmi ces pratiques, on trouve principalement l'automatisation des builds et des tests.,Il est important, pour garantir la qualité des livraisons et une bonne maîtrise du cycle de développement, d'identifier correctement les livrables par une politique de versionning adaptée. Une bonne gestion des livrables et des configurations sont également essentielles.La livraison continue (CD) est une extension de la CI qui permet de déployer automatiquement les livrables en production, après validation des tests et des contrôles qualité. Cette pratique n'est possible que lorsque les livraisons sont fiables et de qualité, ce qui nécessite une CI bien définie, bien mise en place et bien utilisée. Cet outillage est une des clés pour livrer vite et bien des incréments logiciels, en toute confiance et en toute sécurité.",
  experience: 'J\'ai commencé en 2023 chez Kunto jusqu\'à aujourd\'hui chez Wiesetech, en mettant en place des pipelines CI/CD robustes pour automatiser les tests et les déploiements.',
  competenceLevel: 'J\'ai pu démontrer mes compétences dans ce domaine lors de mes différentes missions en entreprise, ce qui m\'a permis de gagner la confiance de mes collègues et de mes supérieurs. Reconnu comme un expert sur le domaine et les pratiques CI/CD, je suis l\'interlocuteur privilégié dans mon entreprise à ce sujet. Conscient que l\'évolution et les améliorations doivent être constantes, pour répondre à des problématiques sans cesse changeantes, je suis toujours prêt à étendre et renouveler mes compétences en ce domaine. Je pense qu\'il est important de ne pas se reposer sur ses acquis qui peuvent très vite devenir obsolètes.',
  projectLink: 'https://github.com/juniormarvin/cicd-examples'
},
{ name: 'DevOps', category: 'Ingénierie Logicielle', logo: 'assets/icons/devops.png', level: 4, certified: false, projects: [],
  description: 'Pratiques collaboratives entre le développement et les opérations',
  introduction: "DevOps est une philosophie qui allie développement et opérations pour une collaboration optimale. Pour moi, c'est avant tout une culture de l'automatisation et de la collaboration entre développeurs et opérateurs, basée sur l'observabilité, le monitoring métier et les pratiques de Site Reliability Engineering (SRE).\n\nL'automatisation maximale, le monitoring systématique et les petites évolutions successives sont essentiels pour garantir la stabilité et la performance des services tout en progressant continuellement. C'est cette approche qui fait la force du DevOps !",
  experience: "J'ai découvert l'esprit DevOps en 2023 chez Kunto, où j'ai appris l'importance de la collaboration entre les équipes de développement et d'exploitation. Cette expérience m'a permis de comprendre les contraintes de chacun et d'établir une communication directe pour avancer efficacement ensemble. Depuis, je m'efforce de mettre en place et de promouvoir les bonnes pratiques DevOps dans toutes mes missions, en particulier l'automatisation et le monitoring.",
  competenceLevel: "Je me sens complètement imprégné de la culture DevOps, avec une excellente maîtrise des outils et des pratiques associés : conteneurisation, intégration continue, et optimisation des processus. Je suis reconnu pour ma capacité à mettre en place des solutions efficaces et durables.",
  projectLink: 'https://github.com/juniormarvin/devops-projects'
},

{ name: 'Gestion de projet', category: 'Ingénierie Logicielle', logo: 'assets/icons/manager.png', level: 4, certified: false, projects: [],
  description: 'Méthodologies Agile et Scrum pour la gestion de projets',
  introduction: "La gestion de projet est une discipline qui consiste à organiser, planifier, coordonner et contrôler les ressources d'un projet. Pour moi, il est essentiel de transmettre la vision du projet à l'équipe et de créer une adhésion collective autour d'un objectif commun. La communication, la transparence et l'adaptabilité sont des qualités clés pour un chef de projet efficace.",
  experience: "En 2022 chez Wiesetech, j'ai mené avec succès le projet de modernisation de l'infrastructure cloud, impliquant des équipes internationales et nécessitant une coordination étroite entre les différents départements.\n\nEn 2023 chez Access Surveillance, j'ai piloté la transformation digitale de l'entreprise, en mettant en place de nouvelles méthodologies agiles et en formant les équipes à ces nouvelles pratiques.\n\nEn 2024 chez Kunto, j'ai conduit le projet de mise en place d'une plateforme DevOps complète, incluant l'automatisation des tests et des déploiements, ainsi que la mise en place d'indicateurs de performance clés.\n\nEn 2025 chez Wiesetech, j'ai mené le projet de refonte complète de notre système de gestion de projet, en intégrant les meilleures pratiques du marché et en optimisant les processus existants.",
  competenceLevel: "J'ai mené avec succès des projets d'envergure dans des contextes internationaux divers. Je suis conscient que la gestion de projet est une discipline complexe qui nécessite des compétences variées et complémentaires, que je suis prêt à développer pour mener à bien des projets toujours plus ambitieux.",
  projectLink: 'https://github.com/juniormarvin/project-management-projects'
},

{ name: 'Management', category: 'Ingénierie Logicielle', logo: 'assets/icons/project_management.png', level: 4, certified: false, projects: [],
  description: 'Leadership et gestion d\'équipe',
  introduction: "Selon moi, la mission principale d'un manager est de garantir le bien-être de ses collaborateurs, de les aider à progresser et à s'inscrire dans une dynamique d'amélioration continue.\nSi parfois cela peut passer par des décisions et actions difficiles ou délicates, je pense qu'il est important de toujours garder à l'esprit l'intérêt de l'équipe et de l'entreprise.",
  experience: "En 2025 chez Wiesetech, j'ai pris en charge une équipe de stagiaires travaillant sur un projet WordPress.\nCette expérience m'a permis de développer mes compétences en gestion de projet et en mentorat, tout en accompagnant les stagiaires dans leur apprentissage et leur progression technique.",
  competenceLevel: "Cette expérience m'a permis de développer des compétences en mentorat et en accompagnement technique.\nJ'ai su créer un environnement propice à l'apprentissage et à la progression des stagiaires, tout en assurant la qualité du projet WordPress.\nLes stagiaires ont exprimé leur satisfaction quant à mon accompagnement et mon soutien tout au long de leur stage.\nCette expérience m'a confirmé dans mon rôle de manager et m'a permis de développer des compétences précieuses pour l'avenir.",
  projectLink: 'https://github.com/juniormarvin/management-projects'
},

{ name: "Membre d'équipe Agile", category: 'Ingénierie Logicielle', logo: 'assets/icons/agile_team_member.png', level: 5, certified: false, projects: [],
  description: 'Participation à des équipes Agile',
  introduction: "Le membre d'équipe Agile est un contributeur au développement logiciel, qu'il soit développeur, testeur, analyste, etc. Il participe à la définition et au développement de produits logiciels. Il est impliqué dans les différentes cérémonies Agile (daily stand-up, sprint planning, sprint review, sprint retrospective) et contribue à la livraison de valeur incrémentale à chaque itération (sprint). Il partage la responsabilité de la qualité des livrables avec les autres membres de l'équipe et contribue à l'amélioration continue des pratiques de développement.",
  experience: "J'ai découvert l'Agilité chez Access Surveillance en 2023, en tant que chef de projet, où j'ai expérimenté les pratiques Agile et développé le sentiment de responsabilité partagée avec les autres membres de l'équipe.\n\nEn 2024 chez Kunto, en tant que développeur backend, j'ai approfondi ma compréhension des pratiques Agile et contribué activement à la livraison de valeur incrémentale.",
  competenceLevel: "Par mon expérience en tant que contributeur actif dans des équipes Agile, j'ai pu démontrer mes compétences dans ce domaine, qui me permettent aujourd'hui de mieux comprendre les enjeux et les contraintes des équipes de développement, et de mieux les accompagner dans leur progression et leur montée en compétences. Je pense être totalement opérationnel sur les pratiques et les travers de l'Agilité, dans la multitude de contextes et de déclinaisons qui peuvent se présenter.",
  projectLink: 'https://github.com/juniormarvin/agile-projects'
},
{ name: 'RGPD', category: 'Ingénierie Logicielle', logo: 'assets/icons/rgpd.png', level: 5, certified: false, projects: [],
  description: 'Conformité au Règlement Général sur la Protection des Données',
  introduction: "Le RGPD (Règlement Général de Protection des Données) est un règlement européen qui encadre la protection des données personnelles des citoyens européens. Il définit les droits des individus sur leurs données personnelles, les obligations des entreprises qui collectent et traitent ces données, et les sanctions en cas de non respect de ces obligations.\n\nLe RGPD impose aux entreprises de mettre en place des mesures de protection des données personnelles, de garantir la confidentialité, l'intégrité et la disponibilité des données, de respecter les droits des individus sur leurs données, et de notifier les autorités en cas de violation de données.\n\nLe RGPD est un enjeu majeur pour les entreprises qui collectent et traitent des données personnelles, car il garantit la confiance des individus dans le traitement de leurs données et évite les risques de sanctions financières et de réputation en cas de non respect des règles.",
  experience: "Depuis 2025 chez Wiesetech, je supervise le respect du cadre règlementaire en vigueur dans le cadre des activités de test et de développement. Cela consiste principalement en la protection des données personnelles dans notre produit et nos pratiques (données client / intégrité / complétude / rétention / consentement éclairé / finalités).\n\nJ'ai implémenté une mécanique d'envoi de données 'maison' (en python) à destination des activités de test et de développement de nos produits. Ces données permettent de ne pas utiliser des données d'internautes réels à des fins de test et ainsi garantir une complète conformité avec le RGPD, tout en permettant aux développeurs d'actionner l'ensemble des fonctionnalités des produits logiciels de l'entreprise en bénéficiant de données réalistes.",
  competenceLevel: "Le sujet des données de test m'a toujours intéressé, et je pense être totalement opérationnel sur le respect du RGPD dans le cadre des activités de test et de développement. Malgré les points de vue parfois divergeants de mes interlocuteurs sur le sujet, je suis parvenu à démontrer la pertinence de l'usage de données 'simulées' qui atteignent un niveau de réalisme très satisfaisant qui permet de garantir la qualité des tests, tout en respectant la confidentialité et l'intégrité des données des internautes et des clients.",
  projectLink: 'https://github.com/juniormarvin/rgpd-projects'
},
// Langages/frameworks
{ name: 'Python', category: 'Langages/frameworks', logo: 'assets/icons/python.png', level: 4, certified: false, projects: [],
  description: 'Développement d\'applications avec Python',
  introduction: "Python est un langage de programmation polyvalent, qui est utilisé dans de nombreux domaines : développement web, développement logiciel, data science, intelligence artificielle, etc... Python est apprécié pour sa simplicité, sa lisibilité et sa flexibilité. Python est un langage très populaire aujourd'hui, qui est utilisé par de nombreuses entreprises et développeurs pour créer des applications et des services de qualité. J'apprécie dans ce language la facilité de lecture et d'écriture, la richesse des librairies disponibles et la communauté très active qui permet de trouver rapidement des solutions à ses problèmes. Même s'il est souvent associé à des projets de data science, il est très polyvalent et peut être utilisé dans de nombreux domaines. Les contraintes de syntaxe qu'il impose sont un gage de qualité et de lisibilité du code.",
  experience: "Après de nombreux petits scripts, mon premier grand projet python a été l'écriture du 'hit-maker', en 2020 : un peu plus de 1000 lignes de code, une couverture en tests unitaires des modules métier supérieure à 95% (56% de couverture globale du projet). Ce projet sert aujourd'hui à la génération en temps réel de données de test, simulant toute la variété métier de l'activité de l'ensemble de nos clients. Les algorithmes implémentés reproduisent également la saisonnalité qu'on peut constater dans les audiences réelles de sites web et applications mobiles, mais aussi les comportements de navigation et de consommation de contenus.\n\nDepuis 2021, j'ai développé différents outils d'alerting/monitoring en python, qui permettent de détecter et de signaler automatiquement des non respects de la conformité ISO du processus de développement, par l'appel aux APIs de nos outils de CI/CD (Sonarqube, Gitlab) et de gestion de projet (Jira). C'est aussi en python que j'ai codé les récupérations et traitements de données de ces outils (traitements parallèles via l'usage de Futures) pour les intégrer dans des tableaux de bord de suivi de la qualité de nos développements, de l'efficacité de notre usine logicielle.\n\nDans le cadre de ma formation, j'ai également travaillé sur le projet GamesUP, une plateforme de vente de jeux de société en ligne. J'ai développé une API Python pour le système de recommandation, implémentant des algorithmes de Machine Learning pour analyser les données utilisateurs et générer des recommandations personnalisées.\n\nEn 2025, j'ai développé une plateforme d'analyse d'authenticité vidéo, permettant de détecter l'authenticité d'une vidéo via un lien. Ce projet a impliqué le développement d'algorithmes de traitement vidéo et d'analyse de contenu.",
  competenceLevel: "Je me sens totalement à l'aise avec l'écriture de scripts en python et l'implémentation des tests unitaires qui y sont associés. Je pourrais approfondir mes connaissances pour maîtriser des aspects plus avancés du langage, comme la manipulation avancée du multithreading ou de datasets plus complexes.",
  projectLink: 'https://github.com/juniormarvin/python-projects'
},

{ name: 'Angular', category: 'Langages/frameworks', logo: 'assets/icons/angular.png', level: 3, certified: false, projects: [],
  description: 'Développement d\'applications web avec Angular',
  introduction: "Angular est un framework JavaScript développé par Google. Il permet de créer des applications web dynamiques et interactives en utilisant des composants réutilisables. Angular est basé sur le langage TypeScript, un sur-ensemble de JavaScript qui ajoute des fonctionnalités de typage statique et de programmation orientée objet.\n\nAngular propose une architecture basée sur des composants, des modules, des services et des directives, qui permet de structurer et d'organiser le code de manière modulaire et réutilisable. Angular offre également des fonctionnalités avancées comme le routage, la gestion des formulaires, la communication avec des API distantes, la gestion de l'état de l'application, etc...",
  experience: "Dans le cadre scolaire en 2025, j'ai développé des interfaces utilisateurs en Angular pour différents projets : Project Management Tool, Innotech Votes, Portfolio personnel. Ces interfaces devaient répondre à des besoins spécifiques (gestion de projets, vote électronique, présentation de compétences).\n\nJ'ai obtenu, sur ces créations, des retours très positifs de la part des évaluateurs, qui ont apprécié la qualité du travail fourni.\n\nCes projets m'ont permis de développer mes compétences en Angular, de découvrir les bonnes pratiques de développement front-end et d'acquérir une expérience concrète dans la création d'interfaces utilisateurs modernes et interactives.\n\nCes réalisations ont été accompagnées de tests unitaires et d'intégration, pour garantir la qualité du code et la fiabilité des fonctionnalités développées ainsi que de pipelines de CI/CD pour garantir la qualité des livraisons.",
  competenceLevel: "J'ai fait mes premiers pas récemment sous Angular, après le suivi de cours complets et riches en pratique. Je pense être opérationnel sur le développement d'interfaces utilisateurs en Angular, mais je pourrais approfondir mes connaissances pour maîtriser les aspects plus avancés du framework et être plus à l'aise dans des projets de plus grande envergure, dans un cadre professionnel par exemple.",
  projectLink: 'https://github.com/juniormarvin/angular-projects'
},
{ name: 'Java Spring Boot', category: 'Langages/frameworks', logo: 'assets/icons/spring.png', level: 3, certified: false, projects: [],
  description: 'Développement d\'applications web avec Java Spring Boot',
  introduction: "Java Spring Boot est un framework Java qui permet de créer des applications web et des services web de manière rapide et efficace. Spring Boot facilite le développement en proposant des fonctionnalités prêtes à l'emploi (auto-configuration, gestion des dépendances, intégration de serveurs d'applications, etc...) et en suivant les bonnes pratiques de développement (architecture MVC, injection de dépendances, inversion de contrôle, etc...). Spring Boot est basé sur le framework Spring, qui est un des frameworks Java les plus populaires pour le développement d'applications d'entreprise. La surcouche Spring Boot Security permet de sécuriser les applications web et les services web en implémentant par exemple des mécanismes d'authentification et d'autorisation.",
  experience: "J'ai procédé en 2024 au développement et à la maintenance de différents backends dans le cadre scolaire (Project Management Tool, Innotech Votes, Games Up).\n\nJ'ai obtenu, sur ces créations, des retours très positifs des évaluateurs. Ces créations m'ont permis de développer mes compétences en Java Spring Boot, de découvrir les bonnes pratiques de développement backend et d'acquérir une expérience concrète dans la création de services web sécurisés et performants.\n\nCes réalisations ont été accompagnées de tests unitaires et d'intégration, pour garantir la qualité du code et la fiabilité des fonctionnalités développées ainsi que de pipelines de CI/CD pour garantir la qualité des livraisons.",
  competenceLevel: "J'ai fait mes premiers pas récemment sous Java Spring Boot, après le suivi de cours complets et riches en pratique. Je pense être opérationnel sur le développement de backend dans ce, mais je pourrais approfondir mes connaissances pour maîtriser les aspects plus avancés du framework et être plus à l'aise dans des projets de plus grande envergure, dans un cadre professionnel par exemple.",
  projectLink: 'https://github.com/juniormarvin/spring-boot-projects'
},
{ name: 'NodeJS', category: 'Langages/frameworks', logo: 'assets/icons/nodejs.png', level: 4, certified: false, projects: [],
  description: 'Développement d\'applications web avec NodeJS',
  introduction: "NodeJS est un environnement d'exécution JavaScript. NodeJS permet de développer des applications web et des services web en JavaScript, en utilisant des modules et des packages disponibles sur le gestionnaire de paquets npm. NodeJS est basé sur une architecture orientée événements et non bloquante (asynchrone), ce qui le rend très performant pour les applications nécessitant une grande réactivité et une grande scalabilité. C'est un framework très populaire aujourd'hui, très développé dans des architectures microservices par exemple.",
  experience: "J'ai découvert NodeJS en 2018, en utilisant ce framework pour développer plusieurs projets personnels :\n- pharmadelivery : Marketplace de médicaments\n- retroShow_Manager : Application de gestion de collection de jeux vidéo rétro\n- API-REST-car-location : API REST pour la location de voitures\n- Marketplace : Plateforme de commerce électronique\n\nCes projets m'ont permis de développer mes compétences en NodeJS et de comprendre les bonnes pratiques de développement backend avec ce framework. J'ai également appris à utiliser les principaux packages npm et à mettre en place des architectures microservices.",
  competenceLevel: "Je pense avoir une bonne connaissance de NodeJS et de ses possibilités. Je développe et maintiens en autonomie totale de nombreux projets en NodeJS, mais je pourrais approfondir mes compétences pour maîtriser des aspects plus avancés du framework. Je suis également intéressé par Deno, le successeur de NodeJS, qui apporte des améliorations significatives en termes de sécurité et de performances, comme l'annonce Ryan Dahl, fondateur de ces deux languages.",
  projectLink: 'https://github.com/juniormarvin/nodejs-projects'
},



  // Soft skills
{ name: 'SST', category: 'Soft skills', logo: 'assets/icons/sst.png', level: 4, certified: true, projects: [],
  description: 'Formation et certification en premiers secours en entreprise',
  introduction: "Le S.S.T. est Sauveteur Secouriste du Travail : il est formé aux premiers secours en entreprise et peut également intervenir aux côtés de la sécurité civile pour assurer la protection des personnes lors d'évènements.",
  experience: "En 2024 chez Access Surveillance, j'ai pu me frotter à l'environnement de sécurité au quotidien, travaillant avec une agence de sécurité (APS) et des spécialistes de la sécurité incendie. Cette expérience m'a permis d'apprendre plusieurs aspects de la sécurité en entreprise, notamment :\n- Les procédures d'évacuation et de sécurité incendie\n- La gestion des accès et des contrôles de sécurité\n- Les protocoles de sécurité en cas d'urgence\n- La coordination avec les forces de sécurité\n\nEn 2021, j'ai obtenu la certification S.S.T. qui m'a permis d'apprendre les premiers gestes en matière de secourisme et de pouvoir intervenir efficacement en cas d'accident ou de malaise en entreprise. J'ai été certifié S.S.T. et le renouvellement de cette certification est prévu cette année.",
  competenceLevel: "J'ai obtenu la certification officielle et j'ai une expérience pratique dans un environnement de sécurité professionnel. Je suis à même de réagir efficacement en cas de problème, que ce soit en matière de premiers secours ou de sécurité générale. J'espère ne pas avoir à le faire en situation grave mais je suis prêt à intervenir si nécessaire.",
  projectLink: 'https://github.com/juniormarvin/sst-projects'
},

{ name: 'Adaptabilité', category: 'Soft skills', logo: 'assets/icons/adaptation.png', level: 4, certified: false, projects: [],
  description: 'Capacité à s\'adapter à de nouvelles situations',
  introduction: "L'adaptabilité est la capacité à pouvoir ajuster son comportement, ses actions, ses décisions en fonction des circonstances, des événements, des personnes et des environnements. C'est la capacité à s'adapter rapidement et efficacement à des situations nouvelles qu'elles soient complexes ou non. Elle permet de faire face efficacement à de nouveaux défis. Au delà des acquis, l'adaptabilité est une qualité qui permet de s'ouvrir à de nouvelles expériences, de s'enrichir de nouvelles connaissances et de développer de nouvelles compétences.",
  experience: "Le secteur des développements logiciels demande une adaptation constante :\n- En 2023, chez Access Surveillance, j'ai rapidement adapté mes compétences en développement pour contribuer à l'équipe Agile, apprenant les bonnes pratiques de développement et les outils spécifiques de l'entreprise.\n- En 2024, chez Kunto, j'ai dû m'adapter à un nouveau contexte de travail, apprenant les technologies et les processus de l'entreprise, tout en contribuant activement aux projets en cours.\n- En 2025, chez Wisetech, j'ai dû m'adapter à un nouveau rôle de management, supervisant un projet WordPress et encadrant une équipe d'internes, tout en m'assurant de la qualité et de la conformité RGPD des développements.\n\nCes expériences m'ont permis de développer des capacités d'adaptation dans différents contextes professionnels, technologiques et managériaux, tout en maintenant une qualité de travail constante et une contribution positive à chaque organisation.",
  competenceLevel: "Je pense avoir de très bonnes capacités d'adaptation qui me permettent de m'intégrer rapidement dans une nouvelle équipe, de m'adapter à un nouvel environnement, de nouvelles méthodes de travail, de nouveaux outils ou processus ou encore à de nouveaux interlocuteurs.\n\nJ'ai pu le démontrer lors de mes différentes missions en administration ou en entreprise.\n\nUne phase d'audit et d'observation me permet de considérer les éléments et dynamiques en place pour pouvoir m'y adapter et y apporter une contribution la plus pertinente possible.",
  projectLink: 'https://github.com/juniormarvin/adaptability-projects'
},

{ name: 'Autonomie', category: 'Soft skills', logo: 'assets/icons/autonomie.png', level: 4, certified: false, projects: [],
  description: 'Capacité à travailler de manière autonome',
  introduction: "L'autonomie est la capacité à mener seul une mission qui nous est confiée, voire même à définir soi même ses objectifs, une fois le cap, les enjeux ou la vision déclinée. Etre autonome ne signifie pas forcément travailler seul.\n\nJe pense en effet que l'autonomie, c'est aussi demander de l'aide quand on a besoin, pour avancer et progresser efficacement.",
  experience: "Depuis 2023, chez Wisetech, j'ai été amené à travailler en autonomie complète sur le projet WordPress, gérant la conception, le développement et la livraison du projet, tout en encadrant une équipe d'internes.\n\nEn 2024, chez Kunto, j'ai travaillé en autonomie sur la mise en place des tests automatisés et la gestion des processus de développement, tout en collaborant efficacement avec l'équipe.\n\nEn 2025, chez Access Surveillance, j'ai été responsable de la mise en place des outils de développement et des processus de travail, en autonomie et en collaboration avec l'équipe Agile.\n\nCes expériences m'ont permis de développer une autonomie complète dans la gestion de projets, la prise de décision et la mise en place de solutions techniques, tout en maintenant une communication efficace avec les équipes.",
  competenceLevel: "Je sais mener un projet à bien, de la conception à la livraison, en passant par la mise en place des outils et des processus nécessaires.\n\nJ'ai pu le démontrer lors de mes différentes missions en entreprise, où j'ai toujours été reconnu pour la qualité de mon travail et mon autonomie dans l'accomplissement des tâches pour atteindre l'objectif fixé.\n\nJe pense être également parfaitement autonome dans la gestion de mon temps et de mes priorités, ou encore dans la proposition de solutions innovantes et efficaces au service de l'entreprise.",
  projectLink: 'https://github.com/juniormarvin/autonomy-projects'
},
{ name: "Esprit d'initiative", category: 'Soft skills', logo: 'assets/icons/initiative.png', level: 4, certified: false, projects: [],
  description: 'Capacité à prendre des initiatives',
  introduction: "L'esprit d'initiative est pour moi la capacité à prendre des décisions et à agir de manière proactive, sans attendre que les choses se fassent d'elles-mêmes. C'est la capacité à proposer des idées et à envisager des solutions avant même que des demandes soient formulées. C'est savoir être à l'origine de l'innovation, de la disruption, de la recherche de solutions à des problèmes parfois même qu'on est le premier à identifier.",
  experience: "En 2023 chez Wisetech, j'ai pris l'initiative de superviser le projet WordPress et de mettre en place les processus de développement, tout en encadrant une équipe d'internes. J'ai également proposé et mis en place des solutions pour assurer la conformité RGPD des développements.\n\nEn 2024 chez Kunto, j'ai proposé et mis en place des améliorations significatives dans les processus de développement et de tests, ce qui a conduit à une meilleure qualité et fiabilité du code.\n\nEn 2025 chez Access Surveillance, j'ai pris l'initiative de moderniser les outils de développement et les processus de travail, en proposant des solutions innovantes pour améliorer la productivité de l'équipe Agile.\n\nCes expériences m'ont permis de développer une capacité à identifier les opportunités d'amélioration et à proposer des solutions proactives, tout en évaluant les risques et les coûts associés.",
  competenceLevel: "Je suis reconnu pour mon esprit d'initiative et ma capacité à proposer des idées et à être moteur pour aider l'entreprise à progresser. J'ai pu le démontrer lors de mes différentes missions en entreprise. Je sais également évaluer les risques et le coût d'engager ou non certaines actions : je ne me lance pas dans des aventures sans issue, je sais rester pragmatique dans mes choix et mes propositions.",
  projectLink: 'https://github.com/juniormarvin/initiative-projects'
},
{ name: 'Polyvalence', category: 'Soft skills', logo: 'assets/icons/polyvalence.png', level: 4, certified: false, projects: [],
  description: 'Capacité à effectuer plusieurs tâches',
  introduction: "La polyvalence est la capacité à être compétent dans plusieurs domaines, à pouvoir assumer différentes tâches à tout moment et en fonction des besoins, à être capable de changer de rôle temporairement, le cas échéant. On parle souvent d'être un 'couteau suisse' et pouvoir répondre à des problématiques variées, de manière efficace et pertinente.",
  experience: "Mon parcours montre ma polyvalence : j'ai été tour à tour développeur, administrateur réseau, chef de projet, manager, formateur, consultant, expert technique, testeur logiciel etc...\n\nJ'ai été amené à travailler sur des projets dans des contextes variés (gestion financière, stockage de données cloud, traitement de flux temps réel par ex.), avec des technologies et des méthodes de travail très diverses.\n\nJe suis prêt à exécuter de nombreuses tâches, même en dehors de mon périmètre initial, au service de l'entreprise et de mes collègues. Cela va de l'implémentation de code, la rédaction de documentation, le constitution de dossiers et formulaires RH, la définition de processus, la formation aux apprenants, la gestion de l'environnement de travail, jusqu'à la création de contenu visuel et vidéo avec la suite Adobe (Photoshop, Illustrator, Premiere Pro, After Effects). Je suis intéressé par toute nouvelle tâche qui pourrait m'être confiée. Si je ne sais pas déjà le faire, je suis toujours prêt à apprendre et acquérir une nouvelle compétence.",
  competenceLevel: "Je me sens très polyvalent et en capacité complète de mener à bien des missions et tâches très variées. Je pense parvenir à gérer les risques de dispersion et de perte de focus que cela peut engendrer, en me fixant des objectifs clairs et en priorisant les tâches en fonction de leur importance et de leur urgence.",
  projectLink: 'https://github.com/juniormarvin/multitasking-projects'
},
{ name: 'Rigueur', category: 'Soft skills', logo: 'assets/icons/rigueur.png', level: 4, certified: false, projects: [],
  description: 'Capacité à respecter les règles et les procédures',
  introduction: 'La rigueur est essentielle pour la qualité et la fiabilité du travail',
  experience: 'Plus de 5 ans d\'expérience à maintenir des standards élevés de qualité',
  competenceLevel: 'Expert en qualité et conformité',
  projectLink: 'https://github.com/juniormarvin/quality-projects'
},

{ name: "Sens de l'organisation", category: 'Soft skills', logo: 'assets/icons/organisation.png', level: 4, certified: false, projects: [],
  description: 'Capacité à organiser son travail',
  introduction: "Le sens de l'organisation est essentiel pour la planification et l'efficacité",
  experience: 'Plus de 5 ans d\'expérience à gérer des projets complexes avec succès',
  competenceLevel: 'Expert en gestion de projet',
  projectLink: 'https://github.com/juniormarvin/organization-projects'
},
{ name: 'Communication', category: 'Soft skills', logo: 'assets/icons/communication.png', level: 4, certified: false, projects: [],
  description: 'Communication efficace et claire',
  introduction: 'La communication est essentielle pour la collaboration et la résolution de problèmes',
  experience: 'Plus de 5 ans d\'expérience en communication professionnelle avec des équipes multiculturelles',
  competenceLevel: "Je facilite la communication au sein de l'équipe et entre les différents services, en assurant une transmission claire et efficace de l'information. Je suis reconnu pour ma capacité à écouter, à comprendre les besoins des différents interlocuteurs et à adapter mon message en fonction du contexte et de l'audience. J'assure la cohérence des informations et la bonne compréhension entre tous les acteurs du projet.",
  projectLink: 'https://github.com/juniormarvin/communication-projects'
},
{ name: 'Créativité', category: 'Soft skills', logo: 'assets/icons/emotional_intelligence.png', level: 4, certified: false, projects: [],
  description: 'Pensée créative et innovation',
  introduction: 'La créativité est essentielle pour l\'innovation et la résolution de problèmes',
  experience: 'Plus de 5 ans d\'expérience à proposer des solutions innovantes',
  competenceLevel: "Je suis reconnu pour ma capacité à proposer des solutions innovantes et créatives, en utilisant des approches originales et des idées non conventionnelles. Je suis reconnu pour ma capacité à voir les choses sous un angle différent et à proposer des solutions alternatives et innovantes. J'apprécie la diversité des approches et je suis toujours prêt à explorer de nouvelles solutions et à proposer des idées originales.",
  projectLink: 'https://github.com/juniormarvin/creativity-projects'
},

{ name: 'Intelligence émotionnelle', category: 'Soft skills', logo: 'assets/icons/creativity.png', level: 4, certified: false, projects: [],
  description: 'Compréhension et gestion des émotions',
  introduction: 'L\'intelligence émotionnelle est essentielle pour la communication et le leadership',
  experience: 'Plus de 5 ans d\'expérience à gérer les relations interpersonnelles',
  competenceLevel: "Je suis reconnu pour ma capacité à comprendre et à gérer les émotions, en les guidant vers la réussite. Je suis reconnu pour ma capacité à motiver et à inspirer les équipes, en les guidant vers la réussite. J'apprécie la diversité des approches et je suis toujours prêt à explorer de nouvelles solutions et à proposer des idées originales.",
  projectLink: 'https://github.com/juniormarvin/emotional-intelligence-projects'
},

{ name: 'Organisation', category: 'Soft skills', logo: 'assets/icons/organization.png', level: 4, certified: false, projects: [],
  description: 'Organisation et planification stratégique',
  introduction: "L'organisation est la clé du succès dans la gestion de projets et la réalisation d'objectifs. Elle permet de structurer le travail, d'optimiser les ressources et de garantir la cohérence des actions. Une bonne organisation se traduit par une planification efficace, une gestion optimale des ressources et une capacité à anticiper les problèmes potentiels.",
  experience: "En 2023 chez Wisetech, j'ai organisé et coordonné la migration d'un système de gestion de contenu vers WordPress, en planifiant les phases de développement, de test et de déploiement. J'ai mis en place des processus de suivi et de reporting pour assurer la transparence et la qualité du projet.\n\nEn 2024 chez Kunto, j'ai organisé la mise en place d'une nouvelle chaîne de CI/CD, en coordonnant les équipes de développement et d'infrastructure. J'ai défini les jalons clés et les livrables attendus, en veillant à respecter les délais et les budgets.\n\nEn 2025 chez Access Surveillance, j'ai organisé la transition vers une méthodologie Agile, en structurant les sprints, les revues et les rétrospectives. J'ai mis en place des outils de suivi (Jira, GitLab) et des processus de reporting pour assurer la visibilité et la transparence du projet.",
  competenceLevel: "Je maîtrise parfaitement les outils et les méthodes d'organisation, que ce soit pour la gestion de projets, la planification des ressources ou la coordination des équipes. Je sais définir des objectifs clairs, mettre en place des processus efficaces et suivre les progrès de manière rigoureuse. Je suis capable d'adapter mes méthodes d'organisation en fonction du contexte et des contraintes du projet.",
  projectLink: 'https://github.com/juniormarvin/organization-projects'
},
{ name: 'Travail d\'équipe', category: 'Soft skills', logo: 'assets/icons/teamwork.png', level: 4, certified: false, projects: [],
  description: 'Collaboration et synergie d\'équipe',
  introduction: "Le travail d'équipe est la clé du succès dans les projets modernes. Il permet de combiner les compétences individuelles pour créer une synergie collective, favorise l'innovation et la résolution de problèmes complexes. Une bonne collaboration se traduit par une communication fluide, une confiance mutuelle et une volonté de partager les responsabilités.",
  experience: "En 2023 chez Wisetech, j'ai travaillé en équipe avec des développeurs, des designers et des chefs de projet sur la migration d'un système de gestion de contenu. J'ai organisé les réunions d'équipe, facilité la communication et assuré la cohésion du groupe.\n\nEn 2024 chez Kunto, j'ai participé à une équipe Agile multiculturelle, composée de développeurs français, anglais et indiens. J'ai mis en place des rituels Agile (daily, sprint planning, review, retrospective) et facilité la compréhension mutuelle entre les membres de l'équipe.\n\nEn 2025 chez Access Surveillance, j'ai coordonné une équipe de sécurité et d'infrastructure, en assurant la liaison entre les différents services et en facilitant la collaboration sur les projets de modernisation.",
  competenceLevel: "Je maîtrise les principes de la collaboration efficace, que ce soit dans un contexte Agile, multiculturel ou inter-fonctionnel. Je sais créer un environnement de travail positif, favoriser la communication et la résolution de conflits. Je suis capable de jouer le rôle de facilitateur et de médiateur au sein d'une équipe.",
  projectLink: 'https://github.com/juniormarvin/teamwork-projects'
},

// Outils
{ name: 'AWS', category: 'Cloud', logo: 'assets/icons/aws.png', level: 4, certified: true, projects: [],
  description: 'Cloud computing avec AWS',
  introduction: 'AWS est ma plateforme cloud de choix pour le déploiement d\'applications scalables',
  experience: 'Plus de 4 ans d\'expérience avec AWS, ayant déployé des applications à grande échelle',
  competenceLevel: 'Expert en AWS et cloud computing',
  projectLink: 'https://github.com/juniormarvin/aws-projects'
},
{ name: 'Docker', category: 'Outils', logo: 'assets/icons/docker.png', level: 4, certified: false, projects: [],
  description: 'Conteneurisation d\'applications',
  introduction: 'Docker est essentiel pour la conteneurisation et le déploiement d\'applications',
  experience: 'Plus de 4 ans d\'expérience avec Docker, ayant conteneurisé des applications complexes',
  competenceLevel: 'Expert en Docker et conteneurisation',
  projectLink: 'https://github.com/juniormarvin/docker-projects'
},
{ name: 'Kubernetes', category: 'Cloud', logo: 'assets/icons/kubernetes.png', level: 4, certified: false, projects: [],
  description: 'Orchestration avec Kubernetes',
  introduction: 'Kubernetes est essentiel pour l\'orchestration de conteneurs à grande échelle',
  experience: 'Plus de 3 ans d\'expérience avec Kubernetes, ayant orchestré des clusters à grande échelle',
  competenceLevel: 'Expert en Kubernetes et orchestration',
  projectLink: 'https://github.com/juniormarvin/kubernetes-projects'
},

{ name: 'GitLab', category: 'Outils', logo: 'assets/icons/gitlab.png', level: 4, certified: false, projects: [],
  description: 'Gestion de projets et CI/CD',
  introduction: 'GitLab est essentiel pour la gestion de projets et le CI/CD',
  experience: 'Plus de 3 ans d\'expérience avec GitLab, ayant automatisé des pipelines CI/CD',
  competenceLevel: 'Expert en GitLab et CI/CD',
  projectLink: 'https://github.com/juniormarvin/gitlab-projects'
},
{ name: 'Git', category: 'Outils', logo: 'assets/icons/git.png', level: 5, certified: false, projects: [],
  description: 'Contrôle de version avec Git',
  introduction: 'Git est mon outil de contrôle de version préféré pour le développement collaboratif',
  experience: 'Plus de 7 ans d\'expérience avec Git, ayant géré des dépôts complexes',
  competenceLevel: 'Expert en gestion de dépôts Git',
  projectLink: 'https://github.com/juniormarvin/git-projects'
},

{ name: 'Jira', category: 'Outils', logo: 'assets/icons/jira.png', level: 4, certified: false, projects: [],
  description: 'Gestion de projets Agile',
  introduction: 'Jira est essentiel pour la gestion de projets Agile',
  experience: 'Plus de 5 ans d\'expérience avec Jira, ayant géré des projets Agile',
  competenceLevel: 'Expert en gestion de projet Agile',
  projectLink: 'https://github.com/juniormarvin/jira-projects'
},

{ name: 'Postman', category: 'Outils', logo: 'assets/icons/postman.png', level: 4, certified: false, projects: [],
  description: 'Test d\'APIs REST',
  introduction: 'Postman est mon outil de choix pour le test d\'APIs',
  experience: 'Plus de 3 ans d\'expérience avec Postman, ayant automatisé des tests d\'APIs',
  competenceLevel: 'Expert en test d\'APIs',
  projectLink: 'https://github.com/juniormarvin/postman-projects'
},

{ name: 'Swagger', category: 'Outils', logo: 'assets/icons/swagger.png', level: 4, certified: false, projects: [],
  description: 'Documentation d\'APIs',
  introduction: 'Swagger est mon outil de choix pour la documentation d\'APIs',
  experience: 'Plus de 3 ans d\'expérience avec Swagger, ayant documenté des APIs complexes',
  competenceLevel: 'Expert en documentation d\'APIs',
  projectLink: 'https://github.com/juniormarvin/swagger-projects'
},
{ name: 'PostgreSQL', category: 'Bases de données', logo: 'assets/icons/postgresql.png', level: 4, certified: false, projects: [],
  description: 'Base de données relationnelle PostgreSQL',
  introduction: 'PostgreSQL est ma base de données relationnelle préférée pour les applications d\'entreprise',
  experience: 'Plus de 5 ans d\'expérience avec PostgreSQL, ayant conçu et optimisé des schémas complexes',
  competenceLevel: 'Expert en conception et optimisation PostgreSQL',
  projectLink: 'https://github.com/juniormarvin/postgresql-projects'
},
{ name: 'Trello', category: 'Outils', logo: 'assets/icons/trello.png', level: 4, certified: false, projects: [],
  description: 'Gestion de tâches Agile',
  introduction: 'Trello est mon outil de choix pour la gestion de tâches Agile',
  experience: 'Plus de 3 ans d\'expérience avec Trello, ayant géré des projets Agile',
  competenceLevel: 'Expert en gestion de tâches',
  projectLink: 'https://github.com/juniormarvin/trello-projects'
},
{ name: 'VS Code', category: 'Outils de développement', logo: 'assets/icons/vscode.png', level: 5, certified: false, projects: [],
  description: 'Éditeur de code source',
  introduction: 'VS Code est mon éditeur de code principal pour le développement',
  experience: 'Plus de 6 ans d\'expérience avec VS Code, ayant personnalisé mon environnement de développement',
  competenceLevel: 'Expert en configuration et extensions VS Code',
  projectLink: 'https://github.com/juniormarvin/vscode-projects'
},
// { name: 'Turc', category: 'Langues', logo: 'assets/icons/turc.png', level: 4, certified: false, projects: [] },

  ];

  constructor() {}

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  updateProjectsForSkill(skillName: string, projects: string[]): void {
    const skill = this.skills.find((s: Skill) => s.name === skillName);
    if (skill) {
      skill.projects = projects;
    }
  }

  getProjectsForSkill(skillName: string): string[] {
    const skill = this.skills.find((s: Skill) => s.name === skillName);
    return skill ? skill.projects : [];
  }
}
