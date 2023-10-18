import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAdmiComponent } from './layout-admi.component';

describe('LayoutAdmiComponent', () => {
  let component: LayoutAdmiComponent;
  let fixture: ComponentFixture<LayoutAdmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutAdmiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutAdmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
