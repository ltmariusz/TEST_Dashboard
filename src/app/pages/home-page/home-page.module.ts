import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';

 const routes: Routes =[
  {path: '', component: HomePageComponent}
 ]



@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NbLayoutModule,
    NbUserModule,
    NbEvaIconsModule,
    NbIconModule,
    NbSidebarModule,
    NbAccordionModule,
    NbButtonModule
  ]
})
export class HomePageModule { }
