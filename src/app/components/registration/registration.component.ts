import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserLoginService } from '../../services/user-login.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private userLoginService: UserLoginService,
    private router: Router 
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  getControl(name: string): AbstractControl | null {
    return this.registrationForm.get(name);
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      const newUser: User = this.registrationForm.value;
      this.userLoginService.addUser(newUser); // Aggiungi l'utente al servizio
      console.log('User registered successfully!', newUser);
      this.registrationForm.reset(); // Resetta il modulo
      this.router.navigate(['/home']); // Reindirizza alla home page
    } else {
      console.log('Form is invalid');
    }
  }

}
