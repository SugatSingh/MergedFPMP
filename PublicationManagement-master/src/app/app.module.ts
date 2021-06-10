import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatBadgeModule, MatButtonModule, MatCardModule, MatFormFieldModule,
   MatIconModule, MatInputModule, MatPaginatorModule, MatSlideToggleModule,
    MatSnackBarModule, MatTableModule, MatTabsModule} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { DashusersComponent } from './dashusers/dashusers.component';
import { JournalarticleComponent } from './journalarticle/journalarticle.component';
import { BookComponent } from './book/book.component';
import { ProceedingsComponent } from './proceedings/proceedings.component';
import { ReportComponent } from './report/report.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { SelectAuthorComponent } from './components/select-author/select-author.component';
import { from } from 'rxjs';
import { AddjournalComponent } from './forms/addjournal/addjournal.component';
import { AddauthorComponent } from './forms/addauthor/addauthor.component';
import { AddjournalarticleComponent } from './forms/addjournalarticle/addjournalarticle.component';
import { AddpublisherComponent } from './forms/addpublisher/addpublisher.component';
import { SelectjournalComponent } from './forms/selectjournal/selectjournal.component';
import { NewpublisherComponent } from './forms/newpublisher/newpublisher.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AdvanceSearchComponent } from './components/advance-search/advance-search.component';
import { SmallNavComponent } from './components/small-nav/small-nav.component';
import { JournalAricleListItemComponent } from './components/journal-aricle-list-item/journal-aricle-list-item.component';
import { JournalListItemComponent } from './components/journal-list-item/journal-list-item.component';
import { JournalHomeComponent } from './components/journal-home/journal-home.component';
import { PostService } from './services/post.service';
import { LocalStorageService } from './services/local-storage.service';
import { SelectconferenceComponent } from './forms/selectconference/selectconference.component';
import { AddconferenceComponent } from './forms/addconference/addconference.component';
import { SelectbookComponent } from './forms/selectbook/selectbook.component';
import { AddbookComponent } from './forms/addbook/addbook.component';
import { UpdateJournalArticleComponent } from './components/update-journal-article/update-journal-article.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { NewAuthorComponent } from './components/new-author/new-author.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { JournalArticleComponent } from './components/journal-article/journal-article.component';
import { AllJournalArticleComponent } from './components/all-journal-article/all-journal-article.component';
import { SafeHtmlPipe } from './pipe/HtmlPipe';
import { DepartmentComponent } from './components/department/department.component';
import { JournalArticleTableComponent } from './components/tables/journal-article-table/journal-article-table.component';
import { ConferenceArticleTableComponent } from './components/tables/conference-article-table/conference-article-table.component';
import { BookChapterTableComponent } from './components/tables/book-chapter-table/book-chapter-table.component';
import { JournalTableComponent } from './components/tables/journal-table/journal-table.component';
import { SelectPostComponent } from './components/select-post/select-post.component';
import { SelectConferenceComponent } from './components/select-conference/select-conference.component';
import { NewConferenceArticleComponent } from './components/new-conference-article/new-conference-article.component';
import { NewBookChapterComponent } from './components/new-book-chapter/new-book-chapter.component';
import { NewConferenceComponent } from './components/new-conference/new-conference.component';
import { SelectProceedingComponent } from './components/select-proceeding/select-proceeding.component';
import { PublicationInputFormComponent } from './components/publication-input-form/publication-input-form.component';
import { NewProceedingsComponent } from './components/new-proceedings/new-proceedings.component';
import { TableDisplayComponent } from './forms/table-display/table-display.component';
import { AuthInterceptor } from './interceptor/AuthInterceptor';
import { ConferenceArticleListItemComponent } from './components/conference-article-list-item/conference-article-list-item.component';
import { BookChapterListItemComponent } from './components/book-chapter-list-item/book-chapter-list-item.component';
import { ProceedingListItemComponent } from './components/proceeding-list-item/proceeding-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    SafeHtmlPipe,
    HomeComponent,
    SearchresultComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    ArticleComponent,
    DashhomeComponent,
    DashusersComponent,
    JournalarticleComponent,
    BookComponent,
    ProceedingsComponent,
    ReportComponent,
    AddPostComponent,
    SelectAuthorComponent,
    AddjournalComponent,
    AddauthorComponent,
    AddjournalarticleComponent,
    AddpublisherComponent,
    SelectjournalComponent,
    NewpublisherComponent,
    SearchBarComponent,
    AdvanceSearchComponent,
    SmallNavComponent,
    JournalAricleListItemComponent,
    JournalListItemComponent,
    JournalHomeComponent,
    SelectconferenceComponent,
    AddconferenceComponent,
    SelectbookComponent,
    AddbookComponent,
    UpdateJournalArticleComponent,
    PostUpdateComponent,
    NewPostComponent,
    ViewPostComponent,
    NewAuthorComponent,
    SearchFilterComponent,
    DepartmentDetailComponent,
    JournalArticleComponent,
    AllJournalArticleComponent,
    DepartmentComponent,
    JournalArticleTableComponent,
    ConferenceArticleTableComponent,
    BookChapterTableComponent,
    JournalTableComponent,
    SelectPostComponent,
    SelectConferenceComponent,
    NewConferenceArticleComponent,
    NewBookChapterComponent,
    NewConferenceComponent,
    SelectProceedingComponent,
    PublicationInputFormComponent,
    NewProceedingsComponent,
    ConferenceArticleListItemComponent,
    BookChapterListItemComponent,
    ProceedingListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule

  ],
  providers: [PostService, LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
