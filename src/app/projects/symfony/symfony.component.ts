import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-symfony',
  templateUrl: './symfony.component.html',
  styleUrls: ['./symfony.component.css']
})
export class SymfonyComponent {
  project: Project = {
    id: 'symfony',
    name: 'Symfony',
    description: 'Description détaillée du projet Symfony',
    short_description: 'Description courte du projet Symfony',
    source_file: '',
    picture: '/assets/images/projects/symfony.jpg',
    programingLangage: 'PHP;Symfony',
    isImageLoading: true
  };
}
