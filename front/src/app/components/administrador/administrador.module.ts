import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmiComponent } from './admi/admi.component';
import { LayoutAdmiComponent } from './layout-admi/layout-admi.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { AdmiApplicationComponent } from './admi-application/admi-application.component';



@NgModule({
  declarations: [
    AdmiComponent,
    LayoutAdmiComponent,
    AdmiApplicationComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    RouterModule
  ]
})
export class AdministradorModule { }
