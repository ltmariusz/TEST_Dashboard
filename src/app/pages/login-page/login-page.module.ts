import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { NbLayoutModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from 'src/app/components/login/login.module';
import { UserLoginPageComponent } from './pages/user-login-page/user-login-page.component';
import { ForgotPasswordModule } from 'src/app/components/forgot-password/forgot-password.module';
import { ForgotPasswordComponent } from 'src/app/components/forgot-password/forgot-password/forgot-password.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent, children:[
    {path: '', component: UserLoginPageComponent},
    {path: 'forgot-password', loadChildren: () => import('./pages/user-login-page-forgot-page/user-login-page-forgot-page.module').then(m => m.UserLoginPageForgotPageModule)}
  ],}
  

 ];

@NgModule({
  declarations: [
    LoginPageComponent,
    UserLoginPageComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    RouterModule.forChild(routes),
    LoginModule,
    ForgotPasswordModule,
  ]
})
export class LoginPageModule { }
