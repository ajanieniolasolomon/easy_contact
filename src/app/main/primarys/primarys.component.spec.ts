import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarysComponent } from './primarys.component';

describe('PrimarysComponent', () => {
  let component: PrimarysComponent;
  let fixture: ComponentFixture<PrimarysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimarysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
