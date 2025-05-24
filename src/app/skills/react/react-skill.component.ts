import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-react-skill',
  templateUrl: './react-skill.component.html',
  styleUrls: ['./react-skill.component.css']
})
export class ReactSkillComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
