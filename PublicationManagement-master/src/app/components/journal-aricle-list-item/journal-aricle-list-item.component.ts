import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { JournalArticle } from 'src/app/models/JournalArticle';
import { Publisher } from 'src/app/models/Publisher';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-journal-article-list-item',
  templateUrl: './journal-aricle-list-item.component.html',
  styleUrls: ['./journal-aricle-list-item.component.css']
})
export class JournalAricleListItemComponent implements OnInit {
  @Input() journalArticle: JournalArticle;
  authors: Author[];
  publisher: Publisher;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAuthorByPostId(this.journalArticle.publication_id).subscribe((authors: Author[]) => {
      this.authors = authors;
      console.log( this.authors
      );
    });
    this.apiService.getPublisherById(this.journalArticle.publisher_id).subscribe((publisher: Publisher) => this.publisher = publisher);
  }

}
