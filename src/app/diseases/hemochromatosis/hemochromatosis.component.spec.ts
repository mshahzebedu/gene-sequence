import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HemochromatosisComponent } from './hemochromatosis.component';

describe('HemochromatosisComponent', () => {
  let component: HemochromatosisComponent;
  let fixture: ComponentFixture<HemochromatosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HemochromatosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HemochromatosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
