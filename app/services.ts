import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";
import { Services2 } from "./services2";

@Injectable()
export class Services {
  newvalue: string = "lol";

  subjectobservable = new Subject();

  constructor(public Services2: Services2) {}

  onlyObservable() {
    return new Observable(observer => {
      setTimeout(() => observer.next("hello Root, from Observable!"), 2000);
      setTimeout(() => observer.next("hello Root, from Observable!111"), 4000);
      setTimeout(() => observer.next("hello Root, from Observable!2222"), 6000);
    });

    // observable.subscribe(v => console.log(v));
  }

  service2val(val) {
    this.Services2.newvalue2 = val;
    console.log(this.Services2.newvalue2);
  }
}
