import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-java-skill',
  templateUrl: './java-skill.component.html',
  styleUrls: ['./java-skill.component.css']
})
export class JavaSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
