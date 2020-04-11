import { Observable } from "rxjs";
import { Component } from "@angular/core";
import { Services } from "../services";

@Component({
  selector: "app-child",
  templateUrl: "./child.html"
})
export class ChildComponent {
  title = "";
  title2 = "";

  constructor(private Services: Services) {
    this.Services.subjectobservable.subscribe((v: string) => {
        this.title = v;
  //    console.log(v);
  //    console.log("zxcvbnm");
    });
    // this.title2 = this.Services.newvalue;
  }

  onlyObservable() {
    this.Services.subjectobservable.next("This is from child 1");
    // this.Services.onlyObservable().subscribe(g => {
    //   console.log(g);
    //   console.log("testing");
    // });
  }

  service2() {
    this.Services.service2val("from child1");
  }
}
