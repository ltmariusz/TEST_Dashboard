import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserChangePasswordComponent } from './user-change-password/user-change-password.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: UserChangePasswordComponent}
]

@NgModule({
  declarations: [
    UserChangePasswordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserChangePasswordModule { }
