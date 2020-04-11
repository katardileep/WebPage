import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PostserviceService } from "../postservice.service";

@Component({
  selector: 'app-wallpaper',
  templateUrl: './wallpaper.component.html',
  styleUrls: ['./wallpaper.component.css']
})
export class WallpaperComponent implements OnInit {
  profile_image = 'assets/Profileimage.png';

  constructor(private PostserviceService: PostserviceService) { 
    this.PostserviceService.subjectobservable.subscribe((v: string) => {
      this.profile_image = v;
//    console.log(v);
//    console.log("zxcvbnm");
  });
}

  ngOnInit() {
  }

}
