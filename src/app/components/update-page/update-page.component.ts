import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Student } from 'src/app/models/student';
import { StudentsService } from 'src/app/shared/students.service';

@Component({
  selector: 'app-update-page',
  templateUrl: './update-page.component.html',
  styleUrls: ['./update-page.component.scss'],
})
export class UpdatePageComponent implements OnInit {
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
  test: any = '';

  constructor(
    private data: StudentsService,
    private route: ActivatedRoute,
    public snackBar: MatSnackBar
  ) {}

  getStudent(): void {
    let res = this.route.params.subscribe((params) => {
      this.data.get(params['id']).subscribe((res) => {
        this.id = res['id'];
        this.first_name = res['first_name'];
        this.last_name = res['last_name'];
        this.email = res['email'];
      });
    });
  }

  ngOnInit(): void {
    this.getStudent();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

  updateStudent() {
    this.studentObj.first_name = this.first_name;
    this.studentObj.last_name = this.last_name;
    this.studentObj.email = this.email;
    this.data.update(this.id, this.studentObj);
    this.openSnackBar('updated successfully', 'ok');
  }
}
