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

  checkPassword = new RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).*$'); 

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
      Validators.pattern(this.checkPassword),
    ]),
    agreed: new FormControl('', [Validators.required]),
  });


  showAll() {
    this.createUser.get();
  }

  ngOnInit(): void {
    this.createUser = this.firestore.collection('users');
  }
}
