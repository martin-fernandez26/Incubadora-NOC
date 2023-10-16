import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-profesors',
  templateUrl: './profesors.component.html',
  styleUrls: ['./profesors.component.css']
})
export class ProfesorsComponent implements OnInit {
  
  selected: Date | null;
  

  user = {
    nombreCompleto: 'Marcelo Juarez',
    email: 'marcelo1534@gmail.com', 
    gender: 'Masculino',
    username: 'marcelo265',
    profileImage: '',
  };

  coments = [
    {
      "id": 1,
      "title": "Duda de contenido",
      "fecha": "2023-10-14",
      "description": "Tengo una duda sobre el contenido del seminario de .....",
    },
    {
      "id": 2,
      "title": "Duda sobre el material",
      "fecha": "2023-10-10",
      "description": "Tengo una duda sobre el material para el cursado presencial ",
    },
    {
      "id": 3,
      "title": "Duda del pago del seminario",
      "fecha": "2023-10-09",
      "description": "Tengo una duda sobre el pago del seminario, cuantos dias antes de la fecha de inicio se puede realizar?",
    }
  ];

  courses: any[] = [];

  constructor(private http: HttpClient){
    this.selected = null;
  }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:4001/cursos/getAll') 
    .subscribe((data) => {
      this.courses = data;
    },
    (error) => {
      console.log('Error al obtener cursos: ', error);
    }
    );


  }

  imageSrc: string | ArrayBuffer | null = null;

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() {}
}
