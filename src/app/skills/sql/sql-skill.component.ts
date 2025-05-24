import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sql-skill',
  templateUrl: './sql-skill.component.html',
  styleUrls: ['./sql-skill.component.css']
})
export class SqlSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
