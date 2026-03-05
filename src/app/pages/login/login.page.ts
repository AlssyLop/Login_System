import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { EmailInputComponent } from 'src/app/components/email-input/email-input.component';
import { PasswordInputComponent } from 'src/app/components/password-input/password-input.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule, IonicModule, CommonModule, ButtonComponent, EmailInputComponent, PasswordInputComponent]
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

}
