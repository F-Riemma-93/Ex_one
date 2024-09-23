import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserLoginAPIService {

  private apiUrl = 'https://localhost:7006/api/UserLogin';  // URL del backend .NET

  constructor(private http: HttpClient) { }

  // Metodo per la registrazione
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user).pipe(
      catchError(error => {
        // Gestisci l'errore qui, ad esempio, loggando o trasformando l'errore
        console.error('Errore durante la registrazione:', error);

        alert('Si è verificato un errore durante la registrazione. Per favore, riprova più tardi. ' + error);
  
        // Ritorna un Observable con un errore per il chiamante
        return throwError(() => new Error('Errore nella registrazione dell\'utente.'));
      }) // Gestione errori
    );
  }


  // Metodo per il login
  login(username: string, password: string): Observable<User> {
    const body = { username, password };
    return this.http.post<User>(this.apiUrl+"/login", body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

}
