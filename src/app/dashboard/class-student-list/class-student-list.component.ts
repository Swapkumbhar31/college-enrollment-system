import {Component, Inject, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-class-student-list',
  templateUrl: './class-student-list.component.html',
  styleUrls: []
})
export class ClassStudentListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'program', 'term'];
  dataSource$: any[] = [];

  constructor(
    private store: AngularFirestore,
    private dialog: MatDialogRef<ClassStudentListComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
  ) {
  }

  ngOnInit(): void {
    this.store.collection('enrollments', ref => ref.where('class_id', '==', this.payload.firebase_id))
      .valueChanges().subscribe(value => {
      this.dataSource$ = value;
      value.forEach((value1: any, index) => {
        this.store.collection('students')
          .doc(value1.student_id)
          .valueChanges()
          .subscribe(student => {
            this.dataSource$[index]['student'] = student;
          });
      });
    });
  }

}
