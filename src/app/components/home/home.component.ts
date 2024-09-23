import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';
import { UserLoginAPIService } from 'src/app/services/user-login-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userLoginService: UserLoginService, 
    private userLoginAPIService: UserLoginAPIService,
    private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      if (this.userLoginService.login(username, password)) {
        this.router.navigate(['/logged']);
      } else {
        alert('Invalid credentials');
      }
    }
  }

  /* 
  TEST - implementazione API login
  login() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;
      this.userLoginService.login(username, password);

      this.userLoginAPIService.login(username, password).subscribe(
        response => {
          // Se il login ha successo, naviga alla pagina successiva
          this.userLoginService.setLoggedInUser(response);
          this.router.navigate(['/logged']);
        },
        error => {
          // Gestisci gli errori
          alert('Invalid credentials');
        }
      );
    }
  }
  */
}
