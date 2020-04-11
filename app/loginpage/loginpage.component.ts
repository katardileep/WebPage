import { Component, OnInit } from '@angular/core';
// import { Response } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";
import { PostserviceService } from './../postservice.service';
@Injectable()

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  constructor(private PostserviceService: PostserviceService , private http: HttpClient) { }

  onSave() {
    this.storeServers(this.PostserviceService.Postcard1)
      .subscribe(
        (response) => console.log(response),//
       (error) => console.log(error)
      );
  }
  storeServers(Postcard1: any[]) {
    const headers = new HttpHeaders({'Content-Type': 'application/xml'});
    // return this.http.post('https://butterswap-206108.firebaseio.com/data.json',
    //   servers,
    //   {headers: headers});
    console.log(Postcard1);
    return this.http.put('https://project-dileep.firebaseio.com/Postcard.json',
    Postcard1,
      {headers: headers});
  }
  
  ngOnInit() {
  }

}
