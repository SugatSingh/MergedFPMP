import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Proceeding, ProceedingSelect } from 'src/app/models/Proceeding';
import { ConferenceArticleSpecificInput } from 'src/app/models/Publication';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-select-proceeding',
  templateUrl: './select-proceeding.component.html',
  styleUrls: ['./select-proceeding.component.css']
})
export class SelectProceedingComponent implements OnInit {
  type: any;
  specificInput: ConferenceArticleSpecificInput = {
    pages: ''
  };
  proceeding: ProceedingSelect;
  proceedingList: ProceedingSelect[] = [];
  proceedingForm = new FormControl();
  filteredList: ProceedingSelect[] = [];


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
    this.apiService.getProceedingList().subscribe((proceedingList: ProceedingSelect[]) => {
      this.proceedingList = proceedingList;
      // this.postService.proceedingList.next(this.proceedingList);
      this.filteredList = this.proceedingList;
    });
    this.proceeding = this.postService.getSelectedProceeding();

    this.proceedingForm.valueChanges.subscribe(value => {
      this.filteredList = this._filter(value);
      console.log(this.filteredList);
    });

  }

  private _filter(value: string) {
    const filterValue = value.toLowerCase();

    return this.proceedingList.filter(proceeding => {
      return proceeding.proceeding_title.toLowerCase().includes(filterValue);
    });
  }
  onNext() {
    if (this.filteredList.length !== 1) {
      this.snackBar.open('Please select a proceeding', 'OK', { duration: 2000 });
    } else {
      this.postService.conferenceArticleSpecificInput = this.specificInput;
      this.postService.setSelectedProceeding(this.filteredList[0]);
      this.postService.setSpecificData();
      this.router.navigate(["../author"], { relativeTo: this.route , queryParams: this.type});
    }
  }
}
