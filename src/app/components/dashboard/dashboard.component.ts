import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/shared/students.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/shared/auth.service';

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

 

  constructor(
    private data: StudentsService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar,
    private authService: AuthService
  ) {}


   user$= this.authService.currentUser$;

  ngOnInit(): void {
    this.getAllStudents();
  }

  resetForm() {
    this.id = '';
    this.first_name = '';
    this.last_name = '';
    this.email = '';
  }

  getAllStudents() {
    this.data.getAll().subscribe(
      (res: any[]) => {
        this.studentsList = res;
      },
      (err: any) => {
        alert('Error while fetching student data');
      }
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  addStudent() {
    if (this.first_name == '' || this.last_name == '' || this.email == '') {
      alert('Fill all input fields');
      return;
    }
    this.studentObj.email = this.email;
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.data.add(this.studentObj);
    this.openSnackBar('added successfully', 'ok');
    this.resetForm();
  }

  deleteStudent(student: Student) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: {
        message: 'Do you want to delete this student?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      if (confirmed) {
        this.data.delete(student);
        this.openSnackBar('deleted successfully', 'ok');
      } else {
        this.openSnackBar('error while deleting', 'ok');
      }
    });
  }
}
