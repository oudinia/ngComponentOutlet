import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranceComponent } from './france.component';

describe('FranceComponent', () => {
  let component: FranceComponent;
  let fixture: ComponentFixture<FranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
