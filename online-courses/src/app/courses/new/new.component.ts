import { Component, OnInit } from "@angular/core";

@Component({
  selector: "oc-new",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  title: string;
  author: string;
  isPublished: boolean;

  constructor() {}

  ngOnInit() {}

  saveCourse() {
    console.log(this);
  }
}
