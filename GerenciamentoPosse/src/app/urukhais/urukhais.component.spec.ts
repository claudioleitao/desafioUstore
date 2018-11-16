import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrukhaisComponent } from './urukhais.component';

describe('UrukhaisComponent', () => {
  let component: UrukhaisComponent;
  let fixture: ComponentFixture<UrukhaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrukhaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrukhaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
