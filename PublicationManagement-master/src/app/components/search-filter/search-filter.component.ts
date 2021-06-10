import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Journal } from 'src/app/models/Journal';
import { SearchFilter } from 'src/app/models/SearchFilter';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit, OnDestroy {
  journalList: Journal[] = [];
  searchFilter = new SearchFilter();
  listener: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.journalList = this.postService.journalList.value;
    this.listener = this.postService.searchFilterOptions.subscribe(data => {
      this.searchFilter = data;
    })
  }

  updateJournal(val){
    console.log(val.value);
    // this.postService.searchFilterOptions.next(val.value);
  }
  updateDate(val) {
    console.log(val);
  }
  update_image(val){
    console.log(val.value);
  }
  update_journalarticle(val){
    console.log(val.value);
  }
  update_journal(val){
    console.log(val.value);
  }
  ngOnDestroy() {
    this.listener.unsubscribe();
  }

}
