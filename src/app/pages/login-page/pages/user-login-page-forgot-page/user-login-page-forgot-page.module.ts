import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginPageForgotPageComponent } from './user-login-page-forgot-page/user-login-page-forgot-page.component';
import { ForgotPasswordModule } from 'src/app/components/forgot-password/forgot-password.module';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', component: UserLoginPageForgotPageComponent}
 ];



@NgModule({
  declarations: [
    UserLoginPageForgotPageComponent
  ],
  imports: [
    CommonModule,
    ForgotPasswordModule,
    RouterModule.forChild(routes)
  ]
})
export class UserLoginPageForgotPageModule { }
