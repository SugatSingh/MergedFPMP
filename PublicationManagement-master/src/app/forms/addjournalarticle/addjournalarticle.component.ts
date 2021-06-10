import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  MatSnackBar
} from '@angular/material';
import {
  Router
} from '@angular/router';
import {
  JournalArticle
} from 'src/app/models/JournalArticle';
import {
  PublicationInput
} from 'src/app/models/Publication';
import {
  ApiService
} from 'src/app/services/api.service';
import {
  LocalStorageService
} from 'src/app/services/local-storage.service';
import {
  PostService
} from 'src/app/services/post.service';

@Component({
  selector: 'app-addjournalarticle',
  templateUrl: './addjournalarticle.component.html',
  styleUrls: ['./addjournalarticle.component.css']
})
export class AddjournalarticleComponent implements OnInit {

  constructor(private postService: PostService,
              private apiService: ApiService,
              private localStorageService: LocalStorageService,
              private router: Router,
              private snackBar: MatSnackBar
  ) {}

  ngOnInit() {}

  onSubmitArticle(articleData: PublicationInput) {
    console.log('value in main', articleData);

    this.postService.setPublicationInput(articleData);
    this.apiService.insertJournalArticle();
    this.localStorageService.clearPublicationData();
  }

}
