import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  link: string;
  constructor(
              private apiService: ApiService,
              private postService: PostService,
              private router: Router,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.link = params.next;
    });
  }

  addAuthor(val) {
    if (!val.valid) {
      this.snackBar.open('First name is required', 'ok', { duration: 2000 });
    } else {
      const newAuthor = val.value;
      console.log(val);
      console.log(newAuthor);
      this.apiService.insertAuthor(newAuthor).subscribe(response => {
        console.log(response);
        this.snackBar.open('Author added Successfully', 'ok', { duration: 2000 });
      });
    }
  }
  onNext() {
    this.router.navigate([`../${this.link}`], { relativeTo: this.route });
  }

}
