import { Component, OnInit } from '@angular/core';
import { PanierService } from '../shared/services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panier: string[];
  constructor(private panierService: PanierService) { }

  ngOnInit() {
    this.panier = this.panierService.panier;
  }
remove(index: number) {
  this.panierService.removeAliment(index);
}

}
