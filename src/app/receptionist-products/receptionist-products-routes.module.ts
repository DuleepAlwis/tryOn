import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { TightsFormComponent } from '../tights-form/tights-form.component';
import { ReceptionistProductsComponent } from './receptionist-products/receptionist-products.component';
import { MenSuitsFormComponent }  from './men-suits-form/men-suits-form.component';

const productsAddRoutes: Routes =   [
    component: ReceptionistProductsComponent,
    path: "Receptionist",
    children: [
      {
        component: MenSuitsFormComponent,
        path: "suitform/:title"/*,
        outlet: "addProducts"*/
      },
      {
        path: "tightsform/:title",
        component: TightsFormComponent/*,
        outlet: "addProducts"*/
      },
      {
        component: AccessoriesFormComponent,
        path: "accessoriesform/:title"/*,
        outlet: "addProducts"*/
      }
    ]
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(productsAddRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
export class ReceptionistProductsRoutesModule { }
