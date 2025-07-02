import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-kunto',
  templateUrl: './kunto.component.html',
  styleUrls: ['./kunto.component.css']
})
export class KuntoComponent {
  project: Project = {
    id: 'kunto',
    name: 'Kunto',
    description: 'Description détaillée du projet Kunto',
    short_description: 'Description courte du projet Kunto',
    source_file: '',
    picture: '/assets/images/projects/kunto.jpg',
    programingLangage: 'PHP;Symfony',
    isImageLoading: true
  };
}
