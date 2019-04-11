import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MenSuitsFormComponent } from './men-suits-form/men-suits-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'men', component: MenSuitsFormComponent }
  // { path: 'women', component: WomenSuitsFormComponent },
  // { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

