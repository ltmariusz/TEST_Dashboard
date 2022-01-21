import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteAddPageComponent } from './invite-add-page/invite-add-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: '', component: InviteAddPageComponent }
 ]


@NgModule({
  declarations: [
    InviteAddPageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class InviteAddPageModule { }
