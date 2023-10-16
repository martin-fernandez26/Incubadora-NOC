import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorsPersonalDataComponent } from './profesors-personal-data.component';

describe('ProfesorsPersonalDataComponent', () => {
  let component: ProfesorsPersonalDataComponent;
  let fixture: ComponentFixture<ProfesorsPersonalDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorsPersonalDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorsPersonalDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
