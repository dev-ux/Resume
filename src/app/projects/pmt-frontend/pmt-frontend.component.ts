import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-pmt-frontend',
  templateUrl: './pmt-frontend.component.html',
  styleUrls: ['./pmt-frontend.component.css']
})
export class PMTFrontendComponent {
  project: Project = {
    id: 'pmt-frontend',
    name: 'PMT Frontend',
    description: 'Description détaillée du projet PMT Frontend',
    short_description: 'Description courte du projet PMT Frontend',
    source_file: '',
    picture: '/assets/images/projects/pmt-frontend.jpg',
    programingLangage: 'React;TypeScript',
    isImageLoading: true
  };
}
