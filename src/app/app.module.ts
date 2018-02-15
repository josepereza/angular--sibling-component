import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { Componete1Component } from './componete1/componete1.component';
import { Componete2Component } from './componete2/componete2.component';
import { IncrementService } from './service/increment.service';


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    Componete1Component,
    Componete2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [IncrementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
