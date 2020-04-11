import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostserviceService {

  subjectobservable = new Subject();

  constructor(private http: HttpClient) { }

 

  Postcard1 = [
    {
    "type": "1",
    "user": "Dileep Katari",
    "profile_image": "assets/Profileimage.png",
    "hours_back": "18 hours ago",
    "story_content": "AngularJS is structural framework for dynamic web apps.",
    "no_of_heart_likes": "10",
    "profile_image_of_likes": ["assets/avatar67-sm.jpg", "assets/avatar68-sm.jpg", "assets/avatar69-sm.jpg"],
    "name_of_likes": "Robert Michael",
    "no_of_liked": "7",
    "no_of_comments": "25",
    "no_of_replies": "32",
    "comments":[
      {
        "comment_profile_image": "assets/avatar68-sm.jpg",
        "comment_user": "Michael Reeves",
        "comment_hours_back": "17 minutes ago",
        "comment_lines": "Commented by the user Michael Reevs",
        "subcomments": {
          "subcomment_profile_image": "assets/avatar68-sm.jpg",
          "subcomment_user": "Michael Reeves",
          "subcomment_hours_back": "17 minutes ago",
          "subcomment_lines": "Commented by the user Michael Reevs"
        }
      },
      {
        "comment_profile_image": "assets/avatar69-sm.jpg",
        "comment_user": "William Reeves",
        "comment_hours_back": "11 minutes ago",
        "comment_lines": "Commented by the user William Reevs",
        "subcomments": {
          "subcomment_profile_image": "assets/avatar62-sm.jpg",
          "subcomment_user": "Melanie Jacyln",
          "subcomment_hours_back": "10 minutes ago",
          "subcomment_lines": "Commented by the user Jacyln Melanie"
        }
      }]
  },
  {
    "type": "2",
    "user": "Vamsi Katari",
    "profile_image": "assets/Profileimage.png",
    "hours_back": "18 hours ago",
    "post_title": "Video Captured by My Friend",
    "post_source": "assets/movie.mp4",
    "no_of_likes": "7",
  }
  ]
 
  getPostCard() {
    return this.http.get('https://project-dileep.firebaseio.com/Postcard.json').pipe(
      map(
        (response: Response) => {
          const data: any = response;
          return data;
        }
      ), catchError(
        (error: Response) => {
          return Observable.throw('Something went wrong');
        }
      )
    );
  }
  }