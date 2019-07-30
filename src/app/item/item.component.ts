import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input('f') public fruit: string;
  @Output() public deleteF: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
emitFruit() {
  this.deleteF.emit(this.fruit);
}
}
