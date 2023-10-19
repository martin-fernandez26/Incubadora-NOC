import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


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
import { ProfesorsPersonalDataComponent } from './profesors-personal-data/profesors-personal-data.component';
import { MatSelectModule } from '@angular/material/select';
import { LayoutProfComponent } from './layout-prof/layout-prof.component';
import { RouterModule} from '@angular/router';
import { MatOptionModule } from '@angular/material/core';

@NgModule({
  declarations: [
    ProfesorsComponent,
    ProfesorsCoursesComponent,
    ProfesorsPersonalDataComponent,
    LayoutProfComponent
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
    MatSelectModule,
    RouterModule,
    MatOptionModule,
  ]
})
export class ProfesorsModule { }
