import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  public aliment: string = 'Aliment';

  constructor(private panierService: PanierService) { }

  ngOnInit() {
  }

  add(): void {
    this.panierService.add(this.aliment);
    this.aliment = '';
    console.log(this.panierService.panier)
  }
}
