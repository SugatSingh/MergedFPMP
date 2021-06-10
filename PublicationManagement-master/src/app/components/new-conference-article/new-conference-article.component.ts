import { Component, OnInit } from '@angular/core';
import { PublicationInput } from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-conference-article',
  templateUrl: './new-conference-article.component.html',
  styleUrls: ['./new-conference-article.component.css']
})
export class NewConferenceArticleComponent implements OnInit {

  constructor(private postService: PostService,
              private apiService: ApiService,
              private localStorageService: LocalStorageService
              ) { }

  ngOnInit() {
  }

  onSubmitArticle(articleData: PublicationInput) {
    console.log('value in main', articleData);

    this.postService.setPublicationInput(articleData);
    this.apiService.insertConferenceArticle();
    this.localStorageService.clearPublicationData();
  }

}
