import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Conference } from 'src/app/models/Conference';
import { ConferenceArticleSpecificInput, ProceedingSpecificInput } from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-select-conference',
  templateUrl: './select-conference.component.html',
  styleUrls: ['./select-conference.component.css']
})
export class SelectConferenceComponent implements OnInit {
  type: any;
  conference: Conference;
  specificInput: ProceedingSpecificInput = {
    impact_factor: null
  };
  conferenceList: Conference[] = [];
  conferenceForm = new FormControl();
  filteredList: Conference[] = [];


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
    this.apiService.getConferenceList().subscribe((conferenceList: Conference[]) => {
      this.conferenceList = conferenceList;
      // this.postService.conferenceList.next(this.conferenceList);
      this.filteredList = this.conferenceList;
    });
    this.postService.getSelectedConference().subscribe(conference => {
      if (conference) {
        this.conferenceForm.setValue(conference.conference_name);
      }
    });

    this.conferenceForm.valueChanges.subscribe(value => {
      this.filteredList = this._filter(value);
      console.log(this.filteredList);
    });

  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.conferenceList.filter(conference => {
      return conference.conference_name.toLowerCase().includes(filterValue);
    });
  }
  onNext() {
    if (this.filteredList.length !== 1) {
      this.snackBar.open('Please select a conference', 'OK', { duration: 2000 });
    } else {
      this.postService.setSelectedConference(this.filteredList[0]);
      this.postService.proceedingSpecificInput = this.specificInput;
      this.postService.setSpecificData();
      this.router.navigate(["../author"], { relativeTo: this.route , queryParams: this.type});
    }
  }

}
