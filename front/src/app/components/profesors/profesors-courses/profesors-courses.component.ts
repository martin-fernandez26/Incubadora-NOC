
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormGroup , FormBuilder, Validators } from "@angular/forms";
// Interfaz para definir la estructura de los elementos en el dataSource
export interface Curso {
  nombre: string;
  fechaInicio: string;
  alumnos: number;
  modalidad: string;
  progreso: number;
}


@Component({
  selector: 'app-profesors-courses',
  templateUrl: './profesors-courses.component.html',
  styleUrls: ['./profesors-courses.component.css'],
})
export class ProfesorsCoursesComponent implements OnInit {
  // Aquí definimos los datos que se mostrarán en la tabla
  dataSource: Curso[] = [
    {nombre: 'Curso 1', fechaInicio: '2023-01-01', alumnos: 30, modalidad: 'Presencial', progreso: 0},
    {nombre: 'Curso 2', fechaInicio: '2023-02-01', alumnos: 25, modalidad: 'Virtual', progreso: 25},
    {
      "nombre": "Manicura",
      "fechaInicio": "2023-10-10",
      "alumnos" : 10,
      "modalidad": "presencial",
      "progreso": 55,
  },
  {
      "nombre": "Seminario de Lenceria",
      "fechaInicio": "2023-10-16",
      "alumnos" : 10,
      "modalidad": "virtual",
      "progreso": 55,
  },
  {
      "nombre": "Sublimacion",
      "fechaInicio": "2023-10-23",
      "alumnos" : 10,
      "modalidad": "virtual",
      "progreso": 55,
  },
  {
      "nombre": "Seminario de velas",
      "fechaInicio": "2023-10-15",
      "alumnos" : 10,
      "modalidad": "virtual",
      "progreso": 55,
  },
  {
      "nombre": "Taller de Diseño y reciclaje",
      "fechaInicio": "2023-10-25",
      "alumnos" : 15,
      "modalidad": "virtual",
      "progreso": 55,
  },
  {
      "nombre": "Masajes",
      "fechaInicio": "2023-10-16",
      "alumnos" : 18,
      "modalidad": "presencial",
      "progreso": 55,
  },
  {
      "nombre": "Taller de costura",
      "fechaInicio": "2023-10-10",
      "alumnos" : 10,
      "modalidad": "virtual",
      "progreso": 55,
  }
    // Agrega más objetos según tus necesidades
  ];

  // Definimos las columnas que se mostrarán en la tabla
  columnas: string[] = ['nombre', 'fechaInicio', 'alumnos', 'modalidad', 'progreso'];
  
  imageSrc: string | ArrayBuffer | null = null; //para la imagen 
  newCourse: any = {}; // para agregar un curso
  myCurso!: FormGroup;
  constructor(private http: HttpClient, private formBuilder: FormBuilder) {

  }



  // subir una imagen
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() { }
  // agregar un curso
  
  addCourse(): void {
    if (this.myCurso.valid) {
      const formData = this.myCurso.value;
     
      const datosEnviar= {
        img: formData.img,
        nombre: formData.nombre,
        fechaInicio: formData.fechaInicio,
        duracion: formData.duracion,
        precio: formData.precio,
        descripcion: formData.descripcion,  
      }
      this.http.post('http://localhost:4001/cursos/createCurso', datosEnviar)
      .subscribe(
        (data) => {
          console.log('Curso agregado con éxito: ', data);
          // Realiza alguna lógica adicional después de agregar el curso si es necesario
        },
        (error) => {
          console.log('Error al agregar el curso: ', error);
        }
      );
    }
    
  }
  // traemos los datos para la tabla 
  // fetchDataCourse(): void {
  //   const maxItems = 5;
  //   this.http.get<any[]>('http://localhost:4001/cursos/getAll')
  //     .pipe(
  //       map(data => data.slice(0, maxItems))
  //     )
  //     .subscribe(
  //       (data) => {
  //         this.dataSource = data;
  //         console.log(data)
  //       },
  //       (error) => {
  //         console.log('Error al obtener datos desde el backend: ', error);
  //       }
  //     );
  // }
  ngOnInit(): void {
    // this.fetchDataCourse();
    this.myCurso = this.formBuilder.group({
      nombre: ['', Validators.required],
      fechaInicio: ['', Validators.required],
      duracion: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', [Validators.required, Validators.minLength(100), Validators.maxLength(300)]],
    });
  }

  
}
