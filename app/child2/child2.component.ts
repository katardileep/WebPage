import { Observable } from "rxjs";
import { Component } from "@angular/core";
import { Services } from "../services";

@Component({
  selector: "app-child2",
  templateUrl: "./child2.html"
})
export class ChildComponent2 {
  title = "CodeSandbox";

  constructor(private Services: Services) {}

  onlyObservable() {
    this.Services.subjectobservable.next("This is from child 2");
    setTimeout(() => this.Services.subjectobservable.next("This is from child 21"), 2000);
  }
  staticservice() {
    this.Services.newvalue = "new value from child 2";
    console.log("sdf", this.Services.newvalue);
  }

  service2() {
    this.Services.service2val("from child2");
  }
}
