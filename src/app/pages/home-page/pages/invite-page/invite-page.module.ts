import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvitePageComponent } from './invite-page/invite-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InvitePageComponent},
  {path: 'add', loadChildren: () => import('./invite-page/pages/invite-add-page/invite-add-page.module').then(m => m.InviteAddPageModule)},
  {path: 'pending', loadChildren: () => import('./invite-page/pages/invite-pending-page/invite-pending-page.module').then(m => m.InvitePendingPageModule)}
]

@NgModule({
  declarations: [
    InvitePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InvitePageModule { }
