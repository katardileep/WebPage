import { Observable } from "rxjs";
import { Component } from "@angular/core";
import { Services } from "../services";

@Component({
  selector: "app-child3",
  templateUrl: "./child3.html"
})
export class ChildComponent3 {
  title = "CodeSandbox";

  constructor(private Services2: Services) {
    this.Services2.subjectobservable.subscribe((v: string) => {
      this.title = v;
      console.log(v);
      console.log("asdfghjkl");
    });
  }

  service2value() {}
}
