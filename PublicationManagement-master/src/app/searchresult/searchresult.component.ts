import { Component, OnInit } from '@angular/core';
import { ConferenceArticle } from '../models/ConferenceArticle';
import { Proceeding } from '../models/Proceeding';
import { JournalArticle } from '../models/JournalArticle';
import { BookChapter } from '../models/BookChapter';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-searchresult',
  templateUrl: './searchresult.component.html',
  styleUrls: ['./searchresult.component.css']
})
export class SearchresultComponent implements OnInit {
  journalArticles: JournalArticle[] = [];
  conferenceArticles: ConferenceArticle[] = [];
  proceedings: Proceeding[] = [];
  bookChapters: BookChapter[] = [];
  post_search_text= '';

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getSearchBarText().subscribe((searchBarText) => {
      this.post_search_text = searchBarText;
    });
    this.postService.journalArticles.subscribe((journals) => {
      this.journalArticles = journals;
    });
    this.postService.conferenceArticles.subscribe((articles) => {
      this.conferenceArticles = articles;
    });
    this.postService.proceedings.subscribe((proceedings) => {
      this.proceedings = proceedings;
    });
    this.postService.bookChapters.subscribe((bookChapters) => {
      this.bookChapters = bookChapters;
    });
  }

}
