import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Author } from 'src/app/models/Author';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})

export class AddauthorComponent implements OnInit {
  link: string;
  authorList: Author[] = [];
  authorForm = new FormControl();
  filteredList: Author[] = [];
  authors: Author[] = [];
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
          this.link = 'journalarticle';
          break;
        case 'conference_article':
          this.link = 'conferencearticle';
          break;
        case 'proceeding':
          this.link = 'proceedings';
          break;
        case 'book_chapter':
          this.link = 'bookchapter';
          break;
        default:
          this.link = 'journalarticle';
          break;
      }

    });

    this.apiService.getAuthorList().subscribe((authorList: Author[]) => {
      this.authorList = authorList;
      console.log(authorList);
    });
    this.postService.getSelectedAuthors().subscribe(authors => {
      if(authors) {
        this.authors = authors;
        console.log(this.authors);
      }
    });
    this.authorForm.valueChanges.subscribe(value => {
      this.filteredList = this._filter(value);
    });
  }
  private _filter(value: string) {
    const filteredValue = value.split(' ');
    const first = filteredValue[0].toLowerCase();
    const second = filteredValue[1] ? filteredValue[1].toLowerCase() : null;

    return this.authorList.filter(author => {
      if(author === null) { return false;}
      return (author.first_name.toLowerCase().includes(first)
      || author.last_name.toLowerCase().includes(first)
      || author.last_name.toLowerCase().includes(second));
    });
  }
  
  selectAuthor() {
    if (this.filteredList.length < 1 ) {
      this.snackBar.open('Please select an author','OK', {duration: 2000});
    } else {
      this.filteredList[0].index = this.authors.length;
      this.filteredList[0].secondary_author = false;
      this.authors.push(this.filteredList[0]);
      this.postService.setSelectedAuthors(this.authors);
    }
  }
  toggle(i: number) {
    this.authors[i].secondary_author = !this.authors[i].secondary_author;
  }
  removeAuthor(i: number) {
    this.authors.splice(i, 1);
  }
  onNext() {
    if (!this.authors.length) {
      this.snackBar.open('Please select an author');
    } else {
      this.postService.setSelectedAuthors(this.authors);
        this.router.navigate([`../${this.link}`], { relativeTo: this.route });
    }
  }
}
