import {Component, Inject, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-enrollment',
  templateUrl: './add-enrollment.component.html',
  styleUrls: []
})
export class AddEnrollmentComponent implements OnInit {
  form = new FormGroup({
    firebase_id: new FormControl(),
    class_id: new FormControl(),
    student_id: new FormControl(),
  });

  classes: any[] = [];
  students: any[] = [];

  constructor(
    private store: AngularFirestore,
    private dialog: MatDialogRef<AddEnrollmentComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
  ) { }

  ngOnInit(): void {
    this.store.collection('students').valueChanges({idField: 'firebase_id'}).subscribe({
      next: value => {
        this.students = value;
      }
    });
    this.store.collection('classes').valueChanges({idField: 'firebase_id'}).subscribe({
      next: value => {
        this.classes = value;
      }
    });
  }

  enroll() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.firebase_id) {
      this.store.collection('enrollments').doc(this.form.value.firebase_id).update(this.form.value).then(() => {
        this.dialog.close();
      });
    } else {
      this.store.collection('enrollments').add(this.form.value).then(() => {
        this.dialog.close();
      });
    }
  }
}
