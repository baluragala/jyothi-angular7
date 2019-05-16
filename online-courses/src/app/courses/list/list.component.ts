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
        title: " python ",
        author: "Jose Portilla",
        duartion: 24,
        price: 200,
        category: "Programming Languages",
        isPublished: true
      },
      {
        id: 2,
        title: "loopback",
        author: "Colt Steele",
        duartion: 40,
        price: 150,
        category: "Programming Languages",
        isPublished: false
      },
      {
        id: 3,
        title: "Angular 7",
        author: "Jose Portilla",
        duartion: 24,
        price: 200,
        category: "Programming Languages",
        isPublished: true
      },
      {
        id: 4,
        title: "React 16",
        author: "Jose Portilla",
        duartion: 24,
        price: 200,
        category: "Programming Languages",
        isPublished: true
      },
      {
        id: 3,
        title: "Vue js",
        author: "Jose Portilla",
        duartion: 24,
        price: 200,
        category: "Programming Languages",
        isPublished: false
      },
      {
        id: 3,
        title: "Nest.js",
        author: "Jose Portilla",
        duartion: 24,
        price: 200,
        category: "Programming Languages",
        isPublished: true
      }
    ];
  }

  onFavourite(course: Course) {
    alert(course.title);
  }
}
