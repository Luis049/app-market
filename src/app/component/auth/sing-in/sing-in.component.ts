import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css'],
})
export class SingInComponent {
  formSubmitted: boolean = false;

  loginForm: any = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder) {}

  login() {
    this.formSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm);
  }
}
