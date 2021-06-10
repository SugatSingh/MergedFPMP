import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-new-conference',
  templateUrl: './new-conference.component.html',
  styleUrls: ['./new-conference.component.css']
})

export class NewConferenceComponent implements OnInit {
  type: any;
  link: string;
  constructor(private apiService: ApiService,
              private postService: PostService,
              private router: Router,
              private snackBar: MatSnackBar,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params;
    });
  }

  onSubmit(val){
    if (!val.valid) {
      this.snackBar.open('Invalid conference Input', 'ok', { duration: 2000 });
    } else {
      const newConference = val.value;
      this.apiService.insertConference(newConference).subscribe(conference => {
        console.log(conference);
        this.postService.setSelectedConference({
          conference_id: conference.conference_id,
          conference_name: conference.conference_name
        });
        this.router.navigate(['../author'], { relativeTo: this.route, queryParams: this.type });
      })
    }
  }

  
}

