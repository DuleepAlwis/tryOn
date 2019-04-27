import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './app/register/register.component';
import { MenSuitsFormComponent } from './men-suits-form/men-suits-form.component';
import { LoginComponent } from './app/login/login.component';
import { MeasurementsTableComponent } from './measurements-table/measurements-table.component';
import { AdminComponent } from './admin/admin.component';
import { HelperComponent } from './helper/helper.component';


const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  // { path: 'helper', component: HelperComponent, canActivate: [AuthGuard], data: { roles: [Role.Helper] } },
  { path: 'login', component: LoginComponent },
  { path: 'men', component: MenSuitsFormComponent },
  // { path: 'women', component: WomenSuitsFormComponent },
  // { path: 'contact', component: ContactComponent }
  { path: 'measurements', component: MeasurementsTableComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

