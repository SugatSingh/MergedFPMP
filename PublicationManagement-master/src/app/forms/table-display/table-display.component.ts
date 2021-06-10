import { Component, Input, OnInit } from '@angular/core';
import { Author } from 'src/app/models/Author';
import { JournalArticle } from 'src/app/models/JournalArticle';
import { Journal } from 'src/app/models/Journal';
import { Publisher } from 'src/app/models/Publisher';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-table-display',
  templateUrl: './table-display.component.html',
  styleUrls: ['./table-display.component.css']
})
export class TableDisplayComponent implements OnInit {
  @Input() journalArticle: JournalArticle;
  authors: Author[];
  publisher: Publisher;
  journal: Journal;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    console.log(this.journalArticle);
    this.apiService.getAuthorByPostId(this.journalArticle.publication_id).subscribe((authors: Author[]) => {
      this.authors = authors;
      console.log( this.authors);
    });
    this.apiService.getPublisherById(this.journalArticle.publisher_id).subscribe((publisher: Publisher) => this.publisher = publisher);
    this.apiService.getJournalById(this.journalArticle.journal_id).subscribe((list: Journal) => {
      this.journal = list;
      console.log(this.journal);
    });
  }

}
