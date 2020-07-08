import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaySachsDiseaseComponent } from './tay-sachs-disease.component';

describe('TaySachsDiseaseComponent', () => {
  let component: TaySachsDiseaseComponent;
  let fixture: ComponentFixture<TaySachsDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaySachsDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaySachsDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
