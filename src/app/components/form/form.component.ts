import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  model: any = {};
  contactFormReactive = new FormGroup({
    firstname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    lastname: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$'),
    ]),
    agreed: new FormControl('', [Validators.required]),
  });

  onSubmit(contactForm: { value: any }) {
    console.log(contactForm.value);
  }

  onSubmitReactive() {
    console.log(this.contactFormReactive.value);
  }

  constructor() {}

  ngOnInit(): void {}
}
