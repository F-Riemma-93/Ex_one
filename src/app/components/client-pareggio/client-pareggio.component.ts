import { Component, Input, OnInit } from '@angular/core';
import { PartitaCalcioService } from '../../services/partita-calcio.service';

@Component({
  selector: 'app-client-pareggio',
  templateUrl: './client-pareggio.component.html',
  styleUrls: ['./client-pareggio.component.css']
})
export class ClientPareggioComponent implements OnInit {
  messages: string[] = [];
  
  message: string | null = null;

  constructor(private partitaService: PartitaCalcioService) {}

  ngOnInit() {
    this.partitaService.getPartitaUpdates().subscribe(score => {
      const { teamA, teamB, isFinished } = score;
      this.messages.push("Aggiornamento: " + teamA + " - " + teamB);
      
      if (isFinished) {
        if (teamA === teamB) {
          this.messages.push("La partita è conclusa in Pareggio. HAI VINTO!");
        } else {
          this.messages.push("La partita è conclusa. HAI PERSO!");
        }
      }
    });
  }
}
