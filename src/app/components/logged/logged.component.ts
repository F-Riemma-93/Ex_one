import { Component } from '@angular/core';
import { UserLoginService } from '../../services/user-login.service';

@Component({
  selector: 'app-logged',
  templateUrl: './logged.component.html',
  styleUrls: ['./logged.component.css']
})
export class LoggedComponent {
  user: any;

  constructor(private userLoginService  : UserLoginService) {
    //recupero utente Logged e l'assegno all'utente del component Logged
    this.user = this.userLoginService.getLoggedInUser();
  }
}
