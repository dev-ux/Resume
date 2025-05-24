import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-relation',
  templateUrl: './client-relation.component.html',
  styleUrls: ['./client-relation.component.css']
})
export class ClientRelationComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // You can use the route parameters here if needed
  }
}
