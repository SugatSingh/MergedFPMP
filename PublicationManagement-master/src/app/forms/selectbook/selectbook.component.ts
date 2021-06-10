import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { BookChapterSpecificInput } from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-selectbook',
  templateUrl: './selectbook.component.html',
  styleUrls: ['./selectbook.component.css']
})
export class SelectbookComponent implements OnInit {

  type: any;
  specificInput: BookChapterSpecificInput = {
    edition: '',
    volume: ''
  };
  bookList: Book[] = [];
  bookForm = new FormControl();
  filteredList: Book[] = [];

  constructor(private postService: PostService,
              private apiService: ApiService,
              private snackBar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params;
    });
    this.apiService.getBookList().subscribe((bookList: Book[]) => {
      this.bookList = bookList;
      this.filteredList = this.bookList;
      this.postService.getSelectedBook().subscribe(book => {
        if (book) {
          this.bookForm.setValue(book.book_title);
        }
      });
      console.log(bookList);
    });

    this.bookForm.valueChanges.subscribe(value => {
      this.filteredList = this._filter(value);
    });
  }
  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.bookList.filter(book => {
      return book.book_title.toLowerCase().includes(filterValue);
    });
  }
  onNext() {
    if (this.filteredList.length !== 1) {
      this.snackBar.open('Please select a book', 'ok', { duration: 2000 });
    } else {
      this.postService.bookChapterSpecificInput = this.specificInput;
      this.postService.setSpecificData();
      this.postService.setSelectedBook(this.filteredList[0]);
      this.router.navigate(['../author'], { relativeTo: this.route, queryParams: this.type });
    }
  }
}
