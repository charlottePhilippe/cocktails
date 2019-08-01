import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
    providedIn: 'root'
  })

export class PanierService {
    public panier: string[] = [];
    constructor(private logService: LogService) {}

    add(aliment: string): void {
      this.panier.push(aliment);
      this.logService.log("New aliment");
    }

    removeAliment(index: number) {
      this.panier.splice(index,1);
      this.logService.log("Remove aliment");
    }
}