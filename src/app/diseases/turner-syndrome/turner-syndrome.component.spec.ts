import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnerSyndromeComponent } from './turner-syndrome.component';

describe('TurnerSyndromeComponent', () => {
  let component: TurnerSyndromeComponent;
  let fixture: ComponentFixture<TurnerSyndromeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TurnerSyndromeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TurnerSyndromeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
