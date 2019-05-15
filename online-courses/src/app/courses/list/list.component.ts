import { Component, OnInit } from "@angular/core";
import { Course } from "../course.interface";

@Component({
  selector: "oc-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  courses: Array<Course> = [];
  constructor() {}

  ngOnInit() {
    this.courses = [
      {
        id: 1,
        title: "Complete python Bootcamp",
        author: "Jose Portilla",
        duartion: 24,
        price: 200,
        category: "Programming Languages"
      },
      {
        id: 2,
        title: "The web Developer Bootcamp",
        author: "Colt Steele",
        duartion: 40,
        price: 150,
        category: "Programming Languages"
      },
      {
        id: 3,
        title: "Angular 7",
        author: "Jose Portilla",
        duartion: 24,
        price: 200,
        category: "Programming Languages"
      }
    ];
  }

  onFavourite(course: Course) {
    alert(course.title);
  }
}
