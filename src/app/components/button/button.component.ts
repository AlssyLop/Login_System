import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {

  @Input() label: string = 'Login';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() link?: string;
  @Output() onClick = new EventEmitter<void>();

  constructor(private router: Router) { }

  ngOnInit() { }

  handleButtonClick() {
    if (this.disabled) return;

    if (this.link) {
      this.router.navigateByUrl(this.link);
    } else {
      this.onClick.emit();
    }
  }

}
