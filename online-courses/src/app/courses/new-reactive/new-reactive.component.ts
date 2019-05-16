import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "oc-new-reactive",
  templateUrl: "./new-reactive.component.html",
  styleUrls: ["./new-reactive.component.css"]
})
export class NewReactiveComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit() {
    this.form = new FormGroup({
      title: new FormControl("expressjs", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      author: new FormControl(),
      isPublished: new FormControl()
    });

    console.log(this.form);
  }

  saveCourse() {
    console.log(this.form.value);
  }
}
