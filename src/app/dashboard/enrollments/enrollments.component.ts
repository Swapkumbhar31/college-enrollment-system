import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {AddStudentComponent} from "../add-student/add-student.component";
import {AddEnrollmentComponent} from "../add-enrollment/add-enrollment.component";

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: []
})
export class EnrollmentsComponent implements OnInit {
  displayedColumns: string[] = ['class_id', 'room_id', 'student_id',  'action'];
  dataSource$: any[] = [];

  constructor(
    private dialog: MatDialog,
    private store: AngularFirestore
  ) {
  }

  ngOnInit(): void {
    this.store.collection('enrollments').valueChanges({idField: 'firebase_id'}).subscribe({
      next: value => {
        this.dataSource$ = value;
        value.forEach((value1: any, index) => {
          this.store.collection('students')
            .doc(value1.student_id)
            .valueChanges()
            .subscribe(student => {
              this.dataSource$[index]['student'] = student;
            });
          this.store.collection('classes')
            .doc(value1.class_id)
            .valueChanges()
            .subscribe(cls => {
              this.dataSource$[index]['class'] = cls;
            });
        });
      }
    });
  }

  addStudent() {
    this.dialog.open(AddEnrollmentComponent, {
      width: '50%'
    });
  }

  delete(student: any) {
    if (confirm("Do you really want to delete student?")) {
      this.store.collection('enrollments').doc(student.firebase_id).delete().then(r => {

      });
    }
  }

  edit(student: any) {
    this.dialog.open(AddEnrollmentComponent, {
      width: '50%',
      data: student
    });
  }

}
