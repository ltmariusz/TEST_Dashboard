import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NbCardModule, NbIconModule, NbMenuModule } from '@nebular/theme';



@NgModule({
  declarations: [
    NavigationComponent
  ],
  imports: [
    CommonModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
