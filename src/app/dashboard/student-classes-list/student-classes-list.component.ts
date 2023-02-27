import {Component, Inject, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-student-classes-list',
  templateUrl: './student-classes-list.component.html',
  styleUrls: []
})
export class StudentClassesListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'timing', 'room_id'];
  dataSource$: any[] = [];

  constructor(
    private store: AngularFirestore,
    private dialog: MatDialogRef<StudentClassesListComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
  ) {
  }

  ngOnInit(): void {
    this.store.collection('enrollments', ref => ref.where('student_id', '==', this.payload.firebase_id))
      .valueChanges().subscribe(value => {
      this.dataSource$ = value;
      value.forEach((value1: any, index) => {
        this.store.collection('classes')
          .doc(value1.class_id)
          .valueChanges()
          .subscribe(cls => {
            this.dataSource$[index]['class'] = cls;
          });
      });
    });
  }

}
