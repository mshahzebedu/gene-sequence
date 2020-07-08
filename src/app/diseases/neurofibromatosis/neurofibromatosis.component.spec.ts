import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeurofibromatosisComponent } from './neurofibromatosis.component';

describe('NeurofibromatosisComponent', () => {
  let component: NeurofibromatosisComponent;
  let fixture: ComponentFixture<NeurofibromatosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeurofibromatosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeurofibromatosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
