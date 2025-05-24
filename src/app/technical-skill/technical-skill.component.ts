import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technical-skill',
  templateUrl: './technical-skill.component.html',
  styleUrls: ['./technical-skill.component.css']
})
export class TechnicalSkillComponent implements OnInit {
  skill!: string;
  skillName!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.skill = params['skill'];
      this.skillName = this.skill.charAt(0).toUpperCase() + this.skill.slice(1);
    });
  }
}
