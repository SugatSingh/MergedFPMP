import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';
import {
  BehaviorSubject
} from 'rxjs';
import {
  Author
} from 'src/app/models/Author';
import {
  BibJSON
} from 'src/app/models/BibJSON';
import {
  Journal
} from 'src/app/models/Journal';
import {
  JournalArticle
} from 'src/app/models/JournalArticle';
import {
  Publisher
} from 'src/app/models/Publisher';
import {
  ApiService
} from 'src/app/services/api.service';
import {
  PostService
} from 'src/app/services/post.service';
import {
  waterfall
} from 'async';


@Component({
  selector: 'app-journal-article',
  templateUrl: './journal-article.component.html',
  styleUrls: ['./journal-article.component.css']
})
export class JournalArticleComponent implements OnInit {
  journalArticle: JournalArticle;
  authors: Author[] = [];
  publisher: Publisher;
  journal: any;
  id: number;
  apa: string = '';
  vancouver: string = '';
  bibtex: string = '';
  citation: BibJSON;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    waterfall([
      (callback) => {
        this.id = this.route.snapshot.params.id;
        this.apiService.getPostById(this.id).subscribe((data: JournalArticle) => {
          console.log(data);
          this.journalArticle = data;
          callback(null, data.publication_id);
        });
      },
      (id, callback) => {
        this.apiService.getAuthorByPostId(id).subscribe((authors: Author[]) => {
          this.authors = [...authors];
          console.log('author', this.authors);
          callback(null, id);
        });
      },
      (id, callback) => {
        this.apiService.getJournalByPostId(id).subscribe((data) => {
          this.journal = data;
          callback(null);
        });
      },
      (callback) => {
        this.apiService.getPublisherById(this.journalArticle.publisher_id).subscribe((publisher: Publisher) => {
          this.publisher = publisher;
          const authorName = this.authors.map((author) => {
            return author.last_name + ', ' + author.first_name;
          }).join(' and ');
          console.log(authorName);
          callback(null, authorName);
        });
      },
      (author, callback) => {
        let cite: any = {};
        let properties: any = {};
        if (this.journalArticle.type) {
          cite.type = this.journalArticle.type;
        }
        if (this.journalArticle.label) {
          cite.label = this.journalArticle.label;
        } else {
          cite.label = '';
        }
        if (this.journalArticle.title) {
          properties.title = this.journalArticle.title;
        }
        if (this.journal.name) {
          properties.journal = this.journal.name;
        }
        if (this.publisher) {
          properties.publisher = this.publisher;
        }
        if (this.journalArticle.link) {
          properties.url = this.journalArticle.link;
        }
        if (this.journalArticle.DOI) {
          properties.doi = this.journalArticle.DOI;
        }
        if (author) {
          properties.author = author;
        }
        if (this.journalArticle.month) {
          properties.month = `${this.journalArticle.month + 1}`;
        }
        if (this.journalArticle.year) {
          properties.year = `${this.journalArticle.year}`;
        }
        if (this.journalArticle.abstract) {
          properties.abstract = this.journalArticle.abstract;
        }
        if (this.journal.pages) {
          properties.pages = this.journal.pages;
        }
        cite.properties = properties;
        console.log(JSON.stringify(cite));
        this.citation = cite;
        callback(null);
      },
      (callback) => {
        this.apiService.getCitationAPA(this.citation).subscribe((data: {
          output: string
        }) => {
          this.apa = data.output;
          console.log(data.output);
        });
        this.apiService.getCitationVancouver(this.citation).subscribe((data: {
          output: string
        }) => {
          this.vancouver = data.output;
        });
        this.apiService.getCitationBibtex(this.citation).subscribe((data: {
          output: string
        }) => {
          this.bibtex = data.output;
        });
        callback(null, 'done');
      }

    ], (error, result) => {
      console.log(result);
    })


  }

  async next() {


  }


}
