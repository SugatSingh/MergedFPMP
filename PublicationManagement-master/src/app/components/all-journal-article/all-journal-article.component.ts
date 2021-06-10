import { Component, OnInit } from '@angular/core';
import { JournalArticle } from 'src/app/models/JournalArticle';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-all-journal-article',
  templateUrl: './all-journal-article.component.html',
  styleUrls: ['./all-journal-article.component.css']
})
export class AllJournalArticleComponent implements OnInit {
  journalArticles: JournalArticle[] = [];

  constructor(private postService: PostService, private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getJournalArticles().subscribe((articles: JournalArticle[]) => {
      this.journalArticles = articles;
      console.log(articles);
    })
  }

}
