import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbStepperModule, NbButtonModule, NbInputModule, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'corporate' }),
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
