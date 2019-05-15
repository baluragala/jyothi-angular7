import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Course } from "../course.interface";

@Component({
  selector: "oc-item",
  templateUrl: "./item.component.html",
  styleUrls: ["./item.component.css"]
})
export class ItemComponent implements OnInit {
  @Input()
  course: Course;

  @Output()
  favourite: EventEmitter<Course> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  setFavourite() {
    this.favourite.emit(this.course);
  }
}
