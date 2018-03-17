import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaClienteComponent } from './ricerca-cliente.component';

describe('RicercaClienteComponent', () => {
  let component: RicercaClienteComponent;
  let fixture: ComponentFixture<RicercaClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RicercaClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RicercaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
