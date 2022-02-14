import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddPageComponent } from './admin-add-page/admin-add-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NbButtonModule, NbCardModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes =[
  {path: '', component: AdminAddPageComponent}
]

@NgModule({
  declarations: [
    AdminAddPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
    ReactiveFormsModule,
  ]
})
export class AdminAddPageModule { }
