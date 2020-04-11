import { Component, OnInit, Input } from '@angular/core';
import { PostserviceService } from './../postservice.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  public Postcard;
  constructor(private postservice: PostserviceService) {}
  
  ngOnInit() {
    this.Postcard=this.onGet();
  }
  
  onGet() {
    this.postservice.getPostCard()
      .subscribe(
        (Postcard:any) => this.Postcard = Postcard,
        (error) => console.log(error)
      );
  }
}
