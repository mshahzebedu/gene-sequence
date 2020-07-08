import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CysticFibrosisComponent } from './cystic-fibrosis.component';

describe('CysticFibrosisComponent', () => {
  let component: CysticFibrosisComponent;
  let fixture: ComponentFixture<CysticFibrosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CysticFibrosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CysticFibrosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
