import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MobileLoginComponent } from './mobilelogin/mobilelogin.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';

const routes: Routes = [
  {path:'',component:MobileLoginComponent},
  {path:'login',component:LoginComponent},
  {path:'reset-password',component:RecoverPasswordComponent},
  {path:'mobile-login',component:MobileLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
