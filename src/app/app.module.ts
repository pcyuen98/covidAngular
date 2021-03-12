import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CovidComponent } from './covid/covid.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SpaComponent } from './spa/spa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    CovidComponent,
    HeaderComponent,
    HomeComponent,
    SpaComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
        
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
