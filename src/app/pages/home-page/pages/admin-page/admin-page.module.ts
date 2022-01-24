import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes =[
  // {path: '', redirectTo: '/pages/admin/list', pathMatch: 'full', component: AdminPageComponent},
  {path: '', component: AdminPageComponent},
  {path:'list', loadChildren: () => import('./admin-page/pages/admin-list-page/admin-list-page.module').then(m => m.AdminListPageModule)},
  {path:'add', loadChildren: () => import('./admin-page/pages/admin-add-page/admin-add-page.module').then(m => m.AdminAddPageModule)},
]

@NgModule({
  declarations: [
    AdminPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AdminPageModule { }
