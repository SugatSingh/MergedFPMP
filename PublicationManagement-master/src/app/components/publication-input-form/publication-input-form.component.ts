import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { PublicationInput } from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-publication-input-form',
  templateUrl: './publication-input-form.component.html',
  styleUrls: ['./publication-input-form.component.css']
})
export class PublicationInputFormComponent implements OnInit {
  @Output() submitFormEvent = new EventEmitter();
  publicationInput: PublicationInput;
  year = 2020;
  month = 0;
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  constructor(private postService: PostService,
              private apiService: ApiService,
              private localStorageService: LocalStorageService,
              private router: Router,
              private snackBar: MatSnackBar ) { }

  ngOnInit() {
    this.postService.getPublicationInput().subscribe(data => {
      if (data === null) {
         data = {
          title: '',
          month: 0,
          year: 2020,
          DOI: '',
          link: '',
          publication_type: '',
          label: '',
          type: '',
         };
      }
      this.publicationInput = data;
    } );
  }

  onSubmitArticle(form) {
    console.log('value 1', form.value);
    if (!form.valid) {
      this.snackBar.open('Invalid form values', 'ok', { duration: 2000 });
    } else {
    const articledata: PublicationInput = form.value;
    this.submitFormEvent.emit(articledata);
    }
  }

}
