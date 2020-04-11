import { Component, OnInit } from '@angular/core';
import { PostserviceService } from '../postservice.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private PostserviceService: PostserviceService) { }
  onlyObservable() {
    this.PostserviceService.subjectobservable.next("assets/avatar68-sm.jpg");
  }

  ngOnInit() {
  }
  displaystring="Dileep"

  sampleclick() {
    console.log(event);
  }
}
