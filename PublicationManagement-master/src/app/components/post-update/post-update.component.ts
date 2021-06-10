import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent implements OnInit {
  publication_id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private postService: PostService,
              private apiService: ApiService) {
   }

  ngOnInit() {
    this.publication_id = this.route.snapshot.params.id;
    this.apiService.getPostById(this.route.snapshot.params.id).subscribe(response => {
      console.log(response);
    })

  }

}
