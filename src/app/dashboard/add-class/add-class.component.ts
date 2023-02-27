import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: []
})
export class AddClassComponent implements OnInit {
  form = new FormGroup({
    firebase_id: new FormControl(),
    id: new FormControl(),
    room_id: new FormControl(),
    timing: new FormControl(),
  });

  constructor(
    private store: AngularFirestore,
    private dialog: MatDialogRef<AddClassComponent>,
    @Inject(MAT_DIALOG_DATA) public payload: any,
  ) {
    if (this.payload) {
      this.form.patchValue(this.payload);
    }
  }

  ngOnInit(): void {
  }

  addClass() {
    if (this.form.invalid) {
      return;
    }
    if (this.form.value.firebase_id) {
      this.store.collection('classes').doc(this.form.value.firebase_id).update(this.form.value).then(() => {
        this.dialog.close();
      });
    } else {
      this.store.collection('classes').add(this.form.value).then(() => {
        this.dialog.close();
      });
    }

  }
}
