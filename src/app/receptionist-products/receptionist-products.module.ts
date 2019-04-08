import { AccessoriesFormComponent } from "./../accessories-form/accessories-form.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { TightsFormComponent } from "./../tights-form/tights-form.component";
import { ReceptionistProductsComponent } from "./receptionist-products.component";
import { MenSuitsFormComponent } from "./../men-suits-form/men-suits-form.component";
import { ReceptionistProductsRoutesModule } from "./receptionist-products-routes.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ReceptionistNavigationComponent } from "../receptionist-navigation/receptionist-navigation.component";
import { ReceprionistProductsEditComponent } from "../receprionist-products-edit/receprionist-products-edit.component";

@NgModule({
  declarations: [
    TightsFormComponent,
    ReceptionistProductsComponent,
    MenSuitsFormComponent,
    AccessoriesFormComponent,
    ReceptionistNavigationComponent,
    ReceprionistProductsEditComponent
  ],
  imports: [CommonModule, ReceptionistProductsRoutesModule, ReactiveFormsModule]
})
export class ReceptionistProductsModule {}
