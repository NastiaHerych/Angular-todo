import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';

import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
  };
  id: string = '';
  first_name: string = '';
  last_name: string = '';
  email: string = '';

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getAllStudents();
  }

  getAllStudents() {
    this.data.getAllStudents().subscribe(
      (res: any[]) => {
        this.studentsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err: any) => {
        alert('Error while fetching student data');
      }
    );
  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
  }

  addStudent() {
    if (this.first_name == '' || this.last_name == '' || this.email == '') {
      alert('Fill all input fields');
      return;
    }
    this.studentObj.id = '';
    this.studentObj.email = this.email;
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.data.addStudent(this.studentObj);
    this.resetForm();
  }

  updateStudent(student: Student) {
    student.email = this.email;
    student.first_name = this.first_name;
    student.last_name = this.last_name;
    this.data.updateStudent(student);
  }

  showData(student: Student) {
    this.first_name = student.first_name;
    this.last_name = student.last_name;
    this.email = student.email;
  }

  deleteStudent(student: Student) {
    if (
      window.confirm(
        'Are you sure you want to delete ' +
          student.first_name +
          ' ' +
          student.last_name +
          ' ?'
      )
    ) {
      this.data.deleteStudent(student);
    }
  }
}
