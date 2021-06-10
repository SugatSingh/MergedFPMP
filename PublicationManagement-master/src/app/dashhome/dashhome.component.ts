import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-dashhome',
  templateUrl: './dashhome.component.html',
  styleUrls: ['./dashhome.component.css']
})
export class DashhomeComponent implements OnInit {
  user: User;
  height1: number = 100;
  constructor(private postService: PostService) {
    let title = 'Browser market shares at a specific website, 2014';
    let type = 'PieChart';
    let data = [
       ['Firefox', 45.0],
       ['IE', 26.8],
       ['Chrome', 12.8],
       ['Safari', 8.5],
       ['Opera', 6.2],
       ['Others', 0.7] 
    ];
    let columnNames = ['Browser', 'Percentage'];
    let options = {    
    };
    let width = 550;
    let height = 400;
   }

  ngOnInit() {
    this.postService.getUser().subscribe( user => {
      if (!user) {
        this.user = {
          user_id: 1,
          user_email: 'amanshakya@mail.com',
          first_name: 'Aman',
          last_name: 'Shakya',
          role: 'Teacher'
        };
      } else {
        this.user = user;
      }
    });
  }
}
