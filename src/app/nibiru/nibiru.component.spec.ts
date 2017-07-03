import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NibiruComponent } from './nibiru.component';

describe('NibiruComponent', () => {
  let component: NibiruComponent;
  let fixture: ComponentFixture<NibiruComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NibiruComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NibiruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
