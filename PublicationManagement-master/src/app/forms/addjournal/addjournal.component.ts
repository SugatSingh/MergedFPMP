import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-addjournal',
  templateUrl: './addjournal.component.html',
  styleUrls: ['./addjournal.component.css']
})
export class AddjournalComponent implements OnInit {
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
    })
  }

  onSubmitnewjournal(val){
    if(!val.valid) {
      this.snackBar.open('Invalid Journal Input', 'ok', { duration: 2000 });
    } else {
      let newJournal = val.value;
      newJournal.publisher_id = this.postService.getSelectedPublisherId();
      newJournal.peer_reviewed = newJournal.peer_reviewed? 1: 0;
      console.log(newJournal);
      this.apiService.insertJournal(newJournal).subscribe(journal => {
        console.log(journal);
        this.postService.setSelectedJournal({ 
          journal_id: journal.journal_id, 
          journal_name: journal.journal_name 
        });
        this.router.navigate(['../author'], { relativeTo: this.route, queryParams: this.type });
      })
    }
  }

  
}
