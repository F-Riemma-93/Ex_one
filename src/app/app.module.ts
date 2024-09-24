import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';  // Importa ReactiveFormsModule
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoggedComponent } from './components/logged/logged.component';

import { MatFormFieldModule } from '@angular/material/form-field';  // Importa MatFormFieldModule
import { MatInputModule } from '@angular/material/input';
import { ClientPareggioComponent } from './components/client-pareggio/client-pareggio.component';
import { ClientGoalComponent } from './components/client-goal/client-goal.component';
import { GestionePartitaComponent } from './components/gestione-partita/gestione-partita.component';  // Importa MatInputModule
import { HttpClientModule } from '@angular/common/http';
import { UserLoginService } from './services/user-login.service';
import { UserLoginAPIService } from './services/user-login-api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistrationComponent,
    LoggedComponent,
    ClientPareggioComponent,
    ClientGoalComponent,
    GestionePartitaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [
    UserLoginService, 
    UserLoginAPIService]
    ,
  bootstrap: [AppComponent]
})
export class AppModule { }
