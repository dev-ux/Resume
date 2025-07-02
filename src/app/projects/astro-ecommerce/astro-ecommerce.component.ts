import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-astro-ecommerce',
  templateUrl: './astro-ecommerce.component.html',
  styleUrls: ['./astro-ecommerce.component.css']
})
export class AstroEcommerceComponent {
  project: Project = {
    id: 'astro-ecommerce',
    name: 'Astro E-commerce',
    description: 'Description détaillée du projet Astro E-commerce',
    short_description: 'Description courte du projet Astro E-commerce',
    source_file: '',
    picture: '/assets/images/projects/astro-ecommerce.jpg',
    programingLangage: 'Astro;JavaScript;CSS',
    isImageLoading: true
  };
}
