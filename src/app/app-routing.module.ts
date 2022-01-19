import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 {path: 'login', 
 loadChildren: () => import('./pages/login-page/login-page.module').then(m => m.LoginPageModule)}, 
 {path: '', redirectTo: '/login', pathMatch: 'full'},
 {path: 'pages', loadChildren: () => import ('./pages/home-page/home-page.module').then(m => m.HomePageModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
