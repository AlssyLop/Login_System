import { Component, Input, OnInit, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
    selector: 'app-password-input',
    templateUrl: './password-input.component.html',
    styleUrls: ['./password-input.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PasswordInputComponent),
            multi: true
        }
    ]
})
export class PasswordInputComponent implements OnInit, ControlValueAccessor {

    @Input() label: string = 'Password';
    @Input() placeholder: string = '••••••••••••';
    @Input() type:string = "password";

    value: string = '';
    isDisabled: boolean = false;
    showPassword: boolean = false;

    onChange: any = () => { };
    onTouched: any = () => { };

    constructor() { }

    ngOnInit() { }

    togglePasswordVisibility() {
        this.type = this.showPassword? "password":"text";
        this.showPassword = !this.showPassword;
    }

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
