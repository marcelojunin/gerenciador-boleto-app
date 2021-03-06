import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {
  MatTabsModule,
  MatSidenavModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';
import { HeaderComponent } from './pages/shared/header/header.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SidenavListComponent } from './pages/shared/sidenav-list/sidenav-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmComponent } from './pages/shared/confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    ConfirmComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule,
    MatMenuModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatTabsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
  ],
  entryComponents: [
    ConfirmComponent
  ]
})
export class AppModule { }
