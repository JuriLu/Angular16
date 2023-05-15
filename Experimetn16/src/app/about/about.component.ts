import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccordionModule} from "primeng/accordion";
import {FieldsetModule} from "primeng/fieldset";
import {CardModule} from "primeng/card";
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {StyleClassModule} from "primeng/styleclass";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, AccordionModule, FieldsetModule, CardModule, ButtonModule, RouterLink, StyleClassModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

}
