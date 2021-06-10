import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { ConferenceArticle } from 'src/app/models/conferenceArticle';
import { Publisher } from 'src/app/models/Publisher';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';
@Component({
  selector: 'app-conference-article-list-item',
  templateUrl: './conference-article-list-item.component.html',
  styleUrls: ['./conference-article-list-item.component.css']
})
export class ConferenceArticleListItemComponent implements OnInit {

  @Input() conferenceArticle: ConferenceArticle;
  authors: Author[];
  publisher: Publisher;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAuthorByPostId(this.conferenceArticle.publication_id).subscribe((authors: Author[]) => {
      this.authors = authors;
      console.log( this.authors
      );
    });
    this.apiService.getPublisherById(this.conferenceArticle.publisher_id).subscribe((publisher: Publisher) => this.publisher = publisher);
  }

}
