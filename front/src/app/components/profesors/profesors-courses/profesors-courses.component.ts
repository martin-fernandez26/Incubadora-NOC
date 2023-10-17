
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-profesors-courses',
  templateUrl: './profesors-courses.component.html',
  styleUrls: ['./profesors-courses.component.css'],
})
export class ProfesorsCoursesComponent implements OnInit {
  dataSource: any[] = []; //para la tabla
  imageSrc: string | ArrayBuffer | null = null; //para la imagen 
  newCourse: any = {}; // para agregar un curso
  
  constructor(private http: HttpClient) {}



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
    this.http.post('http://localhost:4001/courses/addCourse', this.newCourse)
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
  // traemos los datos para la tabla 
  fetchDataCourse(): void {
    const maxItems = 5;
    this.http.get<any[]>('http://localhost:4001/cursos/getAll')
      .pipe(
        map(data => data.slice(0, maxItems))
      )
      .subscribe(
        (data) => {
          this.dataSource = data;
        },
        (error) => {
          console.log('Error al obtener datos desde el backend: ', error);
        }
      );
  }
  ngOnInit(): void {
    this.fetchDataCourse();
  }


}
