import { Injectable } from '@angular/core';

@Injectable()
export class IncrementService {
  
  contador : number = 0;
  
  constructor() { }

  public incrementValue(){
    console.log('Contador aumentando');
    this.contador++;
  }
}
