import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallelEarthComponent } from './parallel-earth.component';

describe('ParallelEarthComponent', () => {
  let component: ParallelEarthComponent;
  let fixture: ComponentFixture<ParallelEarthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParallelEarthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallelEarthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
