import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agile-skill',
  templateUrl: './agile-skill.component.html',
  styleUrls: ['./agile-skill.component.css']
})
export class AgileSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
