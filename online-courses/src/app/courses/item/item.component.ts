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

  SYMBOL = "CAD";

  @Input()
  extras: any;

  @Output()
  favourite: EventEmitter<Course> = new EventEmitter();

  styles = { color: "purple", "font-weight": "bold" };

  constructor() {}

  ngOnInit() {}

  setFavourite() {
    this.favourite.emit(this.course);
  }
}
