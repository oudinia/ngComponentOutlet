import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrillionGalaxiesComponent } from './trillion-galaxies.component';

describe('TrillionGalaxiesComponent', () => {
  let component: TrillionGalaxiesComponent;
  let fixture: ComponentFixture<TrillionGalaxiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrillionGalaxiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrillionGalaxiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
