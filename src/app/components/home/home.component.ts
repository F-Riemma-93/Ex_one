import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private userLoginService: UserLoginService, private router: Router) {
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
}
