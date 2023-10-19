import { Component, OnInit } from '@angular/core';
export interface tableComprobante {
  nombre: string;
  nmbreUsuario: string;
  curso: string;
  fechaInicio: string;
  precio: number;
}
@Component({
  selector: 'app-admi-application',
  templateUrl: './admi-application.component.html',
  styleUrls: ['./admi-application.component.css']
})
export class AdmiApplicationComponent implements OnInit {
  // 'nombre', 'Usuario', 'Curso', 'fechaInicio', 'Precio', 'Estado'
  columnas: string[] = ['nombre', 'Usuario', 'Curso', 'fechaInicio', 'Precio', 'Estado']
  dataSource: tableComprobante[] = [
    {
      "nombre": "Morena Perez",
      "nmbreUsuario": "morenaPerez",
      "curso": "Manicura",
      "fechaInicio": "2023-10-10",
      "precio": 8500
    },
    {
      "nombre": "Morena Perez",
      "nmbreUsuario": "morenaPerez",
      "curso": "Manicura",
      "fechaInicio": "2023-10-10",
      "precio": 8500
    },
    {
      "nombre": "Morena Perez",
      "nmbreUsuario": "morenaPerez",
      "curso": "Manicura",
      "fechaInicio": "2023-10-10",
      "precio": 8500
    },
    {
      "nombre": "Morena Perez",
      "nmbreUsuario": "morenaPerez",
      "curso": "Manicura",
      "fechaInicio": "2023-10-10",
      "precio": 8500
    },


  ];



  constructor() { }

  ngOnInit(): void {
  }

}
