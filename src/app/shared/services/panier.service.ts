import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })

export class PanierService {
    public panier: string[] = [];
    constructor() {}
}