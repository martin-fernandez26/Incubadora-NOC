import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiApplicationComponent } from './admi-application.component';

describe('AdmiApplicationComponent', () => {
  let component: AdmiApplicationComponent;
  let fixture: ComponentFixture<AdmiApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
