import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isAdmin = false;

  constructor(private postService: PostService) { }
  ngOnInit() {
    this.postService.getUser().subscribe(user => {
      console.log(user);
      this.isAdmin = user.role === 'admin';
    });
  }
}
