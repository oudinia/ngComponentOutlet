import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewZelandComponent } from './new-zeland.component';

describe('NewZelandComponent', () => {
  let component: NewZelandComponent;
  let fixture: ComponentFixture<NewZelandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewZelandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewZelandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
