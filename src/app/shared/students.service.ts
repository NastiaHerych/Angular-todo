import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Student } from '../models/student';
import { CrudService } from './crud.service';

@Injectable({
  providedIn: 'root',
})
export class StudentsService extends CrudService<Student> {
  collectionName = '/Students';
  constructor(public override afs: Firestore) {
    super(afs);
  }
}
