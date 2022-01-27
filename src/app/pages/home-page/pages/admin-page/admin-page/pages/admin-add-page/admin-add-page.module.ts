import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddPageComponent } from './admin-add-page/admin-add-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: '', component: AdminAddPageComponent}
]

@NgModule({
  declarations: [
    AdminAddPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminAddPageModule { }