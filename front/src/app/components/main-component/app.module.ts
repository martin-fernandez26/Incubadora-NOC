import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from '../formulario-registro/formulario-registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { LoginComponent } from '../login/login.component';
import { StudentsComponent } from '../students/students/students.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentsPersonalDataComponent } from '../students/students-personal-data/students-personal-data.component';
import { StudentsCoursesComponent } from '../students/students-courses/students-courses.component';
import { LayoutComponent } from '../students/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { WelcomeStudentComponent } from '../students/welcome-student/welcome-student.component';
import { FormularioProfesorComponent } from '../formulario-profesor/formulario-profesor.component';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';
import { MatTableModule } from '@angular/material/table';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfesorsComponent } from '../profesors/profesors/profesors.component';
import { LayoutProfComponent } from '../profesors/layout-prof/layout-prof.component';
import { AdmiComponent } from '../administrador/admi/admi.component';
import { LayoutAdmiComponent } from '../administrador/layout-admi/layout-admi.component';
import { AdmiApplicationComponent } from '../administrador/admi-application/admi-application.component';
import { MatTableModule } from '@angular/material/table';
import { ProfesorsCoursesComponent } from '../profesors/profesors-courses/profesors-courses.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    LoginComponent,
    StudentsComponent,
    StudentsPersonalDataComponent,
    StudentsCoursesComponent,
    LayoutComponent,
    ProfesorsComponent,
    ProfesorsCoursesComponent,
    LayoutProfComponent,
    AdmiComponent,
    AdmiApplicationComponent,
    LayoutAdmiComponent,
    PaginaPrincipalComponent,
    WelcomeStudentComponent,
    FormularioProfesorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatNativeDateModule,
    MatCardModule,
    NgbModule,
    MatSidenavModule,
    MatToolbarModule,
    HttpClientModule,
    MatSnackBarModule,
    MatOptionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
