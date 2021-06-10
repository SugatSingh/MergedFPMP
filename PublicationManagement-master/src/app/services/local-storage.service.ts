import { Injectable } from '@angular/core';
import { PublicationInput } from '../models/Publication';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor(private postService: PostService) { }

  loadLocalStorage() {
    try {
    this.postService.setUser(JSON.parse(localStorage.getItem('user')));
    this.postService.setSearchBarText(localStorage.getItem('searchBarText'));
    // this.postService.setSearchCriteria(JSON.parse(localStorage.getItem('searchCriteria'))
    // // ?? { publication_type: null, date_from: null, date_until: null, limit: null }
    // );
    this.postService.setSelectedAuthors(JSON.parse(localStorage.getItem('authors')));
    this.postService.setSelectedBook(JSON.parse(localStorage.getItem('book')));
    this.postService.setSelectedProceeding(JSON.parse(localStorage.getItem('proceeding')));
    this.postService.setSelectedConference(JSON.parse(localStorage.getItem('conference')));
    this.postService.setSelectedJournal(JSON.parse(localStorage.getItem('journal')));
    this.postService.setSelectedPublisher(JSON.parse(localStorage.getItem('publisher')));
    this.postService.setPublicationInput(JSON.parse(localStorage.getItem('publicationInput')));
    this.postService.journalArticleSpecificInput = JSON.parse(localStorage.getItem('journalArticleSpecific'));
    this.postService.conferenceArticleSpecificInput = JSON.parse(localStorage.getItem('conferenceArticleSpecific'));
    this.postService.proceedingSpecificInput = JSON.parse(localStorage.getItem('proceedingSpecific'));
    this.postService.bookChapterSpecificInput = JSON.parse(localStorage.getItem('bookChapterSpecific'));
    } catch (error) {
      console.log(error.message);
    }
  
  }
  clearLocalStorage() {
    localStorage.clear();
  }
  clearPublicationData() {
    localStorage.removeItem('authors');
    localStorage.removeItem('book');
    localStorage.removeItem('conference');
    localStorage.removeItem('proceeding');
    localStorage.removeItem('journal');
    localStorage.removeItem('bookChapterSpecific');
    localStorage.removeItem('conferenceArticleSpecific');
    localStorage.removeItem('proceedingSpecific');
    localStorage.removeItem('journalArticleSpecific');
    localStorage.removeItem('publisher');
    localStorage.removeItem('publicationInput');
  }
  clearSearchData() {
    localStorage.removeItem('searchBarText');
    localStorage.removeItem('searchCriteria');
  }
  getToken(): string {
    return localStorage.getItem('token');
  }
  setToken(token) {
    localStorage.setItem('token', token);
  }

}
