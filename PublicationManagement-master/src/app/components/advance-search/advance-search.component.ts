import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchCriteria } from 'src/app/models/SearchCriteria';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit {
  @Output() hideEvent = new EventEmitter();
    // tslint:disable-next-line: variable-name
    search_criteria: SearchCriteria = {
      publication_type: null,
      date_from: null,
      date_until: null,
      limit: 0
    };
    advanced: boolean = false;
    n: number = 1;
    n_list : number[] = [1];
    select_options = [
      {
        value: "journal_article",
        display: "Journal Article"
      },
      {
        value: "conference_article",
        display: "Conference Article"
      },
      {
        value: "proceeding",
        display: "Proceeding"
      },
      {
        value: "book_chapter",
        display: "Book Chapter"
      }
    ];

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  updateSearchCriteria() {
    this.postService.setSearchCriteria(this.search_criteria);
  }

  drop_options() {
    this.advanced = !this.advanced;
    this.hideEvent.emit(this.advanced);
  }

  add_field(){
    this.n_list.push(this.n);
  }

}
