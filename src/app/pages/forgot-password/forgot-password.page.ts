import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { EmailInputComponent } from 'src/app/components/email-input/email-input.component';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ButtonComponent, EmailInputComponent, FormsModule]
})
export class ForgotPasswordPage implements OnInit {
  constructor() { }

  ngOnInit() {

  }

}
