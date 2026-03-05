import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { EmailInputComponent } from 'src/app/components/email-input/email-input.component';
import { PasswordInputComponent } from 'src/app/components/password-input/password-input.component';
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from 'src/app/components/back-button/back-button.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [RouterLink, IonicModule, ButtonComponent, CommonModule, FormsModule, ReactiveFormsModule, EmailInputComponent, PasswordInputComponent, BackButtonComponent]
})
export class RegisterPage implements OnInit {
  currentStep: number = 1;
  registerForm!: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
      lastName: ['', [Validators.required, Validators.minLength(2), Validators.pattern('^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$')]],
      password: ['', [Validators.required], Validators.minLength(8)]
    });
  }

  nextStep() {
    if (this.currentStep < 3) this.currentStep++;
  }

  prevStep() {
    if (this.currentStep > 1) this.currentStep--;
  }

  getStepTitle(): string {
    switch (this.currentStep) {
      case 1: return 'Email Verification';
      case 2: return 'Personal Information';
      case 3: return 'Secure Account';
      default: return '';
    }
  }

}
