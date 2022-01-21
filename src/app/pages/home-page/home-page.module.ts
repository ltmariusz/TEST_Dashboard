import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NbAccordionModule, NbButtonModule, NbContextMenuModule, NbIconModule, NbLayoutModule, NbSidebarModule, NbUserModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LoginModule } from 'src/app/components/login/login.module';
import { NavigationModule } from 'src/app/components/navigation/navigation.module';

 const routes: Routes =[
  {path: '', component: HomePageComponent, children:[
    { path: 'invate/add', loadChildren: () => import('./pages/invite-page/invite-page/pages/invite-add-page/invite-add-page.module').then(m => m.InviteAddPageModule) },
    { path: 'zaproszenie/oczekujace', loadChildren: () => import('./pages/invite-page/invite-page/pages/invite-pending-page/invite-pending-page.module').then(m => m.InvitePendingPageModule) },
    { path: 'admin/add', loadChildren: () => import('./pages/admin-page/admin-page/pages/admin-add-page/admin-add-page.module').then(m => m.AdminAddPageModule) },
    { path: 'admin/list/edit', loadChildren: () => import('./pages/admin-page/admin-page/pages/admin-list-page/admin-list-page.module').then(m => m.AdminListPageModule) }
  ]}
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
    NbButtonModule,
    LoginModule,
    NavigationModule,
    NbContextMenuModule
  ]
})
export class HomePageModule { }
