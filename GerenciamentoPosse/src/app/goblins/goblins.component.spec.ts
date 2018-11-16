import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoblinsComponent } from './goblins.component';

describe('GoblinsComponent', () => {
  let component: GoblinsComponent;
  let fixture: ComponentFixture<GoblinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoblinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoblinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
