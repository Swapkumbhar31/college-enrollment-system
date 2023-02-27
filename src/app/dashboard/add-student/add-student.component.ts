import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: []
})
export class AddStudentComponent implements OnInit {
  form = new FormGroup({
    firebase_id: new FormControl(),
    id: new FormControl(),
    name: new FormControl(),
    program: new FormControl(),
    term: new FormControl(),
  });

  constructor(
    private store: AngularFirestore,
    private dialog: MatDialogRef<AddStudentComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
  ) {
    if (this.payload) {
      this.form.patchValue(this.payload);
    }
  }

  ngOnInit(): void {
  }

  addStudent() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.firebase_id) {
      this.store.collection('students').doc(this.form.value.firebase_id).update(this.form.value).then(() => {
        this.dialog.close();
      });
    } else {
      this.store.collection('students').add(this.form.value).then(() => {
        this.dialog.close();
      });
    }

  }
}
