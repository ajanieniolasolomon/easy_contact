import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {
  posts: any;
  SimpleDateFormat: any;
  constructor(public service: MainService) {
    this.SimpleDateFormat  = new Date().getTime();

  }

  ngOnInit() {
    this.posts = this.service.Message();
  }

}
