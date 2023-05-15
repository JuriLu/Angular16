import {Component, computed, effect, signal} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AnotherOneComponent} from './another-one/another-one.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {OrderListModule} from "primeng/orderlist";
import {AccordionModule} from "primeng/accordion";
import {FieldsetModule} from "primeng/fieldset";
import {DividerModule} from "primeng/divider";
import {SplitButtonModule} from "primeng/splitbutton";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AnotherOneComponent,
    RouterOutlet,
    RouterLink,
    CardModule,
    ButtonModule,
    OrderListModule,
    AccordionModule,
    FieldsetModule,
    DividerModule,
    SplitButtonModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'Testtest'
  firstName = signal('Jane');
  lastName = signal('Doe');

  ArrayOfNames = signal(['Adam', 'Bravo', 'Charlie'])

  elArray = computed(() => this.ArrayOfNames())
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
    effect(() => console.log('Name changed:', this.fullName()));
    effect(() => console.log('Element changed:', this.elArray()))
    console.log(this.elArray())
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }

  setLastName(newLast: string) {
    this.lastName.update(value => value.replace(value, newLast))
  }

  delEl(index: number) {
    this.ArrayOfNames.update(value => {
      const arr = value

      arr.splice(index, 1)
      return arr
    })
  }


}
