import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhenylketonuriaComponent } from './phenylketonuria.component';

describe('PhenylketonuriaComponent', () => {
  let component: PhenylketonuriaComponent;
  let fixture: ComponentFixture<PhenylketonuriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhenylketonuriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhenylketonuriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
