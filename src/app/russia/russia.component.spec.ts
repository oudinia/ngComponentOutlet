import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RussiaComponent } from './russia.component';

describe('RussiaComponent', () => {
  let component: RussiaComponent;
  let fixture: ComponentFixture<RussiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RussiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RussiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
