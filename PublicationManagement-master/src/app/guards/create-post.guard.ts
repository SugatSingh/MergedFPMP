import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../services/post.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePostGuard implements CanActivate {
  constructor(private postService: PostService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.postService.getLoggedStatus();
  }

}
