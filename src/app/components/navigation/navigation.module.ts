import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NbCardModule, NbMenuModule } from '@nebular/theme';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NbMenuModule,
    NbCardModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
