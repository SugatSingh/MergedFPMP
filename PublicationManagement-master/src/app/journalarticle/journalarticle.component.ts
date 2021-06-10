import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NgForm
} from '@angular/forms';
import {
  Router
} from '@angular/router';
import {
  BibJSON
} from '../models/BibJSON';
import {
  Journal
} from '../models/Journal';
import {
  JournalArticle
} from '../models/JournalArticle';
import {
  Publication
} from '../models/Publication';
import {
  ApiService
} from '../services/api.service';
import {
  PostService
} from '../services/post.service';
import {
  jsPDF
} from 'jspdf';
import {
  series,
  waterfall
} from 'async';
import {
  MatSnackBar
} from '@angular/material';
import {
  Author
} from '../models/Author';
import {
  Publisher
} from '../models/Publisher';

@Component({
  selector: 'app-journalarticle',
  templateUrl: './journalarticle.component.html',
  styleUrls: ['./journalarticle.component.css']
})


export class JournalarticleComponent implements OnInit {
  journalArticles: JournalArticle[] = [];

  @ViewChild('jourarticleform', null) jourarticleform: NgForm;

  constructor(private postService: PostService,
    private apiService: ApiService,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.postService.searchPostByUserId('journal_article');
    this.postService.journalArticles.subscribe((articles) => {
      this.journalArticles = articles;
    });
  }

  onSubmitBibtex(val) {
    const bibtex = val.value;
    console.log(bibtex);
    this.apiService.parseBibtex(bibtex).subscribe((result: BibJSON) => {
      console.log(result);
    });
  }

  delete(publication_id: number) {
    this.apiService.removePost('journal_article', publication_id).subscribe(then => {
      this.ngOnInit();
    });
  }
  download(format = 'bibtex') {
    const array = [];
    console.log('clicked');
    const doc = new jsPDF();
    try {
      this.journalArticles.forEach((article, index) => {
        console.log('inside');
        waterfall([
          (callback) => {
            this.apiService.getAuthorByPostId(article.publication_id).subscribe((authors: Author[]) => {
              const authorName = authors.map((author) => {
                return author.last_name + ', ' + author.first_name;
              }).join(' and ');
              console.log(authorName);
              callback(null, authorName);
            });
          },
          (author, callback) => {
            this.apiService.getJournalByPostId(article.publication_id).subscribe((journal: Journal | any) => {
              console.log(journal);
              callback(null, author, journal.journal_name, journal.pages);
            });
          },
          (author, journal, pages, callback) => {
            this.apiService.getPublisherById(article.publisher_id).subscribe((publisher: Publisher) => {
              console.log(publisher);
              callback(null, author, journal, pages, publisher.publisher_name);
            });
          },
          (author, journal, pages, publisher, callback) => {
            let cite: any = {};
            let properties: any = {};
            if (article.type) {
              cite.type = article.type;
            }
            if (article.label) {
              cite.label = article.label;
            } else {
              cite.label = '';
            }
            if (article.title) {
              properties.title = article.title;
            }
            if (journal) {
              properties.journal = journal;
            }
            if (publisher) {
              properties.publisher = publisher;
            }
            if (article.link) {
              properties.url = article.link;
            }
            if (article.DOI) {
              properties.doi = article.DOI;
            }
            if (author) {
              properties.author = author;
            }
            if (article.month) {
              properties.month = `${article.month + 1}`;
            }
            if (article.year) {
              properties.year = `${article.year}`;
            }
            if (article.abstract) {
              properties.abstract = article.abstract;
            }
            if (pages) {
              properties.pages = pages;
            }
            cite.properties = properties;
            console.log(JSON.stringify(cite));
            this.apiService.getCitationAPA(cite).subscribe((data: any) => {
              console.log('output', data);
              array.push(data.output);
              doc.text(data.output, 15, 10 * index + 20);
              callback(null, 'done');
            });
          }
        ], (error, output: string) => {
          if (error) {
            throw error;
          }
          if (index === this.journalArticles.length - 1) {
            setTimeout(() => {
            this.downloadText('publication.txt', array.join('\n\n'));
            doc.save('publication.pdf');
            }, 2000);
          }
        });
      });
    } catch (error) {
      this.snackbar.open('Download Failed', 'OK', {
        duration: 2000
      });
    }

  }

  downloadText(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
}
