import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalaxiesComponent } from './galaxies.component';

describe('GalaxiesComponent', () => {
  let component: GalaxiesComponent;
  let fixture: ComponentFixture<GalaxiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalaxiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalaxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
