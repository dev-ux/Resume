import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nodejs-skill',
  templateUrl: './nodejs-skill.component.html',
  styleUrls: ['./nodejs-skill.component.css']
})
export class NodejsSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
