import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Journal } from 'src/app/models/Journal';
import { JournalArticleSpecificInput } from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-selectjournal',
  templateUrl: './selectjournal.component.html',
  styleUrls: ['./selectjournal.component.css']
})
export class SelectjournalComponent implements OnInit {
  type: any;
  journal: Journal;
  specificInput: JournalArticleSpecificInput = {
    journal_id: null,
    pages: '',
    volume: ''
  };
  journalList: Journal[] = [];
  journalForm = new FormControl();
  filteredList: Journal[] = [];


  constructor(private postService: PostService,
              private apiService: ApiService,
              private snackBar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params;
    });
    this.apiService.getJournalList().subscribe((journalList: Journal[]) => {
      this.journalList = journalList;
      // this.postService.journalList.next(this.journalList);
      this.filteredList = this.journalList;
    });
    this.postService.getSelectedJournal().subscribe(journal => {
      if (journal) {
        this.journalForm.setValue(journal.journal_name);
      }
    });

    this.journalForm.valueChanges.subscribe(value => {
      this.filteredList = this._filter(value);
      console.log(this.filteredList);
    });

  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.journalList.filter(journal => {
      return journal.journal_name.toLowerCase().includes(filterValue);
    });
  }
  onNext() {
    if (this.filteredList.length !== 1) {
      this.snackBar.open('Please select a journal', 'OK', { duration: 2000 });
    } else {
      this.postService.setSelectedJournal(this.filteredList[0]);
      this.postService.journalArticleSpecificInput = this.specificInput;
      this.postService.setSpecificData();
      this.router.navigate(["../author"], { relativeTo: this.route , queryParams: this.type});
    }
  }
}
