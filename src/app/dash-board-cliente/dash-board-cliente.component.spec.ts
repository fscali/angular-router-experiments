import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardClienteComponent } from './dash-board-cliente.component';

describe('DashBoardClienteComponent', () => {
  let component: DashBoardClienteComponent;
  let fixture: ComponentFixture<DashBoardClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
