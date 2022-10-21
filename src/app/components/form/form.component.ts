import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  model: any = {};

  private createUser!: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {}

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
    // this.createUser
    //   .add(this.contactFormReactive.value)
    //   .then((res) => {
    //     console.log('Success');
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  showAll() {
    this.createUser.get();
  }

  ngOnInit(): void {
    this.createUser = this.firestore.collection('users');
  }
}
