import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { It255Component } from './it255.component';

describe('It255Component', () => {
  let component: It255Component;
  let fixture: ComponentFixture<It255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ It255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(It255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
