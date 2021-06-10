import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user_email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getLoggedStatus().subscribe(status => {
      if (status === true) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  login() {
    this.apiService.loginUser(this.user_email, this.password);
  }

}
