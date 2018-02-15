import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componete2Component } from './componete2.component';

describe('Componete2Component', () => {
  let component: Componete2Component;
  let fixture: ComponentFixture<Componete2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componete2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componete2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
