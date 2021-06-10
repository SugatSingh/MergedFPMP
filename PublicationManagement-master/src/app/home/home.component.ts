import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from '../models/SearchCriteria';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  name = '';
  show = true;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  setHide(hid: boolean) {
    this.show = !this.show;
  }


}

