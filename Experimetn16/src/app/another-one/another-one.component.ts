import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-another-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './another-one.component.html',
  styleUrls: ['./another-one.component.scss']
})
export class AnotherOneComponent {
  @Input({required:true}) title!:string 

  constructor(){
    console.log(this.title)
  }

}
