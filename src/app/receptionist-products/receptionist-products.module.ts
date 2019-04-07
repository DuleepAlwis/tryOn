import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TightsFormComponent } from './tights-form/tights-form.component';
import { ReceptionistProductsComponent } from './receptionist-products/receptionist-products.component';
import { MenSuitsFormComponent }  from './men-suits-form/men-suits-form.component';
import { ReceptionistProductsRoutesModule } from './receptionist-products-routes.module';


@NgModule({
  declarations: [
    TightsFormComponent,
    ReceptionistProductsComponent,
    MenSuitsFormComponent
    ],
  imports: [
    CommonModule,
    ReceptionistProductsRoutesModule
  ]
})
export class ReceptionistProductsModule { }
