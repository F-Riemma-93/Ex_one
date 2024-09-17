import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoggedComponent } from './components/logged/logged.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Reindirizza alla home all'avvio
  { path: 'home', component: HomeComponent },  // Definisci la rotta per la Home
  { path: 'register', component: RegistrationComponent },
  { path: 'logged', component: LoggedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
