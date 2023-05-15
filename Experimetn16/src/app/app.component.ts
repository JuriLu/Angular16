import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>Hello</h1>
  {{ fullName() }} 
  <button (click)="setName('John')">Click First</button>
  <button (click)="setLastName('Walker')">Click Last</button>
  <ul >
    <li>test</li>
    <li 
    *ngFor="let el of elArray();let i = index">{{el}}
    <button (click)="delEl(i)">Del Element {{i}}</button>
  </li>
  </ul>
`,  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  firstName = signal('Jane');
  lastName = signal('Doe');

  ArrayOfNames = signal(['Adam','Bravo','Charlie'])

  elArray = computed(()=> this.ArrayOfNames())
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  constructor() {
    effect(() => console.log('Name changed:', this.fullName()));
    effect(() => console.log('Name changed:', this.fullName()));
    effect(()=>console.log('Element changed:', this.elArray()))
    console.log(this.elArray())
  }

  setName(newName: string) {
    this.firstName.set(newName);
  }

  setLastName(newLast:string){
    this.lastName.update(value => value.replace(value,newLast))
  }

  delEl(index:number){
    this.ArrayOfNames.update(value => {
      const arr = value
      
     arr.splice(index,1)
      return arr
    })
  }
  

}
