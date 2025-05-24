import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mongodb-skill',
  templateUrl: './mongodb-skill.component.html',
  styleUrls: ['./mongodb-skill.component.css']
})
export class MongodbSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
