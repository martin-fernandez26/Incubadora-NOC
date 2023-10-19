import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago-page',
  templateUrl: './pago-page.component.html',
  styleUrls: ['./pago-page.component.css']
})
export class PagoPageComponent implements OnInit {
  imageSrc: string | ArrayBuffer | null = null;


  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.imageSrc = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  uploadImage() { }
  constructor() { }

  ngOnInit(): void {
  }

}
