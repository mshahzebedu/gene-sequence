import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SickleCellAnemiaComponent } from './sickle-cell-anemia.component';

describe('SickleCellAnemiaComponent', () => {
  let component: SickleCellAnemiaComponent;
  let fixture: ComponentFixture<SickleCellAnemiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SickleCellAnemiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SickleCellAnemiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
