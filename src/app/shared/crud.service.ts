import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  docData,
  DocumentReference,
  DocumentData,
} from '@angular/fire/firestore';
import { Student } from '../models/student';
import { collectionData } from 'rxfire/firestore';

@Injectable({
  providedIn: 'root',
})
export abstract class CrudService<T> {
  abstract collectionName: string;

  constructor(public afs: Firestore) {}

  add(doc: DocumentData): Promise<DocumentReference<DocumentData>> {
    return addDoc(collection(this.afs, this.collectionName), { ...doc });
  }

  delete(student: Student) {
    const deleteRef = doc(this.afs, this.collectionName, student.id);
    return deleteDoc(deleteRef);
  }

  getAll() {
    return collectionData(collection(this.afs, this.collectionName), {
      idField: 'id',
    });
  }

  get(id: string) {
    const docRef = doc(this.afs, this.collectionName + '/' + id);
    return docData(docRef, { idField: 'id' });
  }

  update(id: string, obj: T) {
    const docRef = doc(this.afs, this.collectionName, id);
    const res: any = { ...obj };
    return updateDoc(docRef, res);
  }
}
