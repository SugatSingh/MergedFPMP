import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { BookChapter } from 'src/app/models/bookChapter';
import { Publisher } from 'src/app/models/Publisher';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-book-chapter-list-item',
  templateUrl: './book-chapter-list-item.component.html',
  styleUrls: ['./book-chapter-list-item.component.css']
})
export class BookChapterListItemComponent implements OnInit {

  @Input() bookChapter: BookChapter;
  authors: Author[];
  publisher: Publisher;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAuthorByPostId(this.bookChapter.publication_id).subscribe((authors: Author[]) => {
      this.authors = authors;
      console.log( this.authors
      );
    });
    this.apiService.getPublisherById(this.bookChapter.publisher_id).subscribe((publisher: Publisher) => this.publisher = publisher);
  }

}
