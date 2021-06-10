import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-small-nav',
  templateUrl: './small-nav.component.html',
  styleUrls: ['./small-nav.component.css']
})
export class SmallNavComponent implements OnInit {
  isLogged = false;
  user_name = '';
  hide = false;

  constructor(private postService: PostService, private router: Router
    ) { }

  ngOnInit() {
    this.hide = this.router.url === '/' || this.router.url === '/searchresult';
    this.postService.getLoggedStatus().subscribe(status => {
      this.isLogged = status;
      if (this.isLogged) {
        this.postService.getUser().subscribe((user) => {
          this.user_name = user.first_name + ' ' + user.last_name;
        });

      }

    });
  }

}
