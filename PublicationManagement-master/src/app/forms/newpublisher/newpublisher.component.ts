import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-newpublisher',
  templateUrl: './newpublisher.component.html',
  styleUrls: ['./newpublisher.component.css']
})
export class NewpublisherComponent implements OnInit {
  link: string = '/addpublisher';
  type: any;

  constructor(private apiService: ApiService,
              private postService: PostService,
              private router: Router,
              private snackBar: MatSnackBar,
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
  }

  onSubmitnewpublisher(val){
    console.log(val.value);
    if(!val.valid) {
      this.snackBar.open('Invalid Journal Input')
    } else {
      this.apiService.insertPublisher(val.value).subscribe(publisher => {
        console.log(publisher);
        if(!this.link) {
          this.link = '';
        }
        this.router.navigate([`../${this.link}`], { relativeTo: this.route, queryParams: this.type });
        this.postService.setSelectedPublisher({ 
          publisher_id: publisher.publisher_id,
        publisher_name: publisher.publisher_name 
        });

      })
    }

  }

}
