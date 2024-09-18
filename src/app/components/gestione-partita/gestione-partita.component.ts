import { Component } from '@angular/core';
import { PartitaCalcioService } from '../../services/partita-calcio.service';

@Component({
  selector: 'app-gestione-partita',
  templateUrl: './gestione-partita.component.html',
  styleUrls: ['./gestione-partita.component.css']
})
export class GestionePartitaComponent {
  teamAScore: number = 0;
  teamBScore: number = 0;
  messages: string[] = [];


  constructor(private partitaService: PartitaCalcioService) {}

  // Metodo per segnare un goal per la squadra A
  goalTeamA() {
    this.teamAScore++;
    // this.updateMessages('Ha segnato la squadra A');
    this.partitaService.updateScore(this.teamAScore, this.teamBScore);
  }

  // Metodo per segnare un goal per la squadra B
  goalTeamB() {
    this.teamBScore++;
    // this.updateMessages('Ha segnato la squadra B');
    this.partitaService.updateScore(this.teamAScore, this.teamBScore);
  }

  // Metodo per concludere la partita
  endGame() {
    // this.updateMessages('La partita è terminata');
    this.partitaService.endGame();
  }

  // updateMessages(message: string) {
  //   this.messages.push(message);
  //   this.messages.push(`Il risultato è ${this.teamAScore} - ${this.teamBScore}`);
  // }
}
