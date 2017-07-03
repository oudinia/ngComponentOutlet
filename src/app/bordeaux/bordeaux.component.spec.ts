import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BordeauxComponent } from './bordeaux.component';

describe('BordeauxComponent', () => {
  let component: BordeauxComponent;
  let fixture: ComponentFixture<BordeauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BordeauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BordeauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
