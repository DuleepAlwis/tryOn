import { NgModule, Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TightsFormComponent } from "../tights-form/tights-form.component";
import { ReceptionistProductsComponent } from "../receptionist-products/receptionist-products.component";
import { MenSuitsFormComponent } from "../men-suits-form/men-suits-form.component";
import { AccessoriesFormComponent } from "../accessories-form/accessories-form.component";
import { ReceprionistProductsEditComponent } from "../receprionist-products-edit/receprionist-products-edit.component";
import { ClothEditComponent } from "../cloth-edit/cloth-edit.component";

const productsAddRoutes: Routes = [
  {
    component: ReceptionistProductsComponent,
    path: "Receptionist",
    children: [
      {
        component: MenSuitsFormComponent,
        path: "suitform/:title" /*,
        outlet: "addProducts"*/
      },
      {
        path: "tightsform/:title",
        component: TightsFormComponent /*,
        outlet: "addProducts"*/
      },
      {
        component: AccessoriesFormComponent,
        path: "accessoriesform/:title" /*,
        outlet: "addProducts"*/
      }
    ]
  },
  {
    component: ReceprionistProductsEditComponent,
    path: "Receptionistproductedit"
  },
  {
    component: ClothEditComponent,
    path: "ClothEdit/:productId/:type/:category"
  }
];

@NgModule({
  imports: [RouterModule.forChild(productsAddRoutes)],
  exports: [RouterModule]
})
export class ReceptionistProductsRoutesModule {}
