import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-usecase',
  templateUrl: './usecase.component.html',
  styleUrls: ['./usecase.component.css']
})
export class UseCaseComponent {
  project: Project = {
    id: 'usecase',
    name: 'UseCase',
    description: 'Description détaillée du projet UseCase',
    short_description: 'Description courte du projet UseCase',
    source_file: '',
    picture: '/assets/images/projects/usecase.jpg',
    programingLangage: 'PHP;MySQL',
    isImageLoading: true
  };
}
