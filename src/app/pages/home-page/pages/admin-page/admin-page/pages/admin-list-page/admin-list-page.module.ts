import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListPageComponent } from './admin-list-page/admin-list-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  { path: '', component: AdminListPageComponent},
]

@NgModule({
  declarations: [
    AdminListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminListPageModule { }
