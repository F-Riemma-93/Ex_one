import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PartitaCalcioService {
  // Stato della partita
  private score = { teamA: 0, teamB: 0, isFinished: false };

  // BehaviorSubject per mantenere e aggiornare lo stato della partita
  private partitaSubject: BehaviorSubject<any> = new BehaviorSubject(this.score);

  // Metodo per aggiornare il punteggio
  updateScore(teamA: number, teamB: number) {
    this.score = { ...this.score, teamA, teamB };
    this.partitaSubject.next(this.score);
  }

  // Metodo per concludere la partita
  endGame() {
    this.score = { ...this.score, isFinished: true };
    this.partitaSubject.next(this.score);
  }

  // Observable per notificare gli observer dei cambiamenti
  getPartitaUpdates(): Observable<any> {
    return this.partitaSubject.asObservable();
  }
}
