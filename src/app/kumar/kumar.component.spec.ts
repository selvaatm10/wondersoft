import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KumarComponent } from './kumar.component';

describe('KumarComponent', () => {
  let component: KumarComponent;
  let fixture: ComponentFixture<KumarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KumarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KumarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
