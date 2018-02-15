import { Component, OnInit } from '@angular/core';
import { IncrementService } from '../service/increment.service';

@Component({
  selector: 'app-componete2',
  templateUrl: './componete2.component.html',
  styleUrls: ['./componete2.component.css']
})
export class Componete2Component implements OnInit {

  constructor(private incrementService : IncrementService) { }

  ngOnInit() {
  }

}
