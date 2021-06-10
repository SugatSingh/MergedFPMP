import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import {
  BehaviorSubject,
  Observable
} from 'rxjs';
import {
  ConferenceArticle
} from '../models/ConferenceArticle';
import {
  Proceeding,
  ProceedingSelect
} from '../models/Proceeding';
import {
  JournalArticle
} from '../models/JournalArticle';
import {
  BookChapter
} from '../models/BookChapter';
import {
  User
} from '../models/User';
import {
  SearchCriteria
} from '../models/SearchCriteria';
import {
  Journal
} from '../models/Journal';
import {
  Publisher
} from '../models/Publisher';
import {
  Author
} from '../models/Author';
import {
  BookChapterSpecificInput,
  ConferenceArticleSpecificInput,
  JournalArticleSpecificInput,
  ProceedingSpecificInput,
  Publication,
  PublicationInput
} from '../models/Publication';
import {
  Book
} from '../models/Book';
import {
  Conference
} from '../models/Conference';
import {
  SearchFilter
} from '../models/SearchFilter';
import { title } from 'process';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  rootAPI = 'http://localhost:4200/api';

  private userSource = new BehaviorSubject < User > (null);
  private searchBarText = new BehaviorSubject < string > ('');
  private searchCriteria = new BehaviorSubject < SearchCriteria > (null);
  private selectedJournal = new BehaviorSubject < Journal > (null);
  private selectedPublisher = new BehaviorSubject < Publisher > (null);
  private selectedAuthors = new BehaviorSubject < Author[] > ([]);
  private selectedBook = new BehaviorSubject < Book > (null);
  private selectedConference = new BehaviorSubject < Conference > (null);
  private publicationInput = new BehaviorSubject < PublicationInput > (new PublicationInput());

  readonly loggedStatus = new BehaviorSubject < boolean > (false);
  readonly journalArticles = new BehaviorSubject < JournalArticle[] > ([]);
  readonly conferenceArticles = new BehaviorSubject < ConferenceArticle[] > ([]);
  readonly proceedings = new BehaviorSubject < Proceeding[] > ([]);
  readonly bookChapters = new BehaviorSubject < BookChapter[] > ([]);
  readonly journalList = new BehaviorSubject < Journal[] > ([]);
  readonly publisherList = new BehaviorSubject < Publisher[] > ([]);
  readonly authorList = new BehaviorSubject < Author[] > ([]);
  readonly bookList = new BehaviorSubject < Book[] > ([]);
  readonly conferenceList = new BehaviorSubject < Conference[] > ([]);
  readonly searchFilterOptions = new BehaviorSubject < SearchFilter > (null);
  readonly selectedProceeding = new BehaviorSubject < ProceedingSelect > (null);
  journalArticleSpecificInput: JournalArticleSpecificInput;
  conferenceArticleSpecificInput: ConferenceArticleSpecificInput;
  proceedingSpecificInput: ProceedingSpecificInput;
  bookChapterSpecificInput: BookChapterSpecificInput;

  constructor(private http: HttpClient, private router: Router) {}
  // get functions
  getUser() {
    return this.userSource.asObservable();
  }
  getUserId() {
    return this.userSource.value.user_id;
  }
  getLoggedStatus() {
    return this.loggedStatus.asObservable();
  }
  getSearchBarText() {
    return this.searchBarText.asObservable();
  }
  getSearchCriteria() {
    return this.searchCriteria.asObservable();
  }
  getSelectedJournal() {
    return this.selectedJournal.asObservable();
  }
  getSelectedJournalId() {
    return this.selectedJournal.value.journal_id;
  }
  getSelectedPublisher() {
    return this.selectedPublisher.asObservable();
  }
  getSelectedPublisherId() {
    return this.selectedPublisher.value.publisher_id;
  }
  getSelectedAuthors() {
    return this.selectedAuthors.asObservable();
  }
  getSelectedAuthorIds() {
    return this.selectedAuthors.value.map((author: Author) => {
      return author.author_id;
    });
  }
  getSelectedBook() {
    return this.selectedBook.asObservable();
  }
  getSelectedBookId() {
    return this.selectedBook.value.book_id;
  }
  getSelectedConference() {
    return this.selectedConference.asObservable();
  }
  getSelectedConferenceId() {
    return this.selectedConference.value.conference_id;
  }
  getSelectedProceeding() {
    return this.selectedProceeding.value;
  }
  getSelectedProceedingId() {
    return this.selectedProceeding.value.proceeding_id;
  }
  getPublicationInput() {
    return this.publicationInput.asObservable();
  }
  getPublicationInputValue() {
    return this.publicationInput.value;
  }

  // set functions
  setUser(user: User) {
    if(user !== null) {
      this.userSource.next(user);
      this.loggedStatus.next(true);
      localStorage.setItem('user', JSON.stringify(user));
    }

  }

  setSearchBarText(text: string) {
    this.searchBarText.next(text);
    localStorage.setItem('searchBarText', text);
  }
  setSearchCriteria(criteria: SearchCriteria) {
    this.searchCriteria.next(criteria);
    localStorage.setItem('searchCriteria', JSON.stringify(criteria));
  }
  setSelectedJournal(journal: Journal) {
    this.selectedJournal.next(journal);
    localStorage.setItem('journal', JSON.stringify(journal));
  }
  setSelectedPublisher(publisher: Publisher) {
    this.selectedPublisher.next(publisher);
    localStorage.setItem('publisher', JSON.stringify(publisher));
  }
  setSelectedAuthors(authors: Author[]) {
    this.selectedAuthors.next(authors);
    localStorage.setItem('authors', JSON.stringify(authors));
  }
  setSelectedBook(book: Book) {
    this.selectedBook.next(book);
    localStorage.setItem('book', JSON.stringify(book));
  }
  setSelectedConference(conference: Conference) {
    this.selectedConference.next(conference);
    localStorage.setItem('conference', JSON.stringify(conference));
  }
  setSelectedProceeding(proceeding: ProceedingSelect) {
    this.selectedProceeding.next(proceeding);
    localStorage.setItem('proceeding', JSON.stringify(proceeding));
  }
  setPublicationInput(publicationInput: PublicationInput) {
    this.publicationInput.next(publicationInput);
    localStorage.setItem('publicationInput', JSON.stringify(publicationInput));
  }
  setSpecificData() {
    localStorage.setItem('journalArticleSpecific', JSON.stringify(this.journalArticleSpecificInput));
    localStorage.setItem('conferenceArticleSpecific', JSON.stringify(this.conferenceArticleSpecificInput));
    localStorage.setItem('bookChapterSpecific', JSON.stringify(this.bookChapterSpecificInput));
    localStorage.setItem('proceedingSpecific', JSON.stringify(this.proceedingSpecificInput));
  }

  searchPostByUserId(publication_type: string) {
    this.searchCriteria.next( {
      publication_type
    } );
    return this.searchPost('user_id', this.getUserId());
  }
  searchPostByTitle() {
    this.searchPost('title', this.searchBarText.value);
    this.router.navigate(['/searchresult']);
  }

  // search functions
  searchPost(field, value) {
    return this.http.post(this.rootAPI + '/posts/search', {
      field,
      value,
      search_criteria: this.searchCriteria.value
    }).subscribe((response: Array < any > ) => {
      console.log(response);
      const journalArticles: JournalArticle[] = response.filter((result) => {
        return result.publication_type === 'journal_article';
      });
      this.journalArticles.next(journalArticles);

      const conferenceArticles: ConferenceArticle[] = response.filter(result => {
        return result.publication_type === 'conference_article';
      });
      this.conferenceArticles.next(conferenceArticles);
      const proceedings: Proceeding[] = response.filter(result => {
        return result.publication_type === 'proceeding';
      });
      this.proceedings.next(proceedings);
      const bookChapters: BookChapter[] = response.filter(result => {
        return result.publication_type === 'book_chapter';
      });
      this.bookChapters.next(bookChapters);
    });
  }

  searchJournal(journal_title): Observable < any > {
    return this.http.post < Array < any >> (this.rootAPI + '/journal/search', {
      field: 'journal_name',
      value: journal_title
    });
  }


}
