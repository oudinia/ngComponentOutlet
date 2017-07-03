import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimulatedRealityComponent } from './simulated-reality.component';

describe('SimulatedRealityComponent', () => {
  let component: SimulatedRealityComponent;
  let fixture: ComponentFixture<SimulatedRealityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimulatedRealityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimulatedRealityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
