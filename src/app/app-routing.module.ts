import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { MenSuitsFormComponent } from './men-suits-form/men-suits-form.component';
import { LoginComponent } from './auth/login/login.component';
import { MeasurementsTableComponent } from './customer-top-measurements/customer-top-measurements.component';
import { AdminComponent } from './admin/admin.component';
import { HelperComponent } from './helper/helper.component';
import { CustomerBottomMeasurementsComponent } from './customer-bottom-measurements/customer-bottom-measurements.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  // { path: 'admin', component: AdminComponent, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },
  // { path: 'helper', component: HelperComponent, canActivate: [AuthGuard], data: { roles: [Role.Helper] } },
  { path: 'login', component: LoginComponent },
  { path: 'men', component: MenSuitsFormComponent },
  // { path: 'women', component: WomenSuitsFormComponent },
  // { path: 'contact', component: ContactComponent }
  { path: 'measurements', component: MeasurementsTableComponent  },
  { path: 'measurements1', component: CustomerBottomMeasurementsComponent  },
  { path: 'profile', component: UserProfileComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

