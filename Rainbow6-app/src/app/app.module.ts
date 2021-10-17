import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FooterComponent} from "./footer/footer.component";
import {AngularEmojisModule} from "angular-emojis";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import { OverviewComponent } from './overview/overview.component';
import { OperatorsComponent } from './operators/operators.component';
import { StoreComponent } from './store/store.component';
import {NavbarModule} from "ng-uikit-pro-standard";
import { HomeComponent } from './home/home.component';
import { StoreDialogComponent } from './dialog/store-dialog/store-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    OverviewComponent,
    OperatorsComponent,
    StoreComponent,
    HomeComponent,
    StoreDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    AngularEmojisModule,
    MatCardModule,
    MatSidenavModule,
    NavbarModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
