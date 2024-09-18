import { Component, Input, OnInit } from '@angular/core';
import { PartitaCalcioService } from '../../services/partita-calcio.service';

@Component({
  selector: 'app-client-goal',
  templateUrl: './client-goal.component.html',
  styleUrls: ['./client-goal.component.css']
})
export class ClientGoalComponent implements OnInit {
  messages: string[] = [];
  //message: string | null = null;

  constructor(private partitaService: PartitaCalcioService) {}

  ngOnInit() {
    var boolWin = false;

    this.partitaService.getPartitaUpdates().subscribe(score => {
      const { teamA, teamB, isFinished } = score;
      this.messages.push("Aggiornamento: " + teamA + " - " + teamB);
     
        if (!boolWin && teamA > 0 && teamB > 0) {
          boolWin = true;
          this.messages.push("HAI APPENA VINTO!");
        }
        
        if (isFinished) {
          if (boolWin && teamA > 0 && teamB > 0) {
            boolWin = true;
            this.messages.push("Complimenti HAI VINTO!");
          }
        }
    });
  }
}
