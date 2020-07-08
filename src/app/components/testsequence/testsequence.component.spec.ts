import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsequenceComponent } from './testsequence.component';

describe('TestsequenceComponent', () => {
  let component: TestsequenceComponent;
  let fixture: ComponentFixture<TestsequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
