import { Component } from "@angular/core";

@Component({
  selector: "oc-header",
  template: `
    <header>
      <h1>Online Courses</h1>
      <oc-nav></oc-nav>
    </header>
  `,
  styles: [
    `
      h1 {
        color: crimson;
      }
    `
  ]
})
export class HeaderComponent {}
