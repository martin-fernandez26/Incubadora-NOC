import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorsCoursesComponent } from './profesors-courses.component';

describe('ProfesorsCoursesComponent', () => {
  let component: ProfesorsCoursesComponent;
  let fixture: ComponentFixture<ProfesorsCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfesorsCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfesorsCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
