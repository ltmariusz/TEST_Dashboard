import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { NbButtonModule, NbCardModule, NbInputModule, NbRadioModule } from '@nebular/theme';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminAddComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
    ReactiveFormsModule,
  ],
  exports:[
    AdminAddComponent
  ]
})
export class AdminAddModule { }
