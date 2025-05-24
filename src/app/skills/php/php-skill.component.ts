import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-php-skill',
  templateUrl: './php-skill.component.html',
  styleUrls: ['./php-skill.component.css']
})
export class PhpSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
