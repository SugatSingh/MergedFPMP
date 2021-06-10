import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BibJSON } from '../models/BibJSON';
import { ConferenceArticle } from '../models/ConferenceArticle';
import { PublicationInput } from '../models/Publication';
import { ApiService } from '../services/api.service';
import { PostService } from '../services/post.service';
//import { Conference } from '../models/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  conferenceArticles: ConferenceArticle[] = [];
 @ViewChild('jourarticleform', null) jourarticleform: NgForm;
  constructor(private apiService: ApiService, 
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.postService.searchPostByUserId('conference_article');
    this.postService.conferenceArticles.subscribe(articles => {
      this.conferenceArticles = articles;
    });
  }


  onSubmitconfarticle(val){
    const articledata = val.value;
    const valid = val.valid;
    console.log(articledata, valid);
  }
  onSubmitbibtex(val) {
    const bibtex = val.value;
    this.apiService.parseBibtex(bibtex).subscribe((data: BibJSON) => {
      let journal = data.properties.journal;
      let publisher = data.properties.publisher;
      const publication: PublicationInput = {
        title: data.properties.title,
        month: data.properties.month,
        year: data.properties.year,
        DOI: data.properties.doi,
        link: data.properties.url,
        pages: data.properties.pages,
        label: data.label,
        type: data.type
      };
      this.postService.setPublicationInput(publication);
      this.postService.setSelectedJournal({ journal_id: null, journal_name: journal });
      this.postService.setSelectedPublisher({ publisher_id: null, publisher_name: publisher });
    });
    console.log(bibtex);
    this.router.navigate(['/new/publisher'], { queryParams: { type: 'conference_article' } });
  }

  delete(publication_id: number) {
    this.apiService.removePost('conference_article', publication_id).subscribe(then => {
      this.ngOnInit();
    });
  }

}
