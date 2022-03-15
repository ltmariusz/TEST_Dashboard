import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list/admin-list.component';
import { NbCardModule, NbTreeGridModule } from '@nebular/theme';



@NgModule({
  declarations: [
    AdminListComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbTreeGridModule,
  ],
  exports: [
    AdminListComponent
  ]
})
export class AdminListModule { }
