import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListPageComponent } from './admin-list-page/admin-list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminListModule } from 'src/app/components/admin-list/admin-list.module';

const routes: Routes =[
  { path: '', component: AdminListPageComponent},
]

@NgModule({
  declarations: [
    AdminListPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AdminListModule
  ]
})
export class AdminListPageModule { }
