import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showPrdictCaliHousing(){
    this.router.navigateByUrl('/post/calihousing');
  }


}
