import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-java-project',
  templateUrl: './java-project.component.html',
  styleUrls: ['./java-project.component.css']
})
export class JavaProjectComponent implements OnInit {
  project: Project | null = null;
  loading = true;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loading = true;
    this.project = this.projectsService.getProject('java-project');
    this.loading = false;
  }
}
