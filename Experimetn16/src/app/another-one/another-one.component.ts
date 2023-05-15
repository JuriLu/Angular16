import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-another-one',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, RouterLink],
  templateUrl: './another-one.component.html',
  styleUrls: ['./another-one.component.scss']
})
export class AnotherOneComponent {
  @Input({required:true}) title!:string

  constructor(){
    console.log(this.title)
  }

}
