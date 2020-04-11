import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { PostserviceService } from "../postservice.service";

@Component({
  selector: 'app-postcard1',
  templateUrl: './postcard1.html',
  styleUrls: ['./postcard1.css']
})
export class Postcard1Component implements OnInit {

  constructor(private PostserviceService: PostserviceService) { 
    this.PostserviceService.subjectobservable.subscribe((v: string) => {
      this.test1.profile_image = v;
//    console.log(v);
//    console.log("zxcvbnm");
  });
  }
  @Input() test1;

  ngOnInit() {
  }

}
