import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  images = [
    {
      imageSrc:
        'https://th.bing.com/th/id/R.44611cc801e58b6639047d0535f29e5f?rik=LkFwwnWmmRMQ9A&pid=ImgRaw&r=0',
      imageAlt: 'Blog 1',
    },
    {
      imageSrc:
        'https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX29811287.jpg',
      imageAlt: 'Blog 2',
    },
    {
      imageSrc:
        'https://lh3.googleusercontent.com/blogger_img_proxy/ANbyha16pdh_rO5vp5CHE9ZuNce6yNxZQgpIAK0hDshKe-BwHMG9p0lYH_oos1JbY-JSTAPJ0zJwCcjzhKUVRag3sI0NcioBUoCnmQk=s0-d',
      imageAlt: 'Blog 3',
    },
    {
      imageSrc:
        'https://cdn.pixabay.com/photo/2020/04/25/12/14/circle-5090539_960_720.jpg',
      imageAlt: 'Blog 4',
    },
    {
      imageSrc:
        'https://cdn.pixabay.com/photo/2017/12/26/21/19/circle-3041437_960_720.jpg',
      imageAlt: 'Blog 5',
    },
  ]
}
