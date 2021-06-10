import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  islogged = false;
  userName: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getLoggedStatus().subscribe((status) => {
      this.islogged = status;
      if (status) {
        this.postService.getUser().subscribe(user => {
          if (user !== null) {
            this.userName = user.first_name + ' ' + user.last_name;
          }
        });
      }
    });
  }

}
