import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListComponent } from "./list/list.component";
import { ItemComponent } from "./item/item.component";
import { DiscountPipe } from "../discount.pipe";
import { NewComponent } from "./new/new.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewReactiveComponent } from "./new-reactive/new-reactive.component";

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    DiscountPipe,
    NewComponent,
    NewReactiveComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ListComponent, NewComponent, NewReactiveComponent]
})
export class CoursesModule {}
