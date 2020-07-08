import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarfansyndromeComponent } from './marfansyndrome.component';

describe('MarfansyndromeComponent', () => {
  let component: MarfansyndromeComponent;
  let fixture: ComponentFixture<MarfansyndromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarfansyndromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarfansyndromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
