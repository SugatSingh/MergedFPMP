import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/app/models/Book';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {
  type: any;

  constructor(
    private postService: PostService,
    private apiService: ApiService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params;
    });
  }

  onSubmit(val) {
    if (!val.valid) {
      this.snackBar.open('Invalid form submitted', 'Retry', { duration: 2000 });
    } else {
      this.postService.setSelectedBook(val.value);
      this.apiService.insertBook(val.value);
    }
  }
  
  onSubmitBook(val){
    if(!val.valid) {
      this.snackBar.open('Invalid Book Inputs', 'ok', { duration: 2000 });
    } else {
      let newBook = val.value;
      newBook.publisher_id = this.postService.getSelectedPublisherId();
      console.log(newBook);
      this.apiService.insertBook(newBook).subscribe(book => {
        console.log(book);
        this.postService.setSelectedBook({
          book_id: book.book_id,
          book_title: book.book_title
        });
        this.router.navigate(['../author'], { relativeTo: this.route, queryParams: this.type });
      });
    }
  }

}
