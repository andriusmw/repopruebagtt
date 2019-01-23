import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from '../app/login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';


const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponentComponent,
  },
  {
    path: 'login',
    component: LoginComponentComponent,
  }
  /*{
    path: 'board',
    component: LoginComponentComponent,
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
