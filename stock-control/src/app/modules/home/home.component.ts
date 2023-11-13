import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { SignupUserRequest } from 'src/app/models/interfaces/user/SignupUserRequest';
import { AuthRequest } from 'src/app/models/interfaces/user/auth/AuthRequest';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  loginCard = true;
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  signupForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private cookieService: CookieService
  ) {}

  onSubmitLoginForm() {
    if (this.loginForm.value && this.loginForm.valid) {
      this.userService.authUser(this.loginForm.value as AuthRequest).subscribe({
        next: (response) => {
          if (response) {
            this.cookieService.set('token', response?.token);
            this.loginForm.reset();
            console.log(response);
          }
        },
        error: (error) => {
          console.log(error);
        },
      });
    }

    console.log('Dados do formulário de login', this.loginForm.value);
  }
  onSubmitSignUpForm() {
    console.log('Dados do formulário de cadastro', this.signupForm.value);
    if (this.signupForm.value && this.signupForm.valid) {
      this.userService
        .signUPUser(this.signupForm.value as SignupUserRequest)
        .subscribe({
          next: (response) => {
            alert('Usuário teste criado');
            this.signupForm.reset();
            this.loginCard = true;
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
