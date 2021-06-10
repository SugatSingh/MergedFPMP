import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Author } from '../models/Author';
import { BibJSON } from '../models/BibJSON';
import { BookInput } from '../models/BookInput';
import { JournalInput } from '../models/JournalInput';
import { PublisherInput } from '../models/PublisherInput';
import { PostService } from './post.service';
import { user_detail, department, dept_count } from './data';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  rootAPI = 'http://localhost:4200/api';

  constructor(private http: HttpClient,
              private postService: PostService,
              private router: Router,
    ) { }
  // specialized get routes
  getUsers() {
    return this.http.get(`${this.rootAPI}/user`);
  }

  loginUser(user_email, password) {
    this.http.post<any>(`${this.rootAPI}/user/login`, { user_email, password }).subscribe( message => {
      console.log(message);
      localStorage.setItem('token', message.token);
      this.postService.setUser({
        user_id: message.user_id,
        user_email: message.user_email,
        first_name: message.first_name,
        last_name: message.last_name,
        role: message.role
       });
      this.router.navigate(['/dashboard']);
    });
  }
  getUserDetails(id: number) {
    return this.http.get(`${this.rootAPI}/user/${id}`);
  }
  getDepartmentById(i: number) {
    return department[i];
    // return this.http.get(`${this.rootAPI}/department/${i}`);
  }
  getDepartments() {
    return department;
    // return this.http.get(`${this.rootAPI}/department`);
  }
  getDepartmentCounts(id: number) {
    return dept_count;
    // return this.http.get(`${this.rootAPI}/department/count`);
  }
  getJournalList() {
    return this.http.get(this.rootAPI + '/journal/name');
  }
  getConferenceList() {
    return this.http.get(this.rootAPI + '/conference');
  }
  getProceedingList() {
   return this.http.get(`${this.rootAPI}/posts/proceedinglist`)
  }
  getPublisherById(id: number) {
    return this.http.get(`${this.rootAPI}/publisher/${id}`);
  }
  getPublisherList() {
    return this.http.get(this.rootAPI + '/publisher/name');
  }
  getAuthorByPostId(id: number) {
    return this.http.get(`${this.rootAPI}/author/post/${id}`);
  }
  getAuthorList() {
    return this.http.get(this.rootAPI + '/author/name');
  }
  getBookList() {
    return this.http.get(this.rootAPI + '/book/name');
  }
  // general journal routes
  getJournals() {
    return this.http.get(this.rootAPI + '/journal');
  }
  getJournalById(id: number) {
    return this.http.get(this.rootAPI + `/journal/${id}`);
  }

  getJournalArticles() {
    return this.http.get(this.rootAPI + '/posts/journal_article/search');
  }
  getJournalArticleById(id: number) {
    return this.http.get(`${this.rootAPI}/posts/${id}`);
  }
  getJournalByPostId(id: number) {
    return this.http.get(`${this.rootAPI}/journal/post/${id}`);
  }
  // general post routes
  getPostById( id: number) {
    return this.http.get(`${this.rootAPI}/posts/${id}`);
  }

  insertPost(post, publication_type: string) {
    this.http.post<any>(`${this.rootAPI}/posts/${publication_type}/create`, post)
    .subscribe(response => {
      console.log("response", response);
      this.postService.setPublicationInput({
        title: '',
        month: 0,
        DOI: '',
        link: '',
        publication_type: '',
        pages: ''
       });
      this.router.navigate([`${publication_type}/${response.publication_id}`]);
    });
  }

  insertPublisher(publisher: PublisherInput) {
    return this.http.post<any>(`${this.rootAPI}/publisher/create`, publisher);
  }
  insertJournal(journal: JournalInput) {
    return this.http.post<any>(`${this.rootAPI}/journal/create`, journal);
  }
  insertAuthor( author: { first_name: string, lastName: string }) {
    return this.http.post<any>(`${this.rootAPI}/author/create`, author);
  }
  insertBook( book: BookInput) {
    return this.http.post<any>(`${this.rootAPI}/book/create`, book);
  }
  insertConference(newConference: any) {
    return this.http.post<any>(`${this.rootAPI}/conference/create`, newConference);
  }

  // general journal article routes
  insertJournalArticle() {
    const user_id = this.postService.getUserId();
    const publisher_id = this.postService.getSelectedPublisherId();
    const journal_id = this.postService.getSelectedJournalId();
    const author_data = this.postService.getSelectedAuthorIds();
    const publicationInput = this.postService.getPublicationInputValue();
    const publication_data = {
      user_id,
      publisher_id,
      title: publicationInput.title,
      month: publicationInput.month,
      year: publicationInput.year,
      DOI: publicationInput.DOI,
      link: publicationInput.link,
      publication_type: 'journal_article',
      type: publicationInput.type
    };
    const specific_data = {
      pages: this.postService.journalArticleSpecificInput.pages,
      volume: this.postService.journalArticleSpecificInput.volume,
      journal_id
    };
    return this.insertPost({publication_data, specific_data, author_data}, 'journal_article');
  }

  insertConferenceArticle() {
    const user_id = this.postService.getUserId();
    const publisher_id = this.postService.getSelectedPublisherId();
    const proceeding_id = this.postService.getSelectedProceedingId();
    const author_data = this.postService.getSelectedAuthorIds();
    const publicationInput = this.postService.getPublicationInputValue();
    const publication_data = {
      user_id,
      publisher_id,
      title: publicationInput.title,
      month: publicationInput.month,
      year: publicationInput.year,
      DOI: publicationInput.DOI,
      link: publicationInput.link,
      publication_type: 'conference_article',
      type: publicationInput.type
    };
    const specific_data = {
      pages: this.postService.conferenceArticleSpecificInput.pages,
      proceeding_id
    };
    return this.insertPost({publication_data, specific_data, author_data}, 'conference_article');
  }

  insertBookChapter() {
    const user_id = this.postService.getUserId();
    const publisher_id = this.postService.getSelectedPublisherId();
    const book_id = this.postService.getSelectedBookId();
    const author_data = this.postService.getSelectedAuthorIds();
    const publicationInput = this.postService.getPublicationInputValue();
    const publication_data = {
      user_id,
      publisher_id,
      title: publicationInput.title,
      month: publicationInput.month,
      year: publicationInput.year,
      DOI: publicationInput.DOI,
      link: publicationInput.link,
      publication_type: 'book_chapter',
      type: publicationInput.type
    };
    const specific_data = {
      volume: this.postService.bookChapterSpecificInput.volume,
      edition: this.postService.bookChapterSpecificInput.edition,
      book_id
    };
    return this.insertPost({publication_data, specific_data, author_data}, 'book_chapter');
  }
  
  insertProceeding() {
    const user_id = this.postService.getUserId();
    const publisher_id = this.postService.getSelectedPublisherId();
    const conference_id = this.postService.getSelectedConferenceId();
    const author_data = this.postService.getSelectedAuthorIds();
    const publicationInput = this.postService.getPublicationInputValue();
    const publication_data = {
      user_id,
      publisher_id,
      title: publicationInput.title,
      month: publicationInput.month,
      year: publicationInput.year,
      DOI: publicationInput.DOI,
      link: publicationInput.link,
      publication_type: 'proceeding',
      type: publicationInput.type
    };
    const specific_data = {
      conference_id,
      impact_factor: this.postService.proceedingSpecificInput.impact_factor
    };
    return this.insertPost({publication_data, specific_data, author_data}, 'proceeding');
  }

  // Citation API
  getCitationAPA(data: BibJSON) {
    return this.http.post(`${this.rootAPI}/citation/apa`, { data: JSON.stringify(data)});
  }
  getCitationVancouver(data: BibJSON) {
    return this.http.post(`${this.rootAPI}/citation/vancouver`, { data: JSON.stringify(data)});
  }
  getCitationBibtex(data: BibJSON) {
    return this.http.post(`${this.rootAPI}/citation/bibtex`, { data: JSON.stringify(data)});
  }
  getCitationAll(data: BibJSON) {
    return this.http.post(`${this.rootAPI}/citation/all`, { data: JSON.stringify(data)});
  }
  getCitationById(id: number) {
    return this.http.get(`${this.rootAPI}/citation/all/${id}`);
  }
  parseBibtex(bibtex: string) {
    return this.http.post(`${this.rootAPI}/citation/parse`, { bibtex });
  }

  //
  removePost(publication_type: string, publication_id: number) {
    return this.http.post(`${this.rootAPI}/posts/${publication_type}/delete/${publication_id}`, {});
  }

}
