import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.page.html',
  styleUrls: ['./auth-home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ButtonComponent]
})
export class AuthHomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
