import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelvaComponent } from './selva.component';

describe('SelvaComponent', () => {
  let component: SelvaComponent;
  let fixture: ComponentFixture<SelvaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelvaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelvaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
