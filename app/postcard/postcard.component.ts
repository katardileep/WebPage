import { Component, OnInit, Input } from '@angular/core';
import { Observable } from "rxjs";
import { PostserviceService } from "../postservice.service";


@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.css']
})
export class PostcardComponent implements OnInit {
  constructor(private PostserviceService: PostserviceService) { 
    this.PostserviceService.subjectobservable.subscribe((v: string) => {
      this.test1.profile_image = v;
//    console.log(v);
//    console.log("zxcvbnm");
  });
  }
 @Input() test1;

  //myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    //alert("Button is clicked");
    //console.log(this.test);
  //}
  ngOnInit() {
  }

}
