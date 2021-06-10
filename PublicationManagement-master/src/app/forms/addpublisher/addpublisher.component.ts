import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';
import { Publisher } from 'src/app/models/Publisher';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-addpublisher',
  templateUrl: './addpublisher.component.html',
  styleUrls: ['./addpublisher.component.css']
})
export class AddpublisherComponent implements OnInit {
  link: string;
  type: any;
  publisherList: Publisher[] = [];
  publisherForm = new FormControl();
  filteredList: Publisher[] = [];

  constructor(private postService: PostService,
              private apiService: ApiService,
              private snackBar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      switch (params.type) {
        case 'journal_article': 
          this.link = 'journal';
          break;
        case 'conference_article':
          this.link = 'proceeding';
          break;
        case 'proceeding':
          this.link = 'conference';
          break;
        case 'book_chapter':
          this.link = 'book';
          break;
        default:
          this.link = 'journal';
          break;
      }
      this.type = params;
      console.log(params);
    })
    this.apiService.getPublisherList().subscribe((publisherList: Publisher[]) => {
      this.publisherList = publisherList;
      this.filteredList = this.publisherList;
      this.postService.getSelectedPublisher().subscribe(publisher => {
        if (publisher) {
          this.publisherForm.setValue(publisher.publisher_name);
        }
      });
    });
    this.publisherForm.valueChanges.subscribe(value => {
      this.filteredList = this._filter(value);
    });
  }
  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.publisherList.filter(publisher => {
      return publisher.publisher_name.toLowerCase().includes(filterValue);
    });
  }
  onNext() {
    if (this.filteredList.length !== 1) {
      this.snackBar.open('Please select a publisher', 'OK', { duration: 2000 });
    } else {
      this.postService.setSelectedPublisher(this.filteredList[0]);
      this.router.navigate([`../${this.link}`], { relativeTo: this.route, queryParams: this.type });
    }
  }


}
