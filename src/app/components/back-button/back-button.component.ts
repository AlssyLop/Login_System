import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class BackButtonComponent implements OnInit {

    @Input() link?: string;
    @Output() onClick = new EventEmitter<void>();

    constructor(private router: Router) { }

    ngOnInit() { }

    handleButtonClick() {
        if (this.link) {
            this.router.navigateByUrl(this.link);
        } else {
            this.onClick.emit();
        }
    }

}
