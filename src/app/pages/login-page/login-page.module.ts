import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { NbLayoutModule } from '@nebular/theme';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from 'src/app/components/login/login.module';
import { UserLoginPageComponent } from './pages/user-login-page/user-login-page.component';

const routes: Routes = [
  {path: '', component: LoginPageComponent, children:[
    {path: '', component: UserLoginPageComponent}
  ]}

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
    LoginModule
  ]
})
export class LoginPageModule { }
