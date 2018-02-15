import { Component, OnInit } from '@angular/core';
import { IncrementService } from '../service/increment.service';

@Component({
  selector: 'app-componete1',
  templateUrl: './componete1.component.html',
  styleUrls: ['./componete1.component.css']
})
export class Componete1Component implements OnInit {

  constructor(private incrementService : IncrementService) { }

  ngOnInit() {
  }

  public incrementar(){
    console.log('metodo incrementar');
    this.incrementService.incrementValue();
  }
}
