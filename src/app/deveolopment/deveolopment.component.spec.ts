import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveolopmentComponent } from './deveolopment.component';

describe('DeveolopmentComponent', () => {
  let component: DeveolopmentComponent;
  let fixture: ComponentFixture<DeveolopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveolopmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveolopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
