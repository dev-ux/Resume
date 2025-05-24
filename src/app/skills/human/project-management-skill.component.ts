import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-management-skill',
  templateUrl: './project-management-skill.component.html',
  styleUrls: ['./project-management-skill.component.css']
})
export class ProjectManagementSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
