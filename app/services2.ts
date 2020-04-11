import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";

// @Injectable()
export class Services2 {
  newvalue2: string = "service222";

  subjectobservable2 = new Subject();

  constructor() {}

//   onlyObservable() {
//     return new Observable(observer => {
//       setTimeout(() => observer.next("hello Root, from Observable 2!"), 2000);
//     });

    // observable.subscribe(v => console.log(v));
  }
