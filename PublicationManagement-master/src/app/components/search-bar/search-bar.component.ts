import { Component, OnInit } from '@angular/core';
import { SearchCriteria } from 'src/app/models/SearchCriteria';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  searchBarText: string;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getSearchBarText().subscribe(response => this.searchBarText = response);
  }

  onSearch() {
    console.log(this.searchBarText);
    // call http
    this.postService.setSearchBarText(this.searchBarText);
    this.postService.searchPostByTitle();

  }

}
