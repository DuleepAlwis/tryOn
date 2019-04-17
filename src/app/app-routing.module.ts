import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MenSuitsFormComponent } from './men-suits-form/men-suits-form.component';
import { LoginComponent } from './login/login.component';
import { MeasurementsTableComponent } from './measurements-table/measurements-table.component';


const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
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

