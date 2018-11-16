import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnagasComponent } from './snagas.component';

describe('SnagasComponent', () => {
  let component: SnagasComponent;
  let fixture: ComponentFixture<SnagasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnagasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnagasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
