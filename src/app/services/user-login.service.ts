import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private users: User[] = [];
  private usersSubject: BehaviorSubject<User[]> = new BehaviorSubject<User[]>(this.users);
  private loggedInUser: User | null = null; // Utente attualmente loggato

  constructor() {
    this.loadUsersFromLocalStorage();
  }

  // Metodo per ottenere gli utenti come Observable
  getUsers(): Observable<User[]> {
    return this.usersSubject.asObservable();
  }

  // Metodo per aggiungere un utente
  addUser(user: User): boolean {
    const existingUser = this.users.find(u => u.username === user.username && u.password === user.password);
    
    if (existingUser) {
      return false; // L'utente esiste già
    }
    
    this.users.push(user);
    this.updateLocalStorage(); // Aggiorna il localStorage
    this.usersSubject.next(this.users);
    
    return true; // Utente aggiunto con successo
  }

  // Metodo per simulare il login di un utente
  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.loggedInUser = user; // Imposta l'utente loggato
      return true;
    }
    return false;
  }

  // Metodo per ottenere l'utente attualmente loggato
  getLoggedInUser(): User | null {
    return this.loggedInUser;
  }

  setLoggedInUser(user: User){
    this.loggedInUser = user;
  }

  // Metodo per caricare gli utenti dal localStorage
  private loadUsersFromLocalStorage(): void {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
      this.usersSubject.next(this.users);
    }
  }

  // Metodo per salvare gli utenti nel localStorage
  private updateLocalStorage(): void {
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}
