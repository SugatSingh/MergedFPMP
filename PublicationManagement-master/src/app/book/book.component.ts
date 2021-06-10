import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookChapter } from '../models/BookChapter';
import { ApiService } from '../services/api.service';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  bookChapters: BookChapter[] = [];

  constructor(private postService: PostService, private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.postService.searchPostByUserId('book_chapter');
    this.postService.bookChapters.subscribe(bookChapters => {
      this.bookChapters = bookChapters;
    });
  }

  onSubmitbibtex(val){
    const bibtex = val.value;
    console.log(bibtex);
  }
  delete(publication_id: number) {
    this.apiService.removePost('book_chapter', publication_id).subscribe((then)=> {
      this.ngOnInit();
    });
  }
}
