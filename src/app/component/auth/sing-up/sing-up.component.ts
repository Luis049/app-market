import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent {
  formSubmitted: boolean = false;

  submittedForm: any = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(3)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(3)]],
  });

  constructor(private fb: FormBuilder) {}

  register() {
    this.formSubmitted = true;
    if (this.submittedForm.invalid) {
      return;
    }
    console.log(this.submittedForm);
  }
}
