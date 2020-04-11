import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displaystring = "Dileep"
  title = 'Angular 4 Project!';
  // declared array of months.
  months = ["January", "Feburary", "March", "April", "May",
    "June", "July", "August", "September",
    "October", "November", "December"];
  myClickFunction(event) {
    //just added console.log which will display the event details in browser on click of the button.
    alert("Button is clicked");
    console.log(event);
  }
}
