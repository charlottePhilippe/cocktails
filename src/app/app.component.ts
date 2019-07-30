import { Component, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public fruit: string;
  public fruits: string[] = [];
  title = 'cocktails';
@ViewChild('f') public el: ElementRef;
  constructor() { }

  deleteFruit(fruit: string) {
    this.fruits.splice(this.fruits.indexOf(fruit), 1);
  }
  addFruit() {
   this.fruits.push(this.el.nativeElement.value);
  }
}

 
 
