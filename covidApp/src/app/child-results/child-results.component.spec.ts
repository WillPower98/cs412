import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildResultsComponent } from './child-results.component';

describe('ChildResultsComponent', () => {
  let component: ChildResultsComponent;
  let fixture: ComponentFixture<ChildResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
