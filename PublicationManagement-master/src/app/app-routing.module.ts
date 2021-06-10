import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { BookComponent } from './book/book.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { AllJournalArticleComponent } from './components/all-journal-article/all-journal-article.component';
import { DepartmentDetailComponent } from './components/department-detail/department-detail.component';
import { DepartmentComponent } from './components/department/department.component';
import { JournalArticleComponent } from './components/journal-article/journal-article.component';
import { JournalHomeComponent } from './components/journal-home/journal-home.component';
import { NewAuthorComponent } from './components/new-author/new-author.component';
import { NewProceedingsComponent } from './components/new-proceedings/new-proceedings.component';
import { NewBookChapterComponent } from './components/new-book-chapter/new-book-chapter.component';
import { NewConferenceArticleComponent } from './components/new-conference-article/new-conference-article.component';
import { NewConferenceComponent } from './components/new-conference/new-conference.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostUpdateComponent } from './components/post-update/post-update.component';
import { SelectConferenceComponent } from './components/select-conference/select-conference.component';
import { SelectPostComponent } from './components/select-post/select-post.component';
import { SelectProceedingComponent } from './components/select-proceeding/select-proceeding.component';
import { JournalArticleTableComponent } from './components/tables/journal-article-table/journal-article-table.component';
import { UpdateJournalArticleComponent } from './components/update-journal-article/update-journal-article.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashhomeComponent } from './dashhome/dashhome.component';
import { DashusersComponent } from './dashusers/dashusers.component';
import { AddauthorComponent } from './forms/addauthor/addauthor.component';
import { AddbookComponent } from './forms/addbook/addbook.component';
import { AddjournalComponent } from './forms/addjournal/addjournal.component';
import { AddjournalarticleComponent } from './forms/addjournalarticle/addjournalarticle.component';
import { AddpublisherComponent } from './forms/addpublisher/addpublisher.component';
import { NewpublisherComponent } from './forms/newpublisher/newpublisher.component';
import { SelectbookComponent } from './forms/selectbook/selectbook.component';
import { SelectjournalComponent } from './forms/selectjournal/selectjournal.component';
import { CreatePostGuard } from './guards/create-post.guard';
import { EditGuardGuard } from './guards/edit-guard.guard';
import { HomeComponent } from './home/home.component';
import { JournalarticleComponent } from './journalarticle/journalarticle.component';
import { LoginComponent } from './login/login.component';
import { ProceedingsComponent } from './proceedings/proceedings.component';
import { ReportComponent } from './report/report.component';
import { SearchresultComponent } from './searchresult/searchresult.component';
import { UserGuardGuard } from './guards/user-guard.guard';


const routes: Routes = [
  // { path: 'table', component: JournalArticleTableComponent },

  {path: '', component: HomeComponent},
  {path: 'searchresult', component: SearchresultComponent},
  {path: 'login', component: LoginComponent},
  { path: 'dashboard', canActivate: [UserGuardGuard], children: [
    { path: '', canActivate: [UserGuardGuard], component: DashboardComponent },
    {path: 'conferencearticle', canActivate: [UserGuardGuard], component: ArticleComponent},
    {path: 'users', canActivate: [UserGuardGuard], component: DashusersComponent},
    {path: 'report', canActivate: [UserGuardGuard], component: ReportComponent},
    {path: 'book', canActivate: [UserGuardGuard], component: BookComponent},
    {path: 'proceeding', canActivate: [UserGuardGuard], component: ProceedingsComponent},
    {path: 'journalarticle', canActivate: [UserGuardGuard], component: JournalarticleComponent}
  ]  },
  { path: 'department', children: [
    {
      path: '', component: DepartmentComponent
    },
    {
      path: ':id', component: DepartmentDetailComponent
    }
  ] },
  {
    path: 'journalarticle', children: [
      {
        path: '', component: AllJournalArticleComponent
      },
      {
        path: ':id', component: JournalArticleComponent
      }
    ]
  },
  { path: 'journal', children: [
    { path: '', pathMatch: 'full', component: JournalHomeComponent },
  ] },
  { path: 'add', children: [
    { path: '', pathMatch: 'full' , component: AddPostComponent },
    { path: 'journal', component: SelectjournalComponent },
   ]
  },
  // Updates
  { path: 'update/:id', component: PostUpdateComponent, canActivate: [EditGuardGuard],
  //  children: [

  //   { path: 'publisher', component: AddpublisherComponent },
  //   { path: 'newpublisher', component: NewpublisherComponent },
  //   { path: 'journal', component: SelectjournalComponent },
  //   { path: 'newjournal', component: AddjournalComponent },
  //   { path: 'author', component: AddauthorComponent },
  //   { path: 'newauthor', component: NewAuthorComponent },
  //   // { path: 'book', component: SelectBookComponent},
  //   // {path: 'conference', component: SelectConferenceComponent},
  //   // {path: 'conferencearticle', pathMatch: 'full', component: UpdateConferenceArticleComponent},
  //   // { path: 'bookchapter', pathMatch: 'full', component: UpdateBookChapterComponent },
  //   { path: 'journalarticle', pathMatch: 'full', component: UpdateJournalArticleComponent}
  // ] 
},
  // New paths
  { path: 'new', component: NewPostComponent, canActivate: [CreatePostGuard], children: [
    { path: '', pathMatch: 'full', component: SelectPostComponent  },
    { path: 'publisher', component: AddpublisherComponent },
    { path: 'newpublisher', component: NewpublisherComponent },
    { path: 'journal', pathMatch: 'full', component: SelectjournalComponent },
    { path: 'newjournal', component: AddjournalComponent },
    { path: 'author', component: AddauthorComponent },
    { path: 'newauthor', component: NewAuthorComponent },
    { path: 'book', component: SelectbookComponent},
    { path: 'newbook', pathMatch: 'full', component: AddbookComponent },
    { path: 'proceeding', component: SelectProceedingComponent },
    {path: 'conference', component: SelectConferenceComponent},
    {path: 'newconference', component: NewConferenceComponent},
    { path: 'bookchapter', component: NewBookChapterComponent },
    {path: 'conferencearticle', pathMatch: 'full', component: NewConferenceArticleComponent},
    { path: 'journalarticle', pathMatch: 'full', component: AddjournalarticleComponent},
    { path: 'proceedings', pathMatch: 'full', component: NewProceedingsComponent}
  ] },
  // View Paths
  {path: 'view', component: ViewPostComponent, children: [
    { path: 'journal_article/:id', component: HomeComponent },
    { path: 'conference_article/:id', component: HomeComponent },
    { path: 'book_chapter/:id', component: HomeComponent },
  ]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
