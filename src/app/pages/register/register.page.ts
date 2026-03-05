import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { EmailInputComponent } from 'src/app/components/email-input/email-input.component';
import { PasswordInputComponent } from 'src/app/components/password-input/password-input.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, ButtonComponent, CommonModule, FormsModule, ReactiveFormsModule, EmailInputComponent, PasswordInputComponent]
})
export class RegisterPage implements OnInit {
  loginForm!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
      password: ['', [Validators.required]]
    });
  }

}
