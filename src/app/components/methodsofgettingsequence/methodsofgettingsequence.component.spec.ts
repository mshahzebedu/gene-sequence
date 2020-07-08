import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MethodsofgettingsequenceComponent } from './methodsofgettingsequence.component';

describe('MethodsofgettingsequenceComponent', () => {
  let component: MethodsofgettingsequenceComponent;
  let fixture: ComponentFixture<MethodsofgettingsequenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MethodsofgettingsequenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MethodsofgettingsequenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
