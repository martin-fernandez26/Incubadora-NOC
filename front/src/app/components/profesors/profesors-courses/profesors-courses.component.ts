
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profesors-courses',
  templateUrl: './profesors-courses.component.html',
  styleUrls: ['./profesors-courses.component.css'],
})
export class ProfesorsCoursesComponent implements OnInit {


  constructor() { }

  dataSource = [
    { name: 'Curso 3', fechaInicio: '2023-10-25', alumnos: 20, modalidad: 'Presencial', progreso: 75},
    { name: 'Curso 4', fechaInicio: '2023-10-30', alumnos: 25, modalidad: 'Virtual',  progreso: 55 },
    { name: 'Curso 5', fechaInicio: '2023-11-21', alumnos: 25, modalidad: 'Virtual', progreso: 90 },
    // Agrega más datos según sea necesario
  ];

  imageSrc: string | ArrayBuffer | null = null;
  curso = {
    nombre: '',
    fechaInicio: ''
  };
  procesar() {
    console.log(this.curso)
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() { }
  ngOnInit(): void {
  }


}
