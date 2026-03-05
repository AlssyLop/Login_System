import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-email-input',
  templateUrl: './email-input.component.html',
  styleUrls: ['./email-input.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => EmailInputComponent),
      multi: true
    }
  ]
})
export class EmailInputComponent implements OnInit, ControlValueAccessor {

  @Input() label: string = 'E-mail Address';
  @Input() placeholder: string = 'example@example.com';

  value: string = '';
  isDisabled: boolean = false;

  onChange: any = () => { };
  onTouched: any = () => { };

  constructor() { }

  ngOnInit() { }

  // ControlValueAccessor methods
  writeValue(value: any): void {
    this.value = value || '';
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  handleInputChange(event: any) {
    const val = event.target.value;
    this.value = val;
    this.onChange(val);
    this.onTouched();
  }

}
