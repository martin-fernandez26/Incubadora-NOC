import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from '../students/layout/layout.component';
import { ProfesorsComponent } from './profesors/profesors.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { ProfesorsCoursesComponent } from './profesors-courses/profesors-courses.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ProfesorsPersonalDataComponent } from './profesors-personal-data/profesors-personal-data.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ProfesorsComponent,
    ProfesorsCoursesComponent,
    ProfesorsPersonalDataComponent,
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    FormsModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class ProfesorsModule { }
