import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SequenceGetComponent } from './sequence-get.component';

describe('SequenceGetComponent', () => {
  let component: SequenceGetComponent;
  let fixture: ComponentFixture<SequenceGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SequenceGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SequenceGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
