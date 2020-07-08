import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorblindnessComponent } from './colorblindness.component';

describe('ColorblindnessComponent', () => {
  let component: ColorblindnessComponent;
  let fixture: ComponentFixture<ColorblindnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorblindnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorblindnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
