import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaemophiliaComponent } from './haemophilia.component';

describe('HaemophiliaComponent', () => {
  let component: HaemophiliaComponent;
  let fixture: ComponentFixture<HaemophiliaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaemophiliaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaemophiliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
