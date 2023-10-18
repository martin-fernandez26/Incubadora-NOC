import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-profesors-personal-data',
  templateUrl: './profesors-personal-data.component.html',
  styleUrls: ['./profesors-personal-data.component.css']
})
export class ProfesorsPersonalDataComponent implements OnInit {
  constructor(private http: HttpClient) { }
  imageSrc: string | ArrayBuffer | null = null;
  data: any;
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() { }



  profesor: any = {}; // Objeto vacío para almacenar los datos del profesor

  ngOnInit(): void {
    this.fetchProfesorData(); // Llama a la función para recuperar los datos del profesor
  }

  fetchProfesorData(): void {
    this.http.get<any>(`http://localhost:4001/profesors/getProfesorById/${4}`)// Reemplaza la URL con tu endpoint real
      .subscribe((data) => {
        this.profesor = data; // Asigna los datos recibidos del backend a la propiedad user
      }, (error) => {
        console.log('Error al obtener datos del profesor desde el backend: ', error);
      });
  }

  sendDataModificProfesor(data: any) {
    this.http.put<any>('http://localhost:4001/profesors/editProfesor', data) // Reemplaza tu-ruta con la ruta correspondiente en tu backend
      .subscribe((response) => {
        console.log('Respuesta del backend:', response);
      }, (error) => {
        console.error('Error al enviar datos al backend:', error);
      });
  }
}
