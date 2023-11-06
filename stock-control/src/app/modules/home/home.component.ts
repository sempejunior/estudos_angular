import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  onSubmitLoginForm() {
    console.log('Dados do formulário de login', this.loginForm.value);
  }
  onSubmitSignUpForm() {
    console.log('Dados do formulário de cadastro', this.signupForm.value);
  }
}
