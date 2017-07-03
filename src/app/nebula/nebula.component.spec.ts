import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebulaComponent } from './nebula.component';

describe('NebulaComponent', () => {
  let component: NebulaComponent;
  let fixture: ComponentFixture<NebulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
